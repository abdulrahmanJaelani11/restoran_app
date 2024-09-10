const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const path = require('path');

const menuRoutes = require('./routes/MenuRoutes');
const ReservationRoutes = require('./routes/ReservationRoutes');
const OrderRoutes = require('./routes/OrderRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/pic-product', express.static(path.join(__dirname, './assets/img')));
app.use('/menu', menuRoutes);
app.use('/reservation', ReservationRoutes);
app.use('/order', OrderRoutes);

// Middleware untuk menangani rute yang tidak ditemukan
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
