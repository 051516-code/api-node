const {Router} = require('express');
const router = Router();

//TODO: import de las rutas a exportar
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');

// definir las rutas
router.use('/auth', authRoutes);
router.use('/user', userRoutes)

module.exports = router