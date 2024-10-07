## Desafio Streetdevs

### Backend 
Backend hecho con nodejs (express). Para levantarlo, necesitarás hacer clone del repositorio, una vez descargado, dentro de tu terminal, deberás utilizar los siguientes comandos:

// para ir a la ubicación del proyecto

cd /streetdevs-be

// para instalar las dependencias necesarias

npm install

// para iniciar el servicio

npm start


### Base de datos

Para la base de datos se utilizó MySQL, para levantar esto, necesitarás tener el command line o workbench de mysql.
Dentro del workbench, corre los comandos:

CREATE database streetdevs_db;

USE streetdevs_db;

CREATE TABLE items (
   id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   description TEXT
 );

Y finalmente si quieres partir ya con cierta data de prueba, haz el siguiente insert:

// (Dump de la tabla actual)

INSERT INTO `items` VALUES (2,'Jonathan','Software Engineer'),(3,'Ana','Editado!!'),(5,'Novo','Descripcion aleatoria!!!'),(8,'Smartphone','Testeando el responsive'),(9,'tt','tttt'),(10,'testeando','footer'),(11,'hola','holahola'),(12,'hehe','hehehehe');


### Variables de entorno

Crea un archivo .env con el siguiente template:

DB_HOST=localhost

DB_USER=user

DB_PASSWORD=password

DB_NAME=streetdevs_db


AWS_ACCESS_KEY_ID=

AWS_SECRET_ACCESS_KEY=

AWS_REGION=

S3_BUCKET_NAME=


