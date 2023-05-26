const express = require('express')
const router = express.Router()
const kategoriController = require('../controller/kategori')

router.get("/", kategoriController.getAllKategori)
router.get("/:id", kategoriController.getDetailKategori)
router.post("/", kategoriController.createKategori)
router.put("/:id", kategoriController.updateKategori)
router.delete("/:id", kategoriController.deleteKategori)

module.exports = router