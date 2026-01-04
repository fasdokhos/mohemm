# StudyPro

StudyPro is a comprehensive platform designed to assist students with their studies. It features a robust backend API and a modern React frontend.

## Features

- **Student Reports:** Generate and view detailed student reports.
- **Resource Management:** Upload and manage study resources.
- **Solver API:** Integrated solver for academic problems.
- **Real-time Chat:** Socket.io integration for communications.

## Project Structure

- **frontend/**: React + Vite application.
- **backend/**: Node.js + Express server.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install Backend Dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Install Frontend Dependencies:
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. **Start Backend:**
   ```bash
   cd backend
   node server_final.js
   ```
   Server runs on `http://localhost:8000`.

2. **Start Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```
   App runs on `http://localhost:5173`.

## Deployment

The backend serves the frontend static files from `frontend/dist`. To build for production:

```bash
cd frontend
npm run build
```

## License

[MIT](LICENSE)
