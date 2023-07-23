
  // Función para obtener los cobros y pagos almacenados en el LocalStorage
  function obtenerCobros() {
    return JSON.parse(localStorage.getItem('cobros')) || [];
  }

  function obtenerPagos() {
    return JSON.parse(localStorage.getItem('pagos')) || [];
  }

  // Función para guardar los cobros y pagos en el LocalStorage
  function guardarCobros(cobros) {
    localStorage.setItem('cobros', JSON.stringify(cobros));
  }

  function guardarPagos(pagos) {
    localStorage.setItem('pagos', JSON.stringify(pagos));
  }


  function agregarCobro() {
    const nombre = document.getElementById('cobroNombre').value;
    const monto = document.getElementById('cobroMonto').value;
    const fecha = document.getElementById('cobroFecha').value;
  
    // Verificar si hay campos vacíos
    if (!nombre || !monto || !fecha) {
      alert('Por favor, completa todos los campos antes de agregar el cobro.');
      return;
    }
  
    const cobro = { nombre, monto, fecha };
  
    const cobros = obtenerCobros();
    cobros.push(cobro);
    guardarCobros(cobros);
  
    mostrarCobros();
  
    // Limpiar los campos después de agregar el cobro
    document.getElementById('cobroNombre').value = '';
    document.getElementById('cobroMonto').value = '';
    document.getElementById('cobroFecha').value = '';
  }
  
  function agregarPago() {
    const nombre = document.getElementById('pagoNombre').value;
    const monto = document.getElementById('pagoMonto').value;
    const fecha = document.getElementById('pagoFecha').value;
  
    // Verificar si hay campos vacíos
    if (!nombre || !monto || !fecha) {
      alert('Por favor, completa todos los campos antes de agregar el pago.');
      return;
    }
  
    const pago = { nombre, monto, fecha };
  
    const pagos = obtenerPagos();
    pagos.push(pago);
    guardarPagos(pagos);
  
    mostrarPagos();
  
    // Limpiar los campos después de agregar el pago
    document.getElementById('pagoNombre').value = '';
    document.getElementById('pagoMonto').value = '';
    document.getElementById('pagoFecha').value = '';
  }
  

  // Mostrar los cobros y pagos al cargar la página

  function mostrarCobrosGuardados() {
    const cobros = obtenerCobros();
    const listaCobros = document.getElementById('listaCobros');
    listaCobros.innerHTML = '';
    if (cobros.length > 0) {
        cobros.forEach((cobro, index) => {
            const cobroItem = document.createElement('li');
            cobroItem.textContent = `Nombre: ${cobro.nombre}, Monto: $${cobro.monto}, Fecha: ${cobro.fecha}`;
            const eliminarBtn = document.createElement('button');
            eliminarBtn.textContent = 'Eliminar';
            eliminarBtn.onclick = () => eliminarCobro(index);
            cobroItem.appendChild(eliminarBtn);
            listaCobros.appendChild(cobroItem);
        });
    } else {
        console.log("Aún no hay cobros registrados.");
    }
}


function mostrarPagosGuardados() {
    const pagos = obtenerPagos();
    const listaPagos = document.getElementById('listaPagos');
    listaPagos.innerHTML = '';
    if (pagos.length > 0) {
      pagos.forEach((pago, index) => {
        const pagoItem = document.createElement('li');
        pagoItem.textContent = `Proveedor: ${pago.nombre}, Monto: $${pago.monto}, Fecha: ${pago.fecha}`;
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.classList.add('boton-eliminar'); // Agregamos una clase para aplicar estilos al botón
        eliminarBtn.onclick = () => eliminarPago(index);
        pagoItem.appendChild(eliminarBtn);
        listaPagos.appendChild(pagoItem);
      });
    } else {
      console.log("Aún no hay pagos registrados.");
    }
  }
  
  

// ... Código anterior ...

function eliminarCobro(index) {
    const cobros = obtenerCobros();
    cobros.splice(index, 1);
    guardarCobros(cobros);
    mostrarCobros();
}

function eliminarPago(index) {
    const pagos = obtenerPagos();
    pagos.splice(index, 1);
    guardarPagos(pagos);
    mostrarPagos();
}

function mostrarCobros() {
    listaCobros.innerHTML = '';
    const cobros = obtenerCobros();
    cobros.forEach((cobro, index) => {
        const cobroItem = document.createElement('li');
        cobroItem.textContent = `Nombre: ${cobro.nombre}, Monto: $${cobro.monto}, Fecha: ${cobro.fecha}`;
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.onclick = () => eliminarCobro(index);
        cobroItem.appendChild(eliminarBtn);
        listaCobros.appendChild(cobroItem);
    });
}

function mostrarPagos() {
    listaPagos.innerHTML = '';
    const pagos = obtenerPagos();
    pagos.forEach((pago, index) => {
        const pagoItem = document.createElement('li');
        pagoItem.textContent = `Proveedor: ${pago.nombre}, Monto: $${pago.monto}, Fecha: ${pago.fecha}`;
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.onclick = () => eliminarPago(index);
        pagoItem.appendChild(eliminarBtn);
        listaPagos.appendChild(pagoItem);
    });
}




