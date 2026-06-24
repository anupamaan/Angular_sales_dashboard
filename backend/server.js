const db = require('./db'); 
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// app.get('/api/test', (req, res) => {
//     res.json({
//         message: 'Backend is running successfully'
//     });
// });

const PORT = 3000;
app.get('/api/sales', (req, res) => {
    db.query('SELECT order_id, product_id, category, quantity, sales, region, DATE_FORMAT(order_date, "%d-%m-%Y") AS order_date FROM sales', (err, results) => {
        if (err) {
            res.status(500).json(err);
            return;
        }
        //  console.log('Results:', results);
        res.json(results);
       
    });
});

app.get('/api/regions', (req, res) => {
    db.query('SELECT region, SUM(sales) AS total_sales FROM sales GROUP BY region', (err, results) => {
        if (err) {
            res.status(500).json(err);
            return;
        }

        res.json(results);
    });
});

app.get('/api/monthly-sales', (req, res) => {
    db.query('SELECT DATE_FORMAT(order_date, "%Y-%m") AS month, SUM(sales) AS total_sales FROM sales GROUP BY month', (err, results) => {
        if (err) {
            res.status(500).json(err);
            return;
        }
        console.log('******** Monthly Sales ********:', results);
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});