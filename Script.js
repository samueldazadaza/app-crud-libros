consultarEstudiantes();

async function consultarEstudiantes() {
  var opciones = {
    method: "GET",
  };
  var respuesta = await fetch(
    "http://localhost:8090/libros", //todo cambiar url 
    opciones
  );
  var datos = await respuesta.json();
  console.log(datos);

  document.getElementById("tablebody").innerHTML = ""; //Limpia la tabla antes de que se vuelva a llenar

  for (i = 0; i < datos.length; i++) { //cambiar results (lo que aparece en la consola)
    insertNewRecord(datos[i]); 
  }
  //InsertNewRecord()
}

async function registrarEstudiante() {
  // Obtengo valor de la caja de texto
  // Todo agregar getElementby para todos los campos y el JSON
  var id_libro = document.getElementById("id_libro").value;
  var titulo = document.getElementById("titulo").value;
  var autor = document.getElementById("autor").value;
  var genero = document.getElementById("genero").value;
  var cantidad = document.getElementById("cantidad").value;


  var mijson = {
    id_libro: id_libro, //todo cambiar las llaves de acuerdo al backend
    titulo: titulo, //todo cambiar las llaves de acuerdo al backend
    autor: autor, //todo cambiar las llaves de acuerdo al backend
    genero: genero, //todo cambiar las llaves de acuerdo al backend
    cantidad: cantidad, //todo cambiar las llaves de acuerdo al backend
  };

  if (id_libro) {
    // Configuaracion de opciones
    var opciones = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mijson),
    };

    await fetch(
      `http://localhost:8090/libros`,
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
      "http://localhost:8090/libros",
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
  cell1.innerHTML = data.id_libro;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.titulo; //todo nombre
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.autor; 
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.genero;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.cantidad;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<button onClick="editarEstudiante(${data.id_libro})">Edit</button> <button onClick="borrarEstudiante(${data.id_libro})">Delete</button>`;
}

async function borrarEstudiante(id_libro) {
  // Configuaracion de opciones
  var opciones = {
    method: "DELETE",
  };

  await fetch(
    `http://localhost:8090/libros/${id_libro}`,
    opciones
  );
  consultarEstudiantes();
}

async function editarEstudiante(id_libro) {
  var opciones = {
    method: "GET",
  };
  var respuesta = await fetch(
    `http://localhost:8090/libros/${id_libro}`,
    opciones
  );
  var datos = await respuesta.json();
  console.log(datos);

  document.getElementById("id_libro").value = datos.id_libro; //cambiar a nombre de los del back
  document.getElementById("titulo").value = datos.titulo; //cambiar a nombre de los del back
  document.getElementById("autor").value = datos.autor; //cambiar a nombre
  document.getElementById("genero").value = datos.genero; //cambiar a nombre
  document.getElementById("cantidad").value = datos.cantidad; //cambiar a nombre
}
