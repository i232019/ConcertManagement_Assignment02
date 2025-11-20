Concert Management System – React JS

This project is a React JS remake of Assignment 01, redesigned with modern frontend concepts and improved user experience. The system includes concert listings, booking forms, gallery, contact form, and additional enhancements such as API integrations, persistent storage, and an AI chat assistant.
The website is fully component-based, responsive, and organized with a clean folder structure using React Router, Tailwind/CSS Modules, and external APIs.

Features

Core Features (Task 1 – React Conversion)
Complete React component structure
Page navigation using react-router-dom
Local JSON data fetching for static content
Firebase Firestore integration for form submissions
Local Storage feature for saving user preferences
Organized folder structure with reusable components
Responsive layout with Tailwind/CSS Modules
Task 2 – GitHub User Search
Search GitHub users by username
Fetches data using GitHub Search API
Displays user avatar, profile link, and username
Handles loading and error states
Endpoint:
https://api.github.com/search/users?q={username}

AI Chat – Ask AI (OpenAI)
Interactive chat box for user queries
Uses OpenAI free API model gpt-4o-mini
Endpoint:
https://api.openai.com/v1/chat/completions

Firebase Firestore
Stores user-submitted form data (e.g., contact/feedback form)
Collection: userResponses
Operation: addDoc() to save submissions

Setup and Run Instructions
Clone the repository
git clone https://github.com/yourusername/assignment02.git
cd assignment02
Install dependencies
npm install

Create a .env file in the project root
REACT_APP_OPENAI_API_KEY=your_openai_key
REACT_APP_FIREBASE_API_KEY=your_firebase_key

Important: Do NOT upload .env to GitHub.

Start the React application
npm start
Your app will run at: http://localhost:3000/

Members Contribution
Noor Fatima
Implemented the core website (Task 1) including React components, routing, JSON data loading, Firebase form storage, local storage feature, video embedding, UI layout, and folder structure.
Ensured design consistency and proper component architecture.
Noor Ul Ain
Implemented Task 2 (GitHub User Search) including API integration, dynamic search, UI rendering, and error handling.
Developed the AI Chat / Ask AI feature using OpenAI free model.
Assisted with debugging, styling improvements, and final testing across the project.
