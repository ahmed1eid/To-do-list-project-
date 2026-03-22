# 📝 React To-Do List App

A fast, scalable, and responsive To-Do management application built with **React.js** and **Material UI (MUI)**. This project demonstrates clean architecture using the **Context API** and **useReducer** for predictable and maintainable state management.

<img width="618" height="798" alt="Todos_list" src="https://github.com/user-attachments/assets/34379ebd-531e-46f6-9dc6-950123ddfd54" />


---

## 🌐 Live Demo:
* 👉 https://precious-salamander-c4e982.netlify.app/

## 🚀 Features

* ✅ **Full CRUD Operations:** Easily create, read, update, and delete tasks.
* 🔍 **Smart Filtering:** Switch between **All**, **Active**, and **Completed** tasks.
* 💾 **Persistent Storage:** Tasks are saved using **LocalStorage API**.
* 🎨 **Modern UI/UX:** Clean and responsive design using **Material UI** with dark mode support.
* ⚙️ **Advanced State Management:** Built using the **Reducer Pattern** for better scalability.

---

## 🛠️ Tech Stack

| Technology   | Description                                                                    |
| ------------ | ------------------------------------------------------------------------------ |
| React.js     | Core library using Hooks (`useState`, `useEffect`, `useReducer`, `useContext`) |
| Material UI  | UI components, icons, and theming                                              |
| Context API  | Global state management                                                        |
| UUID         | Unique ID generation for tasks                                                 |
| LocalStorage | Data persistence in browser                                                    |

---

## 📂 Project Structure

```bash
src/
├── components/        # Reusable UI components (Task, AddTask, Dialogs...)
├── Contexts/          # Global state (TasksContext)
├── Reducers/          # State logic (TodosReducer)
├── App.js             # Main app component
└── index.js           # Entry point
```

---

## ⚙️ Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-todo-reducer.git
```

### 2. Navigate into the project

```bash
cd react-todo-reducer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

The application will run on:
👉 [http://localhost:3000](http://localhost:3000)

---

## 💡 Key Learnings

* **Reducer Pattern:** Centralized state updates for predictable behavior.
* **Avoiding Prop Drilling:** Using Context API for clean state sharing.
* **Performance Optimization:** Lazy initialization with LocalStorage.
* **Clean Code Practices:** Separation of concerns between UI and logic.

---

## 📌 Future Improvements

* Add drag & drop functionality
* Add due dates and reminders
* Integrate backend (Node.js / Firebase)
* Add authentication system

---

## 👨‍💻 Authors

* <a href= "https://github.com/ahmed1eid">Ahmed Eid</a>
* <a href= "https://github.com/adel307">Adel ahmed</a>
* <a href= "https://github.com/islam412">islam hamdy</a>

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
