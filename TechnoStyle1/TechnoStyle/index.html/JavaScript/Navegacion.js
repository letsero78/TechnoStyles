const carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
   
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');

    listaCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(li);
    });

    totalElement.textContent = `$${total.toFixed(2)}`;
}
  document.querySelector(".tab-link.active").classList.add("active");