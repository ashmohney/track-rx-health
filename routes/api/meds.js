const router = require("express").Router();
const medsController = require("../../controllers/medsController");

// Matches with "/api/meds"
router.route("/").get(medsController.findAll);

router.route("/create").post(medsController.create);
// Matches with "/api/meds/:id"
router
  .route("/:id")
  .get(medsController.findById)
  .put(medsController.update)
  .delete(medsController.remove);

module.exports = router;
