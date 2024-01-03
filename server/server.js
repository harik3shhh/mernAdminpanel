require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require('./router/auth-router');
const contactRoute = require ("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');

const corsOptions ={
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use("/api/admin", adminRoute);


app.use(errorMiddleware);

//PORT
const port = process.env.PORT; 

//DB connection
connectDb().then(()=>{
//LISTENING TO PORT
app.listen(port, ()=>{
    console.log(`Server is running on port ${port} `);
});
});



