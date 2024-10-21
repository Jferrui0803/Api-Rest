(async ()  =>{
    await fetch('http://localhost:3000')
        .then(response => response.json(), () => (console.log('Error al parsear la respuesta')))
        .then(datos => {
            console.log(datos);
            const fruits = datos.fruits;
            const div = document.getElementById('fruits');
            fruits.forEach(fruit => {
                const p = document.createElement('div');
                p.innerHTML = `Nombre: ${fruit.name} Calorias: ${fruit.calories} `;
                div.appendChild(p);
            });
        }, () => (console.log('Error al obtener los datos')));
})();