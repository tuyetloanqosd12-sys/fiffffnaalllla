# Quick Start Guide

Get FOMO Strategy running locally in 5 minutes.

## Prerequisites

- Node.js 18+ 
- Python 3.9+
- MongoDB (local or Atlas)
- Yarn package manager

## 🚀 Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-repo/fomo-strategy.git
cd fomo-strategy
```

### 2. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your MongoDB connection string
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
yarn install

# Configure environment
cp .env.example .env
# Edit .env if needed (default: http://localhost:8001)
```

### 4. Start Services

**Terminal 1 - Backend:**
```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

**Terminal 2 - Frontend:**
```bash
cd frontend
yarn start
```

### 5. Open Application

Navigate to: `http://localhost:3000`

## 📁 Environment Variables

### Backend (`backend/.env`)

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=fomo_strategy
```

### Frontend (`frontend/.env`)

```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

## 🧪 Testing

### Backend API

```bash
# Health check
curl http://localhost:8001/api/

# Strategy state
curl http://localhost:8001/api/strategy/state
```

### Frontend

```bash
cd frontend
yarn test
```

## 📱 Pages

| Page | URL | Description |
|------|-----|-------------|
| Home (About) | `/` | Strategy explanation |
| Auction | Click "Auction" | NFT bidding interface |
| Strategy | Click "Enter App" | Treasury dashboard |

## 🔧 Development

### Hot Reload

Both frontend and backend support hot reload:
- Frontend: Automatic on file save
- Backend: Enabled with `--reload` flag

### Adding Components

```bash
# Create new auction component
touch frontend/src/components/auction/NewComponent.js

# Export from index.js
echo "export { default as NewComponent } from './NewComponent';" >> frontend/src/components/auction/index.js
```

### Styling Guidelines

- Use TailwindCSS utilities
- Follow gray color palette
- Single accent color (emerald)
- No emoji icons - use SVG
- Rounded corners (rounded-xl, rounded-2xl)

## 🐛 Troubleshooting

### MongoDB Connection Failed

```bash
# Check if MongoDB is running
mongod --version

# Start MongoDB service
sudo systemctl start mongod
```

### Port Already in Use

```bash
# Find and kill process on port 8001
lsof -i :8001
kill -9 <PID>

# Or change port in backend command
uvicorn server:app --port 8002
```

### Frontend Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules yarn.lock
yarn install
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [TailwindCSS](https://tailwindcss.com)
- [FastAPI](https://fastapi.tiangolo.com)
- [Framer Motion](https://www.framer.com/motion)

---

Need help? Open an issue on GitHub.
