const url = 'http://localhost:8090/libros'; //cambiar esta url por la url local de su api rest de libros

//CODIGO PARA CREAR DATA DE API

//CODIGO PARA PINTAR DATOS EN HTML
fetch(url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error))

const mostrarData = (data) => {
  console.log(data)
  console.log("pintando datos en html")
  let body = ''
  for (let i = 0; i < data.length; i++){
    body += `
      <tr>
        <td> ${data[i].id_libro} </td>
        <td> ${data[i].titulo} </td>
        <td> ${data[i].genero} </td>
        <td> ${data[i].fecha_publicacion} </td>
        <td> ${data[i].autor} </td>
      </tr>
    `
  }
  document.getElementById("data").innerHTML = body //para pintar datos en html
}



//CODIGO PARA ACTUALIZAR DATA DE API



//CODIGO PARA ELIMINAR DATA DE API




















//CODIGO PARA LEER DATA DE API
// fetch(url)
// .then((resp) => resp.json())
// .then(function(data) {
//   let libros = data;
//   console.log(libros)//aqui estan todos los libros
//   mostrarArreglo(libros)

// })
// .catch(function(error) {
//   console.log(error);
// });

// function mostrarArreglo(libros){
//     const idlibro = document.querySelector("#idlibro");
//     idlibro.innerHTML = '';

//     const titulolibro = document.querySelector("#titulolibro");
//     titulolibro.innerHTML = '';

//     const generolibro = document.querySelector("#generolibro");
//     generolibro.innerHTML = '';

//     const aniolibro = document.querySelector("#aniolibro");
//     aniolibro.innerHTML = '';

//     const autorlibro = document.querySelector("#autorlibro");
//     autorlibro.innerHTML = '';

//     for(const libro of libros){
//         let genero = document.createElement('p');
//         genero.innerText = libro.genero;
//         generolibro.appendChild(genero);

//         let id = document.createElement('p');
//         id.innerText = libro.id_libro;
//         idlibro.appendChild(id);

//         let titulo = document.createElement('p');
//         titulo.innerText = libro.titulo;
//         titulolibro.appendChild(titulo);

//         let anio = document.createElement('p');
//         anio.innerText = libro.fecha_publicacion;
//         aniolibro.appendChild(anio);

//         let autor = document.createElement('p');
//         autor.innerText = libro.autor;
//         autorlibro.appendChild(autor);
//     }
// }


