require('dotenv').config();
const express = require('express');
const db = require("./db");
const cors = require("cors")

const app = express();

// middleware
app.use(cors())
app.use(express.json());


// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM restaurants');
        // console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows
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
app.get("/api/v1/restaurants/:id", async (req, res) => {
    console.log(req.params.id)
    try {
        const results = await db.query("SELECT * FROM restaurants WHERE id = $1", [req.params.id]);
        // console.log(results)
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        })
    } catch (error) {
        console.error("Error fetching restaurants:", error);
        res.status(500).json({
            status: "error",
            message: "An error occurred while fetching restaurants"
        });
    }
})

//create a new restaurant
app.post("/api/v1/restaurants", async (req, res) => {

    try {
        const results = await db.query("INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *", [req.body.name, req.body.location, req.body.price_range])
        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        })
    } catch (error) {
        console.error("Error fetching restaurants:", error);
        res.status(500).json({
            status: "error",
            message: "An error occurred while fetching restaurants"
        });
    }
})

// update an existing restaurang
app.put("/api/v1/restaurants/:id", async (req, res) => {
    const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 returning *", [req.body.name, req.body.location, req.body.price_range, req.params.id])
    try {
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows
            }
        })
    }
    catch (error) {
        console.error("Error fetching restaurants:", error);
        res.status(500).json({
            status: "error",
            message: "An error occurred while fetching restaurants"
        });
    }
})


// delete a specific restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {

    try {
        const result = await db.query("DELETE FROM restaurants WHERE id = $1", [req.params.id])
        res.status(204).json({
            status: "success"
        })
}
catch (error) {
    console.error("Error fetching restaurants:", error);
        res.status(500).json({
            status: "error",
            message: "An error occurred while fetching restaurants"
        });
}
})


const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`)
})