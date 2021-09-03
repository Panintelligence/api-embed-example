set PI_URL="https://localhost:8224"
set PI_USERNAME="admin"
set PI_PASSWORD="dashboard"

echo "Starting backend..."
cd backend
START /b npm start

echo "Starting frontend..."
cd ..
cd frontend
npm start