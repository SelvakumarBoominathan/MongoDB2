// 1. Find all the topics and tasks which are thought in the month of October.
//Tasks
db.Tasks.aggregate([
  { $match: { completed_month: "October" } },
  { $project: { _id: 0, task_name: "$description" } },
]);

//Topics
db.Topics.aggregate([
  { $match: { taught_month: "October" } },
  { $project: { _id: 0, topic_name: "$topic" } },
]);

// 2. Find all the company drives which appeared between 15-oct-2020 and 31-oct-2020

db.Tasks.find(
  {
    completed_on: {
      $gte: "2020-10-15",
      $lte: "2020-10-31",
    },
  },
  {
    _id: 0,
    taskID: 1,
    description: 1,
  }
);

//3 . Find all the company drives and students who are appeared for the placement.

db.Company.aggregate([
  {
    $lookup: {
      from: "Users",
      localField: "students_appeared",
      foreignField: "userID",
      as: "students",
    },
  },
  {
    $project: {
      _id: 0,
      company_name: 1,
      date: 1,
      students: "$students.name",
    },
  },
]);

//   4. find the number of problems solved by the user in codekatta

db.zenData.aggregate([
  {
    $unwind: "$Codekatta.user_problems", // Unwind to access each individual user's problem
  },
  {
    $group: {
      _id: "$Codekatta.user_problems.userID", // Group by user ID
      total_problems_solved: {
        $sum: "$Codekatta.user_problems.completed_questions",
      }, // Sum completed questions for each user
    },
  },
  {
    $lookup: {
      from: "Users",
      localField: "_id",
      foreignField: "userID",
      as: "user_info",
    },
  },
  {
    $project: {
      student_name: { $arrayElemAt: ["$user_info.name", 0] }, // Get the name of the user
      total_problems_solved: 1, // Include the total_problems_solved field
    },
  },
]);

// 5.Find all the mentors with who has the mentee's count more than 15.

db.Mentors.find(
  { users_count: { $gt: 15 } },
  { _id: 0, name: 1, users_count: 1 }
);

//6.Find the number of users who are absent and task is not submitted between 15-oct-2020 and 31-oct-2020

db.users.aggregate([
  {
    $match: {
      $or: [
        {
          attended_dates: {
            $not: {
              $regex: /^2020-10-(15|31)$/,
            },
          },
        },
        {
          $expr: {
            $eq: [{ $size: "$tasks_submitted" }, 0],
          },
        },
      ],
    },
  },
  {
    $count: "absent_or_no_tasks",
  },
]);
