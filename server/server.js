require('dotenv').config();
const express = require('express');
const db = require("./db");

const app = express();

// middleware
app.use(express.json()); 


// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM restaurants');
        console.log(results);
        res.status(200).json({
            status: "success", 
            data: {
                restaurants: results.rows // Assuming results is a pg.QueryResult object
            }
        });
    } catch (error) {
        console.error("Error fetching restaurants:", error);
        res.status(500).json({
            status: "error",
            message: "An error occurred while fetching restaurants"
        });
    }
})

// get a specific restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params)

    res.status(200).json({
        status: "success",
        data: {
            restaurant: "Wendys"
        }
    })
})

//create a new restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body)

    res.status(201).json({
        status: "success",
        data: {
            restaurant: "Pizza Hut"
        }
    })
})

// update an existing restaurang
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id)
    console.log(req.body)

    res.status(200).json({
        status: "success",
        data: {
            restaurant: "Wendys"
        }
    })
})


// delete a specific restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {

    res.status(204).json({
        status: "success"
    })
})


const port = process.env.PORT;

app.listen(port, () => {
    console.log('server is up and listening')
})