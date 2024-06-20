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

const createNewData = async (req, res) => {
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

const updateData = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await bioModel.updateData(body, id);
    res.json({
      message: "UPDATE data success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  // let [getdata] = await bioModel.getAllData(id);
  // console.log(getdata.);
  try {
    await bioModel.deleteData(id);
    res.json({
      message: "DELETE data success",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllData,
  createNewData,
  updateData,
  deleteUser,
};
