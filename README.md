# Documentación

<h3>Greydive</h3>

Greydive es un challenge realizado en React para la empresa Greydive.<br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Challenge
Para visualizar <b>las consignas del challenge</b> visitar <a href = 'https://docs.google.com/document/d/1wUHej8LwBKHKav5PNnPZ2guZ4TbXYWqpaezvf_7BT4o/edit'> acá </a>
<br>

<i>Author: @tomasvazquez.</i>
<br>

Para la realización de este Challenge se utilizó <b>React</b> con Create-React-App, y para el manejo de rutas se agregó <b>react-router-dom</b><br>
Dentro del proyecto, la primera vista que se visualiza es la de App, con acceso a dos botones con el nombre de los <b>clientes</b> <i>(cargados desde el archivo JSON).</i>
Cada botón llevará al usuario a una nueva ruta con todos los datos del cliente:<br>
Estos datos son: 
  <ul>
  <li>Nombre del cliente</li>
  <li>Video de muestra</li>
  <li>Transcripcion del video (formateada para una mejor lectura)</li>
  <li>Tareas que se realizan en el vídeo, todas con su duración estimada. </li>
</ul>
<br>

Dentro de esta vista, los datos estan trabajados para que se muestren en pantalla de la mejor manera posible.
Se agrego <b>Firebase</b> para el deploy del proyecto. <br><a href = 'https://greydive-challenge.web.app'>VISITA LA APLICACION</a>

## Inicialización del proyecto

Para comenzar el proyecto, luego de clonar el respositorio y realizar un npm (para instalar dependencias), correr:

### `npm start`

Con este comando correrá la aplicación.\
Abrí [http://localhost:3000](http://localhost:3000) para verla en tu navegador.


### Deployment

La aplicación utiliza Firebase para realizar el deploy. Para ver el deploy de la página <a href = 'https://greydive-challenge.web.app'>hace click acá</a>

