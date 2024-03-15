const {Router} = require("express");
const PeopleController = require("../controller/PeopleController.js");
const router = new Router();

router.get("./pessoas", PeopleController.getAll);

module.exports = router;