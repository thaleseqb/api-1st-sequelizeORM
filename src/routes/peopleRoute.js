const {Router} = require("express");
const PeopleController = require("../controller/PeopleController.js");
const RegistrationController = require("../controller/RegistrationController.js");

const peopleController = new PeopleController();
const registrationController = new RegistrationController();

const router = new Router();

router.get("/pessoas", (req, res) => peopleController.getAll(req, res));
router.get("/pessoas/:id", (req, res) => peopleController.getOneById(req, res));
router.post("/pessoas", (req, res) => peopleController.createNew(req, res));
router.put("/pessoas/:id", (req, res) => peopleController.update(req, res));
router.delete("/pessoas/:id", (req, res) => peopleController.delete(req, res));
router.get("/pessoas/:estudanteId/matriculas", (req, res) => peopleController.getRegistration(req, res));
router.post("/pessoas/:estudanteId/matriculas", (req, res) => registrationController.createNew(req, res));

module.exports = router;