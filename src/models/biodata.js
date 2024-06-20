const dbPool = require("../config/database");

const getAllData = () => {
  const query = "select * from biodatas";
  const result = dbPool.execute(query);
  return result;
};

const createData = (body) => {
  const query = `insert into biodatas (nim, nama_lengkap, nama_cantik, jenis_kelamin, angkatan) values ('${body.nim}', '${body.nama_lengkap}', '${body.nama_cantik}', '${body.jenis_kelamin}', '${body.angkatan}')`;
  const result = dbPool.execute(query);
  return result;
};

module.exports = { getAllData, createData };
