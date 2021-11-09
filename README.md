# Actividad 3 -- Back-End

# **Agregar Museo** 
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
    "Nombre": "Museo Tlaxcala",
    "Ubicacion": "Puebla",
    "Descripcion": "Bn",
    "Fecha": "2019"
    }
  ```
* **validaciones**:

| Campo | Validación |
| :---: | :---: |
| `Nombre` | 	*Debe ser un string entre 5 y 50 caracteres* |
| `Descripción` | *Debe ser un string entre 10 y 250 caracteres* |

* **errores: **

| Código | Mensaje | HTTP |
| :---: | :---: | :---: |
| `InvalidBodyException` | *El nombre debe de ser entre 5 y 50 caracteres* | 422 |
| `InvalidBodyException` | *El nombre debe de ser entre 10 y 250 caracteres* | 422 |

