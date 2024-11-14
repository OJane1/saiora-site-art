const { Router } = require('express');
const { getClass, saveClass, deleteClass, editClass } = require('./ClassController');

const router = Router();

router.get('/', getClass)
router.post('/saveClass', saveClass)
router.delete('/deleteClass', deleteClass)
router.post('/editClass', editClass)


module.exports = router;