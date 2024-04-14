
# NODE FRAMEWORK TEST

Test API en un framework (Adonisjs) de node.


## Instalación

Para que el proyecto funcione adecuadamente debes tener la versión Node.js >= 20.6 instalada. Recomendamos usar NVM para tener distintas versiones de node en tu sistema.

[NVM](https://github.com/nvm-sh/nvm) - Recomendado

[Node.js >= 20.6](https://nodejs.org/en)


El proyecto maneja sqlLite para una instalación más fácil.

Para instalar siga los siguientes pasos:

Clonar el proyecto.

```bash
  https://github.com/gaviria/prueba-pmil.git
```

Ir al directorio del proyecto.

```bash
  cd my-project
```

Instalar dependencias con npm

```bash
  npm install
```

Luego renombrar el archivo *.env.example* a *.env* 

Crear la carpeta *tmp* en la raíz del proyecto, allí se instalara la base de datos y ejecutar el comando:

```bash
  node ace migration:run
``` 

Instalar seeders de la base de datos de usuario

```bash
  node ace db:seed
``` 
## API Reference
Para acceder a los endpoints seguros, puedes usar los usuarios que se encuentran en el directorio "database/seeders". Recomendamos instalar Thunder Client en Visual Code, pero puedes usar tu Rest api client favorito (Postman, insomnia, etc).

[Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) - Recomendado

#### Login
Este endpoint retornará los datos del usuario y el token a usar en los demás endpoint del proyecto.

```http
  POST /api/v1/users/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `mobile_phone` | `string` | **Required** |
| `password` | `string` | **Required** |


#### Get all items
Obtienes una lista de los usuarios en el sistema.
Debes ingresar el token generado en el endpoint de login para acceder a los datos. En Thunder Client ingrésalo en la opción ***Auth -> Bearer***

```http
  GET /api/v1/users
```

#### Add item
Permite crear usuarios en el sistema pasando los parámetros requeridos.
Debes ingresar el token generado en el endpoint de login para acceder a los datos. En Thunder Client ingrésalo en la opción ***Auth -> Bearer***
```http
  POST /api/v1/users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `first_name`      | `string` | **Required**.  |
| `last_name`      | `string` | **Required**.  |
| `date_birth`      | `date` | **Required**.  |
| `address`      | `string` | **Required**.  |
| `mobile_phone`      | `string` | **Required**.  |
| `email`      | `string` | **Required**.  |
| `password`      | `string` | **Required**. |


#### Get item
Obtienes un usuario especificando el id de este.
Debes ingresar el token generado en el endpoint de login para acceder a los datos. En Thunder Client ingrésalo en la opción ***Auth -> Bearer***
```http
  GET /api/v1/users/${id}
```

#### Update item
Actualizas los datos de un usuario, ingresando los parámetros requeridos.
Debes ingresar el token generado en el endpoint de login para acceder a los datos. En Thunder Client ingrésalo en la opción ***Auth -> Bearer***
```http
  PUT /api/v1/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `first_name`      | `string` | **Required**.  |
| `last_name`      | `string` | **Required**.  |
| `date_birth`      | `date` | **Required**.  |
| `address`      | `string` | **Required**.  |
| `mobile_phone`      | `string` | **Required**.  |
| `email`      | `string` | **Required**.  |
| `password`      | `string` | **Required**. |

#### Delete item
Borra los datos de un usuario, ingresando su id.
Debes ingresar el token generado en el endpoint de login para acceder a los datos. En Thunder Client ingrésalo en la opción ***Auth -> Bearer***
```http
  DELETE /api/v1/users/${id}
```


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@gaviria](https://www.github.com/gaviria)

