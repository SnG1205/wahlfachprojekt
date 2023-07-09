const express = require("express");
const cors = require("cors");
const router = require("./routes");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/api', router);


app.all("*", (req, res, next) => {
    next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});
app.use(errorHandler);

const PORT = 3300;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});


module.exports = app;