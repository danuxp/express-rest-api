const getAllUsers = (req, res) => {
  res.json({
    message: "GET All user success",
  });
};

const createNewUser = (req, res) => {
  res.json({
    message: "POST data success ",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { idUser } = req.params;
  res.json({
    message: "UPDATE data success" + idUser,
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
};
