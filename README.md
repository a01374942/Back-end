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
