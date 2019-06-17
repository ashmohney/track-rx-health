const router = require("express").Router();
const medsRoutes = require("./meds");

// meds routes
router.use("/meds", medsRoutes);

module.exports = router;
