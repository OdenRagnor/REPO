const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(express.json());

// Serve the "public" folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log("server running on port 3000");
});
