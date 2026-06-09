const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const upload = require("../config/multer");

const {
  uploadDocument
} = require("../controllers/documentController");
router.get(
  "/",
  protect,
  getDocuments
);
router.post(
  "/upload",
  protect,
  upload.single("pdf"),
  uploadDocument
);

module.exports = router;