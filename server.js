const express = require('express');
const app = express();
const PORT = 3000;

// Import the payment routes
const paymentRoutes = require('./routes/paymentRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

// Use the payment routes
app.use('/payment', paymentRoutes);

app.listen(PORT, () => {
    console.log(`Server is started on ${PORT}`);
});
