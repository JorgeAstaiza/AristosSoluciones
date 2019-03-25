const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/contacto', (req, res) => {
    res.render('contacto.html');
});
router.get('/nosotros', (req, res) => {
    res.render('nosotros.html');
});
router.get('/servicios', (req, res) => {
    res.render('servicios.html');
})
router.get('/servicios/gerencia-proyectos', (req, res) => {
    res.render('servicioGer-Proy.html');
})
router.get('/servicios/salud-seguridad', (req, res) => {
    res.render('servicioSeg-Sald.html');
})
router.get('/servicios/recursos-humanos', (req, res) => {
    res.render('servicioRec-Hum.html');
})
router.get('/servicios/comunicacion-digital', (req, res) => {
    res.render('servicioCom-Dig.html');
})

module.exports = router;