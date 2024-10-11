const express = require('express');//ใช้ทำapi
const multer = require('multer');//ใช้กับรูปภาพ
const path = require('path');//เก็บรูปในโฟเดอร์
const productController = require('../controllers/productController');
const router = express.Router();
//สร้างการอัพโหลดไฟล์
const storage = multer.memoryStorage();
const upload = multer({ storage });

// กําหนดเส้นทางสําหรับอัปโหลดภาพ
router.post('/upload', upload.single('image'), productController.uploadImage);
router.get('/products', productController.getdata);//ดึงข้มูลproducts ทั้งหมด
module.exports = router;