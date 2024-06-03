// 1. Find all the topics and tasks which are thought in the month of October.

db.zenData.aggregate([
  {
    $project: {
      // Ensuing web_development_topics and tasks_listed as arr
      web_development_topics: {
        $cond: {
          if: { $isArray: "$topics.web_development" },
          then: "$topics.web_development",
          else: []
        }
      },
      tasks_list: {
        $cond: {
          if: { $isArray: "$tasks" },
          then: "$tasks",
          else: []
        }
      }
    }
  },
  {
    $project: {
      // topics taught in Otbr
      topics_in_october: {
        $filter: {
          input: "$web_development_topics",
          as: "topic",
          cond: {
            $in: ["October", { $ifNull: ["$$topic.taught_month", []] }]
          }
        }
      },
      // topics completed in Otbr
      tasks_in_october: {
        $filter: {
          input: "$tasks_list",
          as: "task",
          cond: {
            $and: [
              { $gte: ["$$task.completed_on", "2020-10-01"] },
              { $lte: ["$$task.completed_on", "2020-10-31"] }
            ]
          }
        }
      }
    }
  }
])



// 2. Find all the company drives which appeared between 15-oct-2020 and 31-oct-2020

db.zenData.aggregate([
  {
    $match: {
      "company_drives.date": {
        $gte: "2020-10-15",
        $lte: "2020-10-31"
      }
    }
  },
  {
    $project: {
      company_drives: {
        $filter: {
          input: "$company_drives",
          as: "drive",
          cond: {
            $and: [
              { $gte: ["$$drive.date", "2020-10-15"] },
              { $lte: ["$$drive.date", "2020-10-31"] }
            ]
          }
        }
      }
    }
  }
])


//3 . Find all the company drives and students who are appeared for the placement.


db.zenData.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "company_drives.students_appeared",
      foreignField: "userID",
      as: "students_info"
    }
  },
  {
    $project: {
      "company_drives": 1,
      "students_names": "$users.name"
    }
  }
])


//   4. find the number of problems solved by the user in codekatta


db.zenData.aggregate([
  {
    $unwind: "$codekatta.user_problems" // Unwind to access each individual user's problem
  },
  {
    $group: {
      _id: "$codekatta.user_problems.userID", // Group by user ID
      total_problems_solved: { $sum: "$codekatta.user_problems.completed_questions" } // Sum completed questions for each user
    }
  },
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "userID",
      as: "user_info"
    }
  },
  {
    $project: {
      student_name: { $arrayElemAt: ["$users.name", 0] }, // Get the name of the user
      total_problems_solved: 1 // Include the total_problems_solved field
    }
  }
])