# Primera APP con Node

1) Crear un repo en github
2) Clonarlo a la pc con visual studio
3) iniciar el proyecto npm init 
4) instalar dependencias : 
	npm i express ejs morgan. Express + ejs(motor de plantillas)
5) Crear carpeta scc -> arranca el servidor
6) Dentro de ella crear el archivo index.js
7) instalar nodemon
 npm i nodemon -D -> este modulo sera creado como una dependencia de desarrollo
8) Ir a package.json -> crear el comando dev(o el nombre que nosotros queremos)
	en script poner: 
	  "scripts": {
    "start": "node src",  //arranca el servidor
    "dev": "nodemon src"
  },
9) npm run dev ejecutamos el servidor
10)En index comentar a desarrollar 
11) Creamos la carpeta views, para los archivos html 
	-index.html
	-contact.html
	-Herramientas utilizadas 
	*bootstrap -> No olvidar configurar(copiar y pegarlas en el html) las grillas de bootstrap y la de js
	*Animate.css
	*https://uigradients.com/
	*https://fontawesome.com/
	*https://fonts.google.com/
	
12) Creamos la carpeta routes-> para las rutas, dentro de la cartpeta src
13) Crear carpeta partials -> para tener una porcion de codigo y volver a utilizar. Dentro de la carpeta views.
   -dentro creamos navigation.html
   -creamos tambien head.html
   -cremos tambien footer.html
 
14) Crear una carpeta public(para las imagenes/css) dentro de src. Para los archivos staticos
15) Configurar la carpeta dentro del index.js, en la seccion static files
16) Dentro de public crear carpeta css y img
17) Desplegar el proyecto


