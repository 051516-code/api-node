const {Router}= require('express');

const router = Router();


router.get('/user', (req, res)=>{
    res.send('hola desde auth')
})

// router.get('/user:id', (req, res)=>{
//     res.send('hola desde auth/user')
// })

module.exports = router;