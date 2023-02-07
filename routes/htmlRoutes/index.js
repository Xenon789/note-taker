const path = require('path');
const router = require('express').Routher();

// sends file to path notes.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// sends file to path index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
  
module.exports = router;