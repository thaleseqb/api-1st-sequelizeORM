// This file is the meeting point of routes (middleware)
const express = require("express");
const people = require("./peopleRoute.js")

module.exports = (app) => {
    app.use(
        express.json(),
        people,
    );
};