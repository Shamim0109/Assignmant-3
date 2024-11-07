const express = require("express");
const app = express();
const blogRoutes = require("./routes/blogRoutes");
const homeRoutes = require("./routes/homeRoutes");

app.use(express.json()); // for parsing application/json
app.use("/blog", blogRoutes);
app.use("/", homeRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});