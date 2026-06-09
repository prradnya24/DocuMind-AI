const Document = require("../models/Document");

const uploadDocument = async (req, res) => {
  try {

    const document = await Document.create({
      userId: req.user.id,
      fileName: req.file.originalname,
      filePath: req.file.path
    });

    res.status(201).json({
      message: "Document uploaded successfully",
      document
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const getDocuments = async (req, res) => {

  try {

    const documents =
      await Document.find({
        userId: req.user.id
      });

    res.json(documents);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  uploadDocument,getDocuments
};