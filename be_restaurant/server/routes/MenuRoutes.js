const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/MenuController');

router.get('/', MenuController.getAll);
router.get('/get-menu-corausel', MenuController.getDataCarousel);
router.get('/:id', MenuController.getById);
router.post('/', MenuController.create);
router.put('/:menu_id', MenuController.update);
router.delete('/:menu_id', MenuController.delete);


module.exports = router;