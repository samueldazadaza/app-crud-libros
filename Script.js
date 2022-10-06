var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["nombre"] = document.getElementById("nombre").value;
    formData["autor"] = document.getElementById("autor").value;
    formData["genero"] = document.getElementById("genero").value;
    formData["cantidad"] = document.getElementById("cantidad").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.nombre;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.autor;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.genero;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.cantidad;
    cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nombre").value = selectedRow.cells[1].innerHTML;
    document.getElementById("autor").value = selectedRow.cells[2].innerHTML;
    document.getElementById("genero").value = selectedRow.cells[3].innerHTML;
    document.getElementById("cantidad").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.nombre;
    selectedRow.cells[2].innerHTML = formData.autor;
    selectedRow.cells[3].innerHTML = formData.genero;
    selectedRow.cells[4].innerHTML = formData.cantidad;
}

//Delete the data
function onDelete(td) {
    if (confirm('¿Quieres borrar éste libro?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("id").value = '';
    document.getElementById("nombre").value = '';
    document.getElementById("autor").value = '';
    document.getElementById("genero").value = '';
    document.getElementById("cantidad").value = '';
    selectedRow = null;
}