const express = require('express');
const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// Route to get all payments
router.get('/get-all', (req, res) => {
    const payments = []; // Assume this will hold payment data

    res.status(200).json({
        message: 'Successfully retrieved all payments',
        payments // Returns an empty array for now, can be populated later
    });
});

// Route to create a payment
router.post('/create-payment', (req, res) => {
    const paymentData = req.body;

    // You can add logic to save paymentData to a database here

    res.status(201).json({
        status: 'ok',
        message: 'Payment created successfully',
        payment: paymentData // Echo back the created payment data
    });
});

module.exports = router;
