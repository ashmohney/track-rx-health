const router = require("express").Router();
const booksController = require("../../controllers/medsController");

// Matches with "/api/meds"
router.route("/")
  .get(medsController.findAll)
  .post(medsController.create);

// Matches with "/api/meds/:id"
router
  .route("/:id")
  .get(medsController.findById)
  .put(medsController.update)
  .delete(medsController.remove);

module.exports = router;
