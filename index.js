const url = 'http://localhost:8080/libros'; //cambiar esta url por la url local de su api rest de libros

//CODIGO PARA CREAR DATA DE API


//CODIGO PARA LEER DATA DE API
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let libros = data;
  console.log(libros)//aqui estan todos los libros
  mostrarArreglo(libros)

})
.catch(function(error) {
  console.log(error);
});

function mostrarArreglo(libros){
    const idlibro = document.querySelector("#idlibro");
    idlibro.innerHTML = '';

    const titulolibro = document.querySelector("#titulolibro");
    titulolibro.innerHTML = '';

    const generolibro = document.querySelector("#generolibro");
    generolibro.innerHTML = '';

    const aniolibro = document.querySelector("#aniolibro");
    aniolibro.innerHTML = '';

    const autorlibro = document.querySelector("#autorlibro");
    autorlibro.innerHTML = '';



    for(const libro of libros){
        let genero = document.createElement('p');
        genero.innerText = libro.genero;
        generolibro.appendChild(genero);

        let id = document.createElement('p');
        id.innerText = libro.id_libro;
        idlibro.appendChild(id);

        let titulo = document.createElement('p');
        titulo.innerText = libro.titulo;
        titulolibro.appendChild(titulo);

        let anio = document.createElement('p');
        anio.innerText = libro.fecha_publicacion;
        aniolibro.appendChild(anio);

        let autor = document.createElement('p');
        autor.innerText = libro.autor;
        autorlibro.appendChild(autor);



    }
}

//CODIGO PARA ACTUALIZAR DATA DE API


//CODIGO PARA ELIMINAR DATA DE API
