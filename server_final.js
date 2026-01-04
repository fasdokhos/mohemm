const express = require('express');
const cors = require('cors');
const path = require('path');
const { createServer } = require('http');
const { Server } = require('socket.io');

// Config
const PORT = 8000;
const app = express();
const httpServer = createServer(app);

// Middleware
app.use(cors());
app.use(express.json());

// 1. Static Files
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 2. API Routes (Safe Loading)
try {
    app.use('/api/auth', require('./src/routes/authRoutes'));
    app.use('/api/resources', require('./src/routes/resourceRoutes'));
    app.use('/api/solver', require('./src/routes/solverRoutes'));
    app.use('/api/reports', require('./src/routes/reportRoutes'));
} catch (e) {
    console.error("Route Check: Some routes failed to load. API may be limited.", e.message);
}

// 3. Health Check
app.get('/api/health', (req, res) => res.json({ status: 'live' }));

// 4. React Fallback
app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// 5. Socket.io
const io = new Server(httpServer, { cors: { origin: "*" } });
io.on('connection', (socket) => {
    socket.on('join_chat', (u) => io.emit('receive_message', { text: `${u} joined`, isSystem: true }));
    socket.on('send_message', (d) => io.emit('receive_message', d));
});

// Start
httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`StudyPro Server running on Port ${PORT}`);
});

// DB Sync (Optional/Async)
try {
    const sequelize = require('./src/config/database');
    sequelize.sync().catch(e => console.log('DB init warning:', e.message));
} catch (e) { }
