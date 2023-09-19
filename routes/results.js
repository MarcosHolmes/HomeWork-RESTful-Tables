const express = require('express');
const router = express.Router();
const controller = require('../controllers/restults');

router.post('/:n1/:n2', controller.create);

router.get('/', controller.list);

router.get('/:n1/:n2', controller.index);

router.put('/:n1/:n2', controller.replace);

router.patch('/:n1/:n2', controller.update);

router.delete('/:n1/:n2', controller.destroy);

module.exports = router;