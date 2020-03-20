//require method is used by node and is currently not the same as import. Modules can be installed globally or locally but either way they can (normally) be referenced with require or import from in the same way. The module http and body-parser are defaultJS modules which are preinstalled globally once node is installed.
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const mongoDb = require("mongodb");
const dotenv = require("dotenv");

//Constants
const app = express();
const server = http.createServer(app);

const database = "myportfolio";
const collectionProjects = "projects";
const collectionSlides = "slides";
const collectionUsers = "users";

//Initialization
if (process.env.NODE_ENV === "development") dotenv.config({
    path: "./development.env"
});
else if (process.env.NODE_ENV === "production") dotenv.config({
    path: "./production.env"
});
else if (process.env.NODE_ENV === "production-heroku") console.info("Initializing production build on Heroku");
else throw new Error("The environment is not know. The server could not be started.");


console.info(`Trying to connect to mongoDb with URL ${process.env.MONGO_DB_URL}`);

const client = new mongoDb.MongoClient(process.env.MONGO_DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });

client.connect(err => {
    if (err) throw err;

    console.info(`Successfully connected to mongoDb with URL ${process.env.MONGO_DB_URL}`);

    const db = client.db(database);
    exports.colProjects = db.collection(collectionProjects);
    exports.colSlides = db.collection(collectionSlides);
    exports.colUsers = db.collection(collectionUsers);
    client.close();
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Middleware functions
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
    console.info('Time: ', Date.now(), req.method, req.originalUrl);
    next();
});

app.use("api/v1/projects", require('./src/projects/routes'));
app.use("api/v1/slides", require('./src/slides/routes'));
app.use("api/v1/users", require('./src/users/routes'));

app.use(express.static(`${__dirname}/public`));

// Special code for Heroku deployment (This directory has to be embedded in the frontend directory)
if (process.env.NODE_ENV === "production-heroku") {
    app.use(express.static(`${__dirname}/../build`));
    app.use((req, res) => res.status(200).sendFile(`${__dirname}/build/index.html`));
}

server.listen(process.env.PORT, () => console.info(`server is running in ${process.env.NODE_ENV} on ${process.env.URL}`));