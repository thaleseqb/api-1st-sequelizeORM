const {Router} = require("express");
const CategoryController = require("../controller/CategoryController");

const categoryController = new CategoryController();

const router = new Router();

router.get("/categorias", (req, res) => categoryController.getAll(req, res));
router.get("/categorias/:id", (req, res) => categoryController.getOneById(req, res));
router.post("/categorias", (req, res) => categoryController.createNew(req, res));
router.put("/categorias/:id", (req, res) => categoryController.update(req, res));
router.delete("/categorias/:id", (req, res) => categoryController.delete(req, res));

module.exports = router;