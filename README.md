.

📝 React To-Do List App
A high-performance, responsive To-Do management application built with React.js and Material UI. This project focuses on clean architecture by using the Context API combined with useReducer for scalable state management.

🚀 Features
Full CRUD Functionality: Create, Read, Update, and Delete tasks seamlessly.

Smart Filtering: Quickly toggle between All, Active, and Completed tasks.

Persistent Storage: All data is synced with LocalStorage, ensuring your tasks remain available even after closing the browser.

Modern UI/UX: Built with Material UI (MUI), featuring a clean dark-themed interface, responsive layouts, and interactive dialogs.

Advanced State Management: Utilizes the Reducer Pattern to decouple business logic from the UI, making the code easier to maintain and test.

🛠️ Tech Stack
Framework: React.js (Hooks: useContext, useReducer, useEffect, useState).

UI Library: Material UI (MUI) for components, icons, and layout.

State Management: Context API + useReducer.

Unique IDs: uuid library for generating unique task identifiers.

Storage: Browser LocalStorage API.

📂 Project Structure
Plaintext
src/
├── components/        # UI Components (Task, AddTask, Dialogs, etc.)
├── Contexts/          # TasksContext for global state distribution
├── Reducers/          # TodosReducer containing the state transition logic
├── App.js             # Main application entry point
└── index.js           # DOM rendering
⚙️ Getting Started
Follow these steps to run the project locally:

Clone the repository:

Bash
git clone https://github.com/your-username/react-todo-reducer.git
Navigate to the project directory:

Bash
cd react-todo-reducer
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm start
The app will be available at http://localhost:3000.

💡 Key Learnings
During the development of this project, I implemented several advanced React concepts:

Reducer Pattern: Centralizing state updates to prevent "prop drilling" and unpredictable state changes.

Lazy Initialization: Optimized performance by reading from LocalStorage only during the initial mount.

Error Boundaries & Safety: Handled potential undefined states when filtering or mapping through task arrays.

Developed with ❤️ by [<a href= "https://github.com/ahmed1eid">Ahmed Eid</a> , <a href= "https://github.com/adel307">Adel ahmed</a> , <a href= "https://github.com/islam412">islam hamdy</a>]