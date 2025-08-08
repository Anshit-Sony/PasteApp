# Anshit-Sony-PasteApp

Anshit-Sony-PasteApp is a modern, lightweight application designed to manage and view pastes efficiently. Built with React and powered by Vite for blazing-fast development, this project leverages Redux for state management and follows a modular structure to ensure scalability and maintainability.

## Features
- **Home Page**: A welcoming landing page for the app.
- **Navbar**: Easy navigation between different sections.
- **Pastes Management**: Create, view, and manage pastes seamlessly.
- **View Pastes**: Detailed view of individual pastes.
- **State Management**: Redux toolkit is used for managing the application's state.

## Directory Structure
Anshit-Sony-PasteApp/ ├── README.md # Project documentation ├── eslint.config.js # ESLint configuration ├── index.html # Main HTML file ├── package.json # Dependencies and scripts ├── vite.config.js # Vite configuration ├── public/ # Static assets served directly └── src/ # Application source code ├── App.css # Global app styles ├── App.jsx # Main App component ├── index.css # Global styles ├── main.jsx # Application entry point ├── app/ # Application-wide configurations │ └── store.js # Redux store configuration ├── assets/ # Application assets (images, icons, etc.) ├── components/ # Reusable components │ ├── Home.jsx # Home page component │ ├── Navbar.jsx # Navbar component │ ├── Pastes.jsx # Component to list pastes │ └── ViewPastes.jsx # Component to view individual pastes └── features/ # Redux slices └── pasteSlice.js # Slice for managing paste-related state

