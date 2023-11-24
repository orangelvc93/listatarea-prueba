const { Router } = require('express');
const router = Router();



router.get('/list', (req, res) => {
    res.json('Llamado desde el get')
})



module.exports = router;