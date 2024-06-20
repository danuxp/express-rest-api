const bioModel = require("../models/biodata");

const getAllData = async (req, res) => {
  try {
    // Destructuring Variable
    const [data] = await bioModel.getAllData();
    res.json({
      message: "GET All user success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req;
  try {
    await bioModel.createData(req.body);
    res.json({
      message: "POST data success ",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateUser = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "UPDATE data success" + id,
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "DELETE data success" + id,
  });
};

module.exports = {
  getAllData,
  createNewUser,
  updateUser,
  deleteUser,
};
