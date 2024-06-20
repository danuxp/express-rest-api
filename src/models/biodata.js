const dbPool = require("../config/database");

const getAllData = (id = false) => {
  let where = "";
  if (id !== false) {
    where = ` where nim='${id}'`;
  }
  const query = `select * from biodatas ${where}`;
  const result = dbPool.execute(query);
  return result;
};

const createData = (body) => {
  const query = `insert into biodatas (nim, nama_lengkap, nama_cantik, jenis_kelamin, angkatan) values ('${body.nim}', '${body.nama_lengkap}', '${body.nama_cantik}', '${body.jenis_kelamin}', '${body.angkatan}')`;
  const result = dbPool.execute(query);
  return result;
};

const updateData = (body, id) => {
  const query = `
  update biodatas set 
    nama_lengkap='${body.nama_lengkap}',
    nama_cantik='${body.nama_cantik}',
    jenis_kelamin='${body.jenis_kelamin}',
    angkatan='${body.angkatan}'
  where nim='${id}'
  `;
  const result = dbPool.execute(query);
  return result;
};

const deleteData = (id) => {
  const query = `delete from biodatas where nim='${id}'`;
  const result = dbPool.execute(query);
  return result;
};

module.exports = { getAllData, createData, updateData, deleteData };
