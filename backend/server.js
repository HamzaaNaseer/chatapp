const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
app.listen(5000, console.log(`server started on port ${port}`));
