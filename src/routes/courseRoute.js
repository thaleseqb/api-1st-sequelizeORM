const {Router} = require("express");
const CourseController = require("../controller/CourseController.js");

const courseController = new CourseController();

const router = new Router();

router.get("/cursos", (req, res) => courseController.getAll(req, res));
router.get("/cursos/:id", (req, res) => courseController.getOneById(req, res));
router.post("/cursos", (req, res) => courseController.createNew(req, res));
router.put("/cursos/:id", (req, res) => courseController.update(req, res));
router.delete("/cursos/:id", (req, res) => courseController.delete(req, res));

module.exports = router;