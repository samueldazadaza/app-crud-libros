consultarEstudiantes();

async function consultarEstudiantes() {
  var opciones = {
    method: "GET",
  };
  var respuesta = await fetch(
    "http://ee33-186-29-120-221.ngrok.io/api/v1/students", //todo cambiar url 
    opciones
  );
  var datos = await respuesta.json();
  console.log(datos);

  document.getElementById("tablebody").innerHTML = ""; //Limpia la tabla antes de que se vuelva a llenar

  for (i = 0; i < datos.results.length; i++) { //cambiar results (lo que aparece en la consola)
    insertNewRecord(datos.results[i]); 
  }
  //InsertNewRecord()
}

async function registrarEstudiante() {
  // Obtengo valor de la caja de texto
  // Todo agregar getElementby para todos los campos y el JSON
  var nombre = document.getElementById("nombre").value;
  var id = document.getElementById("id").value;

  var mijson = {
    name: nombre, //todo cambiar las llaves de acuerdo al backend
  };

  if (id) {
    // Configuaracion de opciones
    var opciones = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mijson),
    };

    await fetch(
      `http://ee33-186-29-120-221.ngrok.io/api/v1/students/${id}/`,
      opciones
    );

  } else {
    // Configuaracion de opciones
    var opciones = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mijson),
    };

    var respuesta = await fetch(
      "http://ee33-186-29-120-221.ngrok.io/api/v1/students/",
      opciones
    );
    await respuesta.json();
  }
  consultarEstudiantes();
}

//Insert the data
function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.id;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.name; //todo nombre
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.autor; 
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.genero;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.cantidad;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<button onClick="editarEstudiante(${data.id})">Edit</button> <button onClick="borrarEstudiante(${data.id})">Delete</button>`;
}

async function borrarEstudiante(id) {
  // Configuaracion de opciones
  var opciones = {
    method: "DELETE",
  };

  await fetch(
    `http://ee33-186-29-120-221.ngrok.io/api/v1/students/${id}/`,
    opciones
  );
  consultarEstudiantes();
}

async function editarEstudiante(id) {
  var opciones = {
    method: "GET",
  };
  var respuesta = await fetch(
    `http://ee33-186-29-120-221.ngrok.io/api/v1/students/${id}/`,
    opciones
  );
  var datos = await respuesta.json();
  console.log(datos);

  document.getElementById("nombre").value = datos.name; //cambiar a nombre de los del back
  document.getElementById("id").value = datos.id; //cambiar a nombre
}
