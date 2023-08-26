import express from 'express';
import * as dotenv from "dotenv";
import setupCors from './helpers/cors.helper.js'
import setupLogging from './helpers/logging.helper.js'
import setupBodyParser from './helpers/bodyParser.helper.js'
import createError from "http-errors"
import mainRoutes from './routes/index.route.js'
import errorHandler from './middleware/errorhandler.middleware.js';
import dbConnection from './helpers/mongodbconnection.helper.js';

dotenv.config();
const app = express();

setupCors(app);
setupLogging(app);
setupBodyParser(app);
dbConnection();
app.use(mainRoutes)

app.use(async (req, res, next) => {
    next(new createError.NotFound());
})
app.use(errorHandler);

app.listen(process.env.PORT, () => {
return console.log(`Express is listening at http://localhost:${process.env.PORT}`);
});