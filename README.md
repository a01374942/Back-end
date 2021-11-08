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
* **body**: 
* **Sample Call:**

  ```jason
    ajax({
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
