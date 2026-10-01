const express = require("express");
const router = express.Router();
const {
  getPositions,
  createPosition,
  updatePosition,
  deletePosition,
} = require("../controllers/positionController");
const { protectAdmin } = require("../middlewares/auth");

router.route("/")
  .get(getPositions)
  .post(protectAdmin, createPosition);

router.route("/:id")
  .put(protectAdmin, updatePosition)
  .delete(protectAdmin, deletePosition);

module.exports = router;

