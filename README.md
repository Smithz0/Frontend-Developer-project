# Simple Quiz Application

This is a frontend assignment project implementing an interactive quiz interface.

## 🛠️ Setup Instructions

To run this project locally, follow these steps:

1.  **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) installed (version 14 or higher recommended).
2.  **Clone/Download**: Get the project files onto your local machine.
3.  **Install Dependencies**: Open a terminal in the project root and run:
    ```bash
    npm install
    ```
4.  **Run Development Server**: Start the local server by running:
    ```bash
    npm run dev
    ```
5.  **View App**: Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

## 💻 Tech Stack Used

*   **React (v19)**: For building the component-based UI.
*   **Vite**: For fast development tooling and building.
*   **CSS3**: Custom styling with CSS Variables for theming (Glassmorphism design).
*   **Lucide React**: For consistent and clean icons.
*   **JavaScript (ES6+)**: Core logic.

## ✨ Key Features Implemented

*   **Quiz Logic**:
    *   Sequential navigation (Next/Previous).
    *   Answer selection validation (cannot proceed without answering).
    *   Score calculation and percentage display.
*   **UI/UX**:
    *   **Glassmorphism Design**: Modern, translucent card aesthetics.
    *   **Progress Tracking**: Visual progress bar indicating quiz completion.
    *   **Animations**: Smooth fade-in transitions for questions and a counting animation for the final score.
    *   **Responsive**: scales well on different screen sizes.
*   **Clean Code**:
    *   Separation of concerns (Data, Logic, View).
    *   Human-readable variable names and comments.

## 📝 Assumptions Made

*   The quiz data is static and currently hosted locally in `src/data/questions.js`.
*   The number of options per question is flexible, but the UI is optimized for 3-4 short text options.
*   Users need to answer a question before moving to the next one to ensure a complete score calculation.

## ⏱️ Time Spent on Assignment

*   **Total Time**: Approximately 4 hours.
   
