function seleccionarDestino() {
 const destino = prompt("Seleccione su destino: \n1. Destino A (Nacional) \n2. Destino B (Internacional)");
 
 switch (destino) {
     case '1':
         return { nombre: "Destino A", precioBase: 300000 };
     case '2':
         return { nombre: "Destino B", precioBase: 800000 };
     default:
         alert("Opción no válida. Intente de nuevo.");
         return seleccionarDestino();
 }
}


function seleccionarTransporte(destino) {
 let transporteOpciones;
 if (destino.nombre === "Destino A") {
     transporteOpciones = {
         "1": { nombre: "Avión", costo: 200000 },
         "2": { nombre: "Bus", costo: 100000 },
         "3": { nombre: "Tren", costo: 150000 },
     };
 } else {
     transporteOpciones = {
         "1": { nombre: "Avión", costo: 500000 },
         "2": { nombre: "Barco", costo: 300000 },
     };
 }

 const opcionesTexto = Object.keys(transporteOpciones)
     .map(key => `${key}. ${transporteOpciones[key].nombre} (+${transporteOpciones[key].costo} COP)`)
     .join("\n");

 const transporteSeleccionado = prompt(`Seleccione su transporte:\n${opcionesTexto}`);
 
 if (transporteOpciones[transporteSeleccionado]) {
     return transporteOpciones[transporteSeleccionado];
 } else {
     alert("Opción no válida. Intente de nuevo.");
     return seleccionarTransporte(destino);
 }
}


function calcularCostoTotal(destino, transporte) {
 let costoTotal = destino.precioBase + transporte.costo;


 if (destino.nombre === "Destino B" && transporte.nombre === "Avión") {
     const recargo = costoTotal * 0.10;
     costoTotal += recargo;
     alert(`Se ha agregado un recargo del 10% por servicios de visa: ${recargo.toFixed(2)} COP`);
 }

 return costoTotal;
}


function simularViajes() {
 let continuar = true;

 while (continuar) {
     const destino = seleccionarDestino();
     const transporte = seleccionarTransporte(destino);
     const costoTotal = calcularCostoTotal(destino, transporte);

     
     alert(`Resumen del viaje:\nDestino: ${destino.nombre} (${destino.precioBase} COP)\nTransporte: ${transporte.nombre} (+${transporte.costo} COP)\nCosto Total: ${costoTotal.toFixed(2)} COP`);

   
     const continuarViaje = prompt("¿Desea simular otro viaje? (si/no)").toLowerCase();
     continuar = continuarViaje === 'si';
 }

 alert("Gracias por usar el sistema de simulación de viajes.");
}


simularViajes();
