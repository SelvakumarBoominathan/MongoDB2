const zenDB = {
  "users": [
    {
      "userID": "1",
      "name": "Ajith",
      "email": "ajith@gmail.com",
      "course": "Web Development",
      "attended_dates": ["2020-10-15", "2020-10-20"],
      "tasks_submitted": ["T001"]
    },
    {
      "userID": "2",
      "name": "Rajesh",
      "email": "rajesh@gmail.com",
      "course": "Data Science",
      "attended_dates": ["2020-10-16", "2020-10-21"],
      "tasks_submitted": ["T001", "T002"]
    },
    {
      "userID": "3",
      "name": "Priya",
      "email": "Priya@gmail.com",
      "course": "Data Science",
      "attended_dates": ["2020-10-16", "2020-10-21"],
      "tasks_submitted": ["T001", "T002"]
    },
    {
      "userID": "4",
      "name": "Mahesh",
      "email": "mahesh@gmail.com",
      "course": "UI/UX",
      "attended_dates": ["2020-10-16", "2020-10-21"],
      "tasks_submitted": ["T002"]
    },
  ],
  "codekatta": {
    "user_problems": [
      {
        "userID": "1",
        "completed_questions": 50,
        "pending_questions": 10
      },
      {
        "userID": "2",
        "completed_questions": 30,
        "pending_questions": 30
      },
      {
        "userID": "3",
        "completed_questions": 40,
        "pending_questions": 20
      },
      {
        "userID": "4",
        "completed_questions": 36,
        "pending_questions": 24
      },
    ]
  },
  "topics": {
    "web_development": [
      {
        "topic": "HTML",
        "taught_dates": ["2020-10-10"]
      },
      {
        "topic": "CSS",
        "taught_dates": ["2020-10-12"]
      },
      {
        "topic": "JavaScript",
        "taught_dates": ["2020-10-15"]
      }
    ]
  },
  "tasks": [{
        "taskID": "T001",
        "description": "Complete HTML Tutorial",
        "completed_on": "2020-10-02"
      },
      {
        "taskID": "T002",
        "description": "Build a React App",
        "completed_on": "2020-10-05"
      },
      {
        "taskID": "T003",
        "description": "Learn Node.js",
        "due_date": "2020-10-10"
      },
      {
        "taskID": "T004",
        "description": "Create a Portfolio Website",
        "due_date": "2020-10-15"
      }
   ],
  "company_drives": [
    {
      "company_name": "Tech Corp",
      "date": "2020-10-15",
      "positions": ["Software Engineer", "Frontend Developer"],
      "students_appeared": ["1", "3"]
    },
    {
      "company_name": "Data Inc",
      "date": "2020-11-20",
      "positions": ["Data Scientist", "Data Analyst"],
      "students_appeared": ["2", "3", "4"]
    },
    {
      "company_name": "Web Solutions",
      "date": "2020-10-25",
      "positions": ["Full Stack Developer", "Backend Developer"],
      "students_appeared": ["1", "2", "4"]
    }
  ],
  "mentors": [
    {
      "name": "Thiru",
      "id": "M001",
      "course_taught": "Web Development",
      "users": ["1", "2"]
    },
    {
      "name": "Kamal",
      "id": "M002",
      "course_taught": "Data Science",
      "users": ["3", "4"]
    }
  ]
}