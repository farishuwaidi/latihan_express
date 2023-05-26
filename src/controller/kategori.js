const {
    selectAllKategori,
    selectKategori,
    insertkategori,
    updateKategori,
    deleteKategori,
    countData,
    findId,
  } = require("../model/kategori");
  const commonHelper = require("../helper/common");
  
  const kategoriController = {
    getAllKategori: async (req, res) => {
      try {
        const result = await selectAllKategori();
        commonHelper.response(res, result.rows, 200, "get data berhasil dipanggil");
      } catch (error) {
        console.log(error);
      }
    },
    getDetailKategori: async (req, res) => {
      const id = Number(req.params.id);
      selectKategori(id)
        .then((result) => {
          commonHelper.response(res, result.rows, 200, "get data success");
        })
        .catch((err) => res.send(err));
    },
    createKategori: async (req, res) => {
      const { name } = req.body;
      const {
        rows: [count],
      } = await countData();
      const id = Number(count.count) + 1;
      const data = {
        id,
        name
      };
      insertkategori(data)
        .then((result) =>
          commonHelper.response(res, result.rows, 201, "Kategori created")
        )
        .catch((err) => res.send(err));
    },
    updateKategori: async (req, res) => {
      try {
        const id = Number(req.params.id);
        const { name } = req.body;
        const { rowCount } = await findId(id);
        if (!rowCount) {
          res.json({message: "ID is Not Found"})
        }
        const data = {
          id,
          name
        };
        updateKategori(data)
          .then((result) =>
            commonHelper.response(res, result.rows, 200, "Kategori updated")
          )
          .catch((err) => res.send(err));
      } catch (error) {
        console.log(error);
      }
    },
    deleteKategori: async (req, res) => {
      try {
        const id = Number(req.params.id);
        const { rowCount } = await findId(id);
        if (!rowCount) {
          res.json({message: "ID is Not Found"})
        }
        deleteKategori(id)
          .then((result) =>
            commonHelper.response(res, result.rows, 200, "Kategori deleted")
          )
          .catch((err) => res.send(err));
      } catch (error) {
        console.log(error);
      }
    },
  };
  
  module.exports = kategoriController;