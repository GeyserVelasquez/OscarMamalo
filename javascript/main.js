function readAndWrite() {
  fetch("JSON/datos.json")
    .then((response) => {
      // Verificamos si la respuesta es exitosa (código de estado 200)
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      // Parseamos la respuesta como JSON
      return response.json();
    })
    .then((data) => {
      // Aquí 'data' contendrá el objeto JavaScript obtenido del archivo JSON
      console.log(data);
      let div = document.createElement("div");
      div.id = "visitas";
      div.innerHTML = "Numero de visitas: " + data.visitas;
      document.body.appendChild(div);
    })
    .catch((error) => {
      console.error("Error al leer el archivo JSON:", error);
    });
}

function update() {
  // Realizar una solicitud Fetch al archivo PHP
  fetch("php/spath.php")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al modificar JSON");
      }
      return response.text();
    })
    .then((data) => {
      console.log("exitoso"); // Mensaje de éxito del PHP
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

update();

readAndWrite();
