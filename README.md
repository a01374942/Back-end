# Actividad 3 -- Back-End

## **Agregar Museo** 
Este metodo nos permite *agregar* a nuestra base de datos los *Museos* que desee el usuario
* Los museos se componen de los siguientes datos: 
   * *Nombre*
   * *Ubicación*
   * *Fecha*
   * *Descripción* 
* **end point**: *`/Museos/agregarMuseos`*
* **método**: *`POST`*
* **body:**

  ```JSON
    {
    "Nombre": "Museo Soumaya",
    "Ubicacion": "CDMX",
    "Fecha": "1994",
    "Descripcion": "Conserva, resguarda e investiga la colección de arte y promueve exposiciones temporales"
    }
  ```
* **validaciones**:

| Campo | Validación |
| :---: | :---: |
| `Nombre` | 	*Es un dato obligatorio y debe ser un string entre 5 y 50 caracteres* |
| `Descripción` | *Debe ser un string entre 10 y 250 caracteres* |
| `Museo` | *El nombre del museo no debe de estar registrado* |

* **errores**:

| Código | Mensaje | HTTP |
| :---: | :---: | :---: |
| `InvalidBodyException` | *El nombre debe de ser entre 5 y 50 caracteres* | 422 |
| `InvalidBodyException` | *El nombre debe de ser entre 10 y 250 caracteres* | 422 |
| `InvalidBodyException` | *El museo ya está registrado* | 422 |

* **respuesta:**
HTTP status 200 y el siguiente *mensaje*: `"operacion": "Correcta"`

* **respuesta con error:**
HTTP status 422 y el siguiente *mensaje*: `"operacion": "incorrecto verifica"`
-------------------------------------------------
## **Actualizar Museo** 
Este metodo nos permite *actualizar* los datos en nuestra base de datos de los *Museos* que desee el usuario
* Se actualiza de acuerdo al *Nombre* del Museo a actualizar, los datos que se pueden cambiar son los siguientes: 
   * *Ubicación*
   * *Fecha*
   * *Descripción* 
* **end point**: *`/Museos/actualizarMuseos`*
* **método**: *`POST`*
* **body:**

  ```JSON
    {
    "Nombre": "Museo Soumaya",
    "actualizar": {
        "Ubicacion": "Ciudad de México",
        "Fecha": "1923"
      }
    }
  ```
* **validaciones**:

| Campo | Validación |
| :---: | :---: |
| `Nombre` | 	*El museo debe de estar registrado* |
| `actualizar` | 	*La actualización debe ser dentro de este campo* |


* **errores**:

| Código | Mensaje | HTTP |
| :---: | :---: | :---: |
| `InvalidBodyException` | *El museo no está registrado en la base de datos* | 422 |

* **respuesta:**
HTTP status 200 y el siguiente *mensaje*: `"operacion": "Museo Actualizado"`

* **respuesta con error:**
HTTP status 422 y el siguiente *mensaje*: `"operacion": "incorrecto verifica"`

