const express = require('express')  //llamo el modulo
const app = express()  // app es el servidor
const path = require('path')

//settings
app.set('port', 1308)
app.set('views', path.join(__dirname,'views'))
app.engine('html',require('ejs').renderFile)
app.set('wiew engine', 'ejs')

//routes
app.use(require('./routes/index'))

// static files
app.use(express.static(path.join(__dirname, 'public')))


//listening the server
app.listen(app.get('port'), () =>{   //servidor ejecutate en el port 2000
    console.log('Server on port', app.get('port'))  // y cuando lo hagas mostrame el mensaje
})
