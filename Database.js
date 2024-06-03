const zenDB = {
  "users": [
    {
      "userID": "U001",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "course": "Web Development",
      "attended_dates": ["2020-10-15", "2020-10-20"],
      "tasks_submitted": ["T001"]
    },
    {
      "userID": "U002",
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "course": "Data Science",
      "attended_dates": ["2020-10-16", "2020-10-21"],
      "tasks_submitted": []
    }
  ],
  "codekatta": {
    "user_problems": [
      {
        "userID": "U001",
        "completed_questions": 50,
        "pending_questions": 10
      },
      {
        "userID": "U002",
        "completed_questions": 30,
        "pending_questions": 20
      }
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
  "tasks": {
    "completed_tasks": [
      {
        "taskID": "T001",
        "description": "Complete HTML Tutorial",
        "completed_on": "2020-10-02"
      },
      {
        "taskID": "T002",
        "description": "Build a React App",
        "completed_on": "2020-10-05"
      }
    ],
    "pending_tasks": [
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
    ]
  },
  "company_drives": [
    {
      "company_name": "Tech Corp",
      "date": "2020-10-15",
      "positions": ["Software Engineer", "Frontend Developer"],
      "students_appeared": ["U001"]
    },
    {
      "company_name": "Data Inc",
      "date": "2020-11-20",
      "positions": ["Data Scientist", "Data Analyst"],
      "students_appeared": ["U002"]
    },
    {
      "company_name": "Web Solutions",
      "date": "2020-10-25",
      "positions": ["Full Stack Developer", "Backend Developer"],
      "students_appeared": ["U001", "U002"]
    }
  ],
  "mentors": [
    {
      "name": "Alice Johnson",
      "id": "M001",
      "course_taught": "Web Development",
      "users": ["U001", "U002"]
    },
    {
      "name": "Bob Brown",
      "id": "M002",
      "course_taught": "Data Science",
      "users": ["U002"]
    }
  ]
}