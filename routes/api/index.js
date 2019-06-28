const router = require("express").Router();
const medsRoutes = require("./meds");

// meds routes
// /api/meds
router.use("/meds", medsRoutes);

module.exports = router;
