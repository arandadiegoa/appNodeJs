const express = require('express')
const router = express.Router()  //sirve para crear multiples rutas y tenerlas por separado

router.get('/', (req, res)=>{         
    res.render('index.html', { title : 'First Website' }) 
})

router.get('/contact', (req, res)=>{         
   res.render('contact.html', { title: 'Contac Page'}) 
})


module.exports = router  