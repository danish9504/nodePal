const express = require('express');
const app = express();

const PORT = 3000;


app.get('/payment/get-all', (req, res) => {
    // Placeholder for payments; eventually, this would be populated from a database
    const payments = []; // Assume this will hold payment data

    res.status(200).json({
        message: 'Successfully retrieved all payments',
        payments // Returns an empty array for now, can be populated later
    });
});


app.get('payment/create-payment',(req,res)=>{
    res.status(201).json({
        status:'ok',
        message: 'server is working fine'
    })
})




app.listen(PORT, ()=>{
    console.log(`server is started on ${PORT}`)
});