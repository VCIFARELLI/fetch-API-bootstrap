fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.error('Error al obtener los datos de la API:', error));

const mostrarData = (data) =>{
    let body = ""
    for (let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`;
    }
    document.getElementById("data").innerHTML = body;
}
