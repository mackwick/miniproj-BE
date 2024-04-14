"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//DEPENDENCIES, etc
var dotenv = require("dotenv");
var express_1 = require("express");
var cors_1 = require("cors");
dotenv.config();
//if there is not port to find, exit the application
if (!process.env.PORT) {
    process.exit(1);
}
var PORT = parseInt(process.env.PORT, 10);
var app = (0, express_1.default)();
//MIDDLEWARE
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//ROUTES
//SERVER LISTENER
app.listen(PORT, function () {
    console.log("Listening on port ".concat(PORT));
});
