# Actividad 3 -- Back-End

## **Agregar Museo** 
Este metodo nos permite agregar a nuestra base de datos los *Museos* que desee el usuario
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
    "Descripcion": "Conserva, resguarda e investiga la colección de arte y promueve exposiciones 
    temporal itinerantes nacionales e internacionales de diversa índole."
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

