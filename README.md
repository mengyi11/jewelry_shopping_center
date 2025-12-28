# Jewelry Store Project

A full-stack jewelry store application with Next.js frontend and Node.js backend.

## Project Structure

```
Jewelry/
├── frontend/          # Next.js frontend with TailwindCSS
│   ├── src/
│   │   └── app/      # Next.js App Router
│   ├── public/       # Static assets
│   └── package.json
│
└── backend/          # Node.js Express backend
    ├── src/
    │   ├── index.js  # Entry point
    │   ├── routes/   # API routes
    │   ├── controllers/
    │   ├── middlewares/
    │   └── utils/
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The frontend will be available at http://localhost:3000

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (optional, defaults are provided):
```bash
PORT=3001
NODE_ENV=development
```

4. Run the backend server:
```bash
npm start
# or for development with auto-reload:
npm run dev
```

The backend API will be available at http://localhost:3001

## Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **JavaScript** - JavaScript (ES6+)
- **TailwindCSS** - Utility-first CSS framework
- **ESLint** - Code linting

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Backend
- `npm start` - Start server
- `npm run dev` - Start server with auto-reload (using nodemon)

## API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check endpoint

## License

ISC
