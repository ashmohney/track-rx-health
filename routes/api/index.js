const router = require("express").Router();
const bookRoutes = require("./books");

// meds routes
router.use("/meds", medsRoutes);

module.exports = router;
