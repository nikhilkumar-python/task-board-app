# 📋 Task Board Application

A full-stack Task Board application built with **React** and **Flask** that allows users to create, view, update, and delete tasks. It provides an intuitive interface for managing daily tasks with priority levels.

---

## 🚀 Live Demo

🔗 task-board-app-nu.vercel.app

🔗 https://task-board-app-m5jq.onrender.com

---

## 📸 Screenshots

### Home Page

> <img width="1920" height="1080" alt="{002F9071-6128-4958-A01C-67B72F2AFBF5}" src="https://github.com/user-attachments/assets/6d81f6a7-f6be-4959-8c34-7ef3d4fbbc48" />


```
/screenshots/home.png
```

---

## ✨ Features

- ✅ Add new tasks
- ✅ View all tasks
- ✅ Update task details
- ✅ Delete tasks
- ✅ Set task priority (High, Medium, Low)
- ✅ RESTful API integration
- ✅ Responsive user interface
- ✅ JSON-based backend storage

---

## 🛠 Tech Stack

### Frontend

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Fetch API

### Backend

- Python
- Flask
- Flask-CORS

### Database

- JSON File Storage

### Tools

- Git
- GitHub
- VS Code
- Postman

---

## 📂 Project Structure

```
task-board/
│
├── backend/
│   ├── app.py
│   ├── tasks.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │
│   ├── package.json
│
├── requirements.txt
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/nikhilkumar-python/task-board-app.git
```

```bash
cd task-board-app
```

---

### 2️⃣ Backend Setup

```bash
cd backend
```

Create Virtual Environment

```bash
python -m venv venv
```

Activate

Windows

```bash
venv\Scripts\activate
```

Install Dependencies

```bash
pip install -r ../requirements.txt
```

Run Flask

```bash
python app.py
```

Backend will start on

```
http://127.0.0.1:5000
```

---

### 3️⃣ Frontend Setup

Open another terminal

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run React

```bash
npm run dev
```

Frontend will start on

```
http://localhost:5173
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /tasks | Get all tasks |
| POST | /tasks | Add a new task |
| PUT | /tasks/<id> | Update task |
| DELETE | /tasks/<id> | Delete task |

---

## 💡 Future Improvements

- User Authentication
- Login & Registration
- MySQL Database
- Due Dates
- Search Tasks
- Filter by Priority
- Dark Mode
- Drag & Drop Tasks
- Deployment on Render & Vercel

---

## 🧪 Testing

Backend API tested using

- Postman

Frontend tested using

- Chrome Browser

---

## 📈 Learning Outcomes

This project helped me learn:

- REST API Development
- Flask Backend Development
- React Hooks
- State Management
- CRUD Operations
- Fetch API
- Component-based Architecture
- Git & GitHub Workflow

---

## 👨‍💻 Author

**Nikhil Kumar**

Python Backend Developer

GitHub:
https://github.com/nikhilkumar-python

LinkedIn:

www.linkedin.com/in/nikhil-kumar-32523a3a9

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is licensed under the MIT License.
