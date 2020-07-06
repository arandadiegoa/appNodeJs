# Primera APP con Node

1) Crear un repo en github
2) Clonarlo a la pc con visual studio
3) Iniciar el proyecto npm init 
4) Instalar dependencias : 
	npm i express ejs morgan. Express + ejs(motor de plantillas)
5) Crear el archivo index.js
6) Instalar nodemon
 npm i nodemon -D -> este modulo sera creado como una dependencia de desarrollo
7) Ir a package.json -> crear el comando dev(o el nombre que nosotros queremos)
	en script poner: 
	  "scripts": {
    "start": "node src",  //arranca el servidor
    "dev": "nodemon src"
  },
8) npm run dev ejecutamos el servidor
9)En index comentar a desarrollar 
10) Creamos la carpeta views, para los archivos html 
	-index.html
	-contact.html
	-Herramientas utilizadas 
	*bootstrap -> No olvidar configurar(copiar y pegarlas en el html) las grillas de bootstrap y la de js
	*Animate.css
	*https://uigradients.com/
	*https://fontawesome.com/
	*https://fonts.google.com/
	
11) Creamos la carpeta routes-> para las rutas, dentro de la cartpeta src
12) Crear carpeta partials -> para tener una porcion de codigo y volver a utilizar. Dentro de la carpeta views.
   -dentro creamos navigation.html
   -creamos tambien head.html
   -cremos tambien footer.html
 
13) Crear una carpeta public(para las imagenes/css) dentro de src. Para los archivos staticos
14) Configurar la carpeta dentro del index.js, en la seccion static files
15) Dentro de public crear carpeta css y img
16) Desplegar el proyecto


