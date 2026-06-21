#  ALDOS - Project Management App

![ALDOS](https://img.shields.io/badge/Project-Full%20Stack%20Project%20Management-6C63FF)

A full-stack project management application built with modern web technologies.  
ALDOS helps individuals and teams organize projects, manage tasks, track progress, and improve productivity.

---

#  Features

##  User Dashboard

- Modern project management dashboard
- View project statistics
- Track productivity
- Monitor deadlines
- Responsive interface

---

##  Project Management

- Create projects
- Update project details
- Delete projects
- Track project progress
- Assign team members
- Manage project status

---

##  Task Management

- Create and manage tasks
- Assign tasks to users
- Update task status
- Set priorities
- Add deadlines

Task workflow:

```
To Do → In Progress → Completed
```

---

##  Team Management

- Add team members
- Manage roles
- Collaborate on projects
- Team based workflow

---

##  Authentication

- User registration
- User login
- JWT based authentication
- Protected routes
- Secure password hashing

---

#  Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router
- Axios
- Lucide React
- Framer Motion
- Recharts

---

## Backend

- Node.js
- Express.js
- REST API
- JWT Authentication
- bcrypt

---

## Database

- MongoDB
- Mongoose
- MongoDB Atlas

---

#  Project Structure

```
ALDOS

│
├── frontend
│   ├── React Application
│   ├── Components
│   ├── Pages
│   └── Redux Store
│
├── backend
│   ├── API Server
│   ├── Controllers
│   ├── Routes
│   ├── Models
│   └── Middleware
│
└── README.md
```

---

#  Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_LINK
```

Navigate into the project:

```bash
cd Project_Name
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# Backend Setup

```bash
cd backend

npm install

npm run dev
```

---

#  Environment Variables

Create a `.env` file inside backend:

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

#  MongoDB Setup

1. Create a MongoDB Atlas account

2. Create a new cluster

3. Create database user

4. Allow your IP address

5. Copy connection string

Example:

```
mongodb+srv://username:password@cluster.mongodb.net/aldos
```

Add it to:

```
MONGO_URI
```

---

#  API Endpoints

## Authentication

```
POST /api/auth/register

POST /api/auth/login
```

---

## Projects

```
GET    /api/projects

POST   /api/projects

PUT    /api/projects/:id

DELETE /api/projects/:id
```

---

## Tasks

```
GET    /api/tasks

POST   /api/tasks

PUT    /api/tasks/:id

DELETE /api/tasks/:id
```

---

#  UI Design

ALDOS includes:

- Responsive design
- Modern SaaS dashboard
- Clean cards
- Smooth animations
- Glassmorphism UI
- Dark/Light mode
- Mobile friendly layout

---

# Screenshots



## Home Page

![Home Page](./Screenshots/Home.png)


## Collection Page

![Projects Page](./Screenshots/Projects.png)


## About Page

![Teams Page](./Screenshots/Teams.png)

---

# Future Improvements

- AI task recommendations
- Real-time collaboration
- Calendar integration
- Notifications
- File sharing
- Team chat
- Deployment

---

# 👩 Author

**Nandini Vasudev**

Full Stack Project Management Application