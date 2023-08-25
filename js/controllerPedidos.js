
let pedidos=[]
let repartidores=[]

//variables
let motoristaSeleccionado={};
let pedidoSeleccionado;
let modalConfirmarSeleccion = new bootstrap.Modal(document.getElementById('modalConfirmarSeleccion'));
const modalWarning= new bootstrap.Modal(document.getElementById('modalWarning'));


//Obtener los pedidos sin asignar
const obtenerPedidos = async() =>{
   try{
        let respuesta = await fetch('http://localhost:5555/pedidos/obtener/Pedido',
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json", //MIME type 
            },
        });

        let a = await respuesta.json();
        if(a.status){
            pedidos=a.respuesta;
            //console.log(pedidos);
            visualizarPedidos();
        }else{
            console.log(a);
            modalWarning.show();
        }
    }catch{
        modalWarning.show();
        console.log('entra aqui')
    }

    /*window.location.href="../index.html";*/
}

//Renderizar
const visualizarPedidos= ()=>{
    document.getElementById('pedidos-agregar-repartidor').style.display="block";
    document.getElementById('pedidos-tomados-repartidor').style.display="none";
    document.getElementById('pedidos-entregados-repartidor').style.display="none";  

    document.getElementById('btn-pedidos').classList.add('active');
    document.getElementById('btn-tomados').classList.remove('active');
    document.getElementById('btn-entregados').classList.remove('active');
    
    document.getElementById('contenedor-lista-pedidos').innerHTML="";

    pedidos.forEach(pedido =>{
        let factura=pedido.factura[0];
        document.getElementById('contenedor-lista-pedidos').innerHTML+=
        `<div class="objeto row" data-bs-toggle="modal" data-bs-target="#modalInfoPedido" onclick="visualizarInfoPedido('${pedido._id}')">
            <div class="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 centrar-div">
                <img src="${pedido.img}" alt="Imagen Pedido" srcset=""> 
            </div>
            <div class="col ms-2 mb-1 text-center">
                <p class="fs-5 fw-medium">${pedido._id}</p>
                <p class="fw-medium h6 " style="color: #fd8d07ff;">(Información cliente)</p>
                <div class="row">
                    <div class="col">
                        <p class="h6" style="color: #fd8d07ff;">Nombre:</p> 
                        <p class="h6">${factura.cliente.nombre}</p>
                    </div>
                    <div class="col">
                        <p class="h6" style="color: #fd8d07ff;">Número de teléfono:</p>
                        <p class="h6">${factura.cliente.numTelefono}</p>
                    </div>
                </div>
                <p class="h6" style="color: #fd8d07ff;">Dirección:</p>
                <p class="h6">${pedido.ubicacion}</p>
            </div>
            <div class="row">
                <div class="col-12 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xxl-5 centrar-div">
                    <p class="fw-medium fs-5 text-center">Información Factura</p>
                    <p class="fw-medium" style="font-size: 0.8rem; color: #fd8d07ff;">(${pedido._idFactura})</p>
                    <p class="fw-medium">${factura.empresa.nombre}</p>
                </div>
                <div class="col centrar-div">
                    <p class="h6" style="color: #fd8d07ff;">Subtotal: </p>
                    <p class="h6">${factura.subtotal}</p>
                </div>
                <div class="col centrar-div">
                    <p class="h6" style="color: #fd8d07ff;">ISV: </p>
                    <p class="h6">${factura.isv}</p>
                </div>
                <div class="col centrar-div">
                    <p class="h6" style="color: #fd8d07ff;">Envio: </p>
                    <p class="h6">${pedido.costoEnvio}</p>
                </div>
                <div class="col centrar-div">
                    <p class="h6" style="color: #fd8d07ff;">Total: </p>
                    <p class="h6">${factura.total}</p>
                </div>
            </div>
            <div class="text-end fs-2" style="color: #fd8d07ff;" onclick="agregarMotorista('${pedido._id}');" data-bs-toggle="modal" data-bs-target="#modalAgregarMotorista")>
                <i class="fa-solid fa-circle-plus ps-2 pe-2"></i>
            </div>
        </div> `;
    });
    

}

//Obtener motoristas y renderizar motoristas
const agregarMotorista= async(id) =>{
    try{
        let respuesta = await fetch('http://localhost:5555/motoristas/administrador/pedidos',
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json", //MIME type 
            },
        });

        let a = await respuesta.json();
        if(a.status){
            repartidores=a.respuesta;
            //renderizar
            document.getElementById('contenedor-repartidores').innerHTML="";
            repartidores.forEach(repartidor=>{
                document.getElementById('contenedor-repartidores').innerHTML+=
                `<div class="objeto row">
                    <div class="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 centrar-div">
                        <img src="${repartidor.img}" alt="Imagen Pedido" srcset=""> 
                        <div class="row">
                            <button class="btn-default" style="font-size: 15px;" data-bs-toggle="modal" data-bs-target="#modalConfirmarSeleccion" onclick="obtenerMotoristaSeleccionado('${repartidor._id}')">Seleccionar</button>
                        </div>
                    </div>
                    <div class="h6 col informacion-seleccionar-motorista">
                        <div class="centrar-div">
                            <p style="color: #fd8d07ff;">Nombre:</p>
                            <p>${repartidor.primerNombre} ${repartidor.primerApellido}</p>
                        </div>
                        <div class="centrar-div">
                            <p style="color: #fd8d07ff;">Telefono:</p>
                            <p>${repartidor.numTelefono}</p>
                        </div>
                        <div class="centrar-div">
                            <p style="color: #fd8d07ff;">Pedidos tomados:</p>
                            <p>${repartidor.pedidoTomados.length}</p>
                        </div>
                    </div>
                </div>`;
            });
            pedidoSeleccionado=id;
            console.log(pedidoSeleccionado);
        }else{
            console.log(a);
            modalWarning.show();
        }
    }catch{
        modalWarning.show();
    }
    
}

const obtenerMotoristaSeleccionado = (id) =>{
    motoristaSeleccionado=repartidores.find(element=> element._id===id);
    console.log(motoristaSeleccionado);

    //Modificar modal de confirmacion
    document.getElementById('mensaje-confirmacion').innerHTML=`¿Esta seguro de asignar pedido al motorista ${motoristaSeleccionado.primerNombre} ${motoristaSeleccionado.primerApellido}?`;
}

const confirmarSeleccionMotorista = async()=>{
    try{
        let nombre=motoristaSeleccionado.primerNombre+" "+motoristaSeleccionado.primerApellido;
        let body={
            "_id": motoristaSeleccionado._id,
            "nombre": nombre,
            "numTelefono": motoristaSeleccionado.numTelefono,
            "tipoVehiculo": motoristaSeleccionado.tipoVehiculo,
            "placa": motoristaSeleccionado.placa,
            "calificacion": motoristaSeleccionado.calificacion
        };

        let respuesta = await fetch(`http://localhost:5555/pedidos/${pedidoSeleccionado}/agregarAdminitrador/motorista/${motoristaSeleccionado._id}`,
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json", //MIME type 
            },
            "body": JSON.stringify(body)
        });

        let a = await respuesta.json();
        if(a.status){
            modalConfirmarSeleccion.hide();
            //Mostrar pedido en el apartado de tomados
            visualizarTomados();
            document.getElementById('contenedor-lista-tomados').scrollTop= document.getElementById('contenedor-lista-tomados').scrollHeight;
        }else{
            console.log(a);
            modalWarning.show();
        }
    }catch{
        modalWarning.show();
        console.log('entra aqui')
    }

   

}

const visualizarTomados= async()=>{
    document.getElementById('pedidos-agregar-repartidor').style.display="none";
    document.getElementById('pedidos-tomados-repartidor').style.display="block";
    document.getElementById('pedidos-entregados-repartidor').style.display="none";

    document.getElementById('btn-pedidos').classList.remove('active');
    document.getElementById('btn-tomados').classList.add('active');
    document.getElementById('btn-entregados').classList.remove('active');   

    try{
        let respuesta = await fetch('http://localhost:5555/pedidos/obtener/Tomado',
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json", //MIME type 
            },
        });

        let a = await respuesta.json();
        if(a.status){
            let pedidosTomados=a.respuesta;
            document.getElementById('contenedor-lista-tomados').innerHTML="";
            pedidosTomados.forEach(pedido =>{
                let factura=pedido.factura[0];
                document.getElementById('contenedor-lista-tomados').innerHTML+=
                `<div class="objeto row" data-bs-toggle="modal" data-bs-target="#modalInfoPedido" onclick="visualizarInfoPedido('${pedido._id}')">
                    <div class="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 centrar-div">
                        <img src="${pedido.img}" alt="Imagen Pedido" srcset=""> 
                    </div>
                    <div class="col ms-2 mb-1 text-center">
                        <p class="fs-5 fw-medium">${pedido._id}</p>
                        <p class="fw-medium h6 " style="color: #fd8d07ff;">(Información cliente)</p>
                        <div class="row">
                            <div class="col">
                                <p class="h6" style="color: #fd8d07ff;">Nombre:</p> 
                                <p class="h6">${factura.cliente.nombre}</p>
                            </div>
                            <div class="col">
                                <p class="h6" style="color: #fd8d07ff;">Número de teléfono:</p>
                                <p class="h6">${factura.cliente.numTelefono}</p>
                            </div>
                        </div>
                        <p class="h6" style="color: #fd8d07ff;">Dirección:</p>
                        <p class="h6">${pedido.ubicacion}</p>
                    </div>
                    <div class="row">
                        <div class="col-12 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xxl-5 centrar-div">
                            <p class="fw-medium fs-5">Información factura</p>
                            <p class="fw-medium" style="font-size: 0.8rem; color: #fd8d07ff;">(Factura #${pedido._idFactura})</p>
                            <p class="fw-medium">${factura.empresa.nombre}</p>
                        </div>
                        <div class="col">
                            <div class="row text-center">
                                <div class="col centrar-div">
                                    <p class="h6" style="color: #fd8d07ff;">Motorista: </p>
                                    <p class="h6">${pedido.motorista.nombre}</p>
                                </div>
                                <div class="col centrar-div">
                                    <p class="h6" style="color: #fd8d07ff;">Estado: </p>
                                    <p class="h6">${pedido.estadoCliente}</p>
                                </div>
                                <p class="h6" style="color: #fd8d07ff;">Número de Teléfono: </p>
                                <p class="h6">${pedido.motorista.numTelefono}</p>
                            </div>
                        </div>  
                    </div>
                </div>`;
            });
        }else{
            console.log(a);
            modalWarning.show();
        }
    }catch{
        modalWarning.show();
        console.log('entra aqui')
    }


    
}

const visualizarEntregados= async()=>{
    document.getElementById('pedidos-agregar-repartidor').style.display="none";
    document.getElementById('pedidos-tomados-repartidor').style.display="none";
    document.getElementById('pedidos-entregados-repartidor').style.display="block";

    document.getElementById('btn-pedidos').classList.remove('active');
    document.getElementById('btn-tomados').classList.remove('active');
    document.getElementById('btn-entregados').classList.add('active'); 

    try{
        let respuesta = await fetch('http://localhost:5555/pedidos/obtener/Entregado',
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json", //MIME type 
            },
        });

        let a = await respuesta.json();
        if(a.status){
            pedidos=a.respuesta;
            let pedidosEntregados=a.respuesta
            //console.log(pedidosEntregados);
            document.getElementById('contenedor-lista-entregados').innerHTML="";
            pedidosEntregados.forEach(pedido=>{
                let factura=pedido.factura[0];
                let calificacion="";
                for(let i=0; i<pedido.calificacion; i++){
                    calificacion+=`<i class="fa-solid fa-star" style="color: #fd8d07ff;"></i>`;
                };
                for(let i=0; i<5-pedido.calificacion; i++){
                    calificacion+=`<i class="fa-solid fa-star"></i>`;
                }

                document.getElementById('contenedor-lista-entregados').innerHTML+=
                `<div class="objeto row" data-bs-toggle="modal" data-bs-target="#modalInfoPedido" onclick="visualizarInfoPedido('${pedido._id}')">
                    <div class="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 centrar-div">
                        <img src="${pedido.img}" alt="Imagen Pedido" srcset=""> 
                    </div>
                    <div class="col mb-1 text-center">
                        <p class="fs-5 fw-medium">${pedido._id}</p>
                        <div class="row text-start">
                            <div class="col border-end text-center">
                                <p class="fw-medium h6">Información cliente</p>
                                <p class="h6" style="color: #fd8d07ff;">Nombre:</p> 
                                <p class="h6">${factura.cliente.nombre}</p>
                                <p class="h6" style="color: #fd8d07ff;">Número de teléfono:</p>
                                <p class="h6">${factura.cliente.numTelefono}</p>
                            </div>
                            <div class="col text-center">
                                <p class="fw-medium h6 text-center ">Información Empleado</p>
                                <p class="h6" style="color: #fd8d07ff;">Nombre:</p> 
                                <p class="h6">${pedido.motorista.nombre}</p>
                                <p class="h6" style="color: #fd8d07ff;">Número de teléfono:</p>
                                <p class="h6">${pedido.motorista.numTelefono}</p>
                            </div>
                        </div>
                        <div class="row mt-2 fs-5">
                            <div class="col">
                                ${calificacion}
                            </div>
                        </div>
                    </div> 
                </div>`;
            })
        }else{
            console.log(a);
            modalWarning.show();
        }
    }catch{
        modalWarning.show();
        console.log('entra aqui')
    }
}

//Funciones de modales
const visualizarInfoPedido = async(id) =>{
    //try{
        let respuesta = await fetch(`http://localhost:5555/pedidos/${id}`,
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json", //MIME type 
            },
        });

        let a = await respuesta.json();
        if(a.status){
            let pedidoVisualizado= a.respuesta;
            let factura=pedidoVisualizado.factura[0]
            //encabezado
            document.getElementById('informacion-general-pedido-modal').innerHTML=
            `<div>
                <p>Código del pedido</p>
                <p class="mt-2 fw-bold titulo">${pedidoVisualizado._id}</p>
                <hr class="m-2">
                <div>
            <div>
                <p class="fw-bold titulo">Información cliente</p>
                <p>Nombre: ${factura.cliente.nombre}</p>
                <p>Telefono: ${factura.cliente.numTelefono}</p>
                <p>Direccion: ${pedidoVisualizado.ubicacion}</p>
            </div>
            <hr class="m-2">
            <p class="fw-bold titulo">Información factura</p>
            <p>${pedidoVisualizado._idFactura}</p>
            <p>Fecha: ${factura.fecha}</p>
            <p>Empresa: ${factura.empresa.nombre}</p>
            <p>Dirección: ${factura.empresa.direccion}</p>`;

            //productos
            document.getElementById('productos-factura').innerHTML=``;

            factura.productos.forEach(producto =>{
                document.getElementById('productos-factura').innerHTML+=
                `<tr>
                    <td>${producto.nombre}</td>
                    <td>${producto.cantidad}</td>
                    <td>${producto.precio}</td>
                </tr>`;
            });

            document.getElementById('productos-factura').innerHTML+=
            `<tr>
                <td>Subtotal</td>
                <td colspan="2">${factura.subtotal}</td>
            </tr>
            <tr>
                <td>ISV</td>
                <td colspan="2">${factura.isv}</td>
            </tr>
            <tr>
                <td>Envio</td>
                <td colspan="2">${pedidoVisualizado.costoEnvio}</td>
            </tr>
            <tr>
                <td>Total</td>
                <td colspan="2">${factura.total}</td>
            </tr>`;
            if(pedidoVisualizado.motorista!=null){
                document.getElementById('informacion-motorista-modal').innerHTML=
                `<div>
                    <p class="fw-bold titulo">Informacion motorista</p>
                    <p>Nombre: ${pedidoVisualizado.motorista.nombre}</p>
                    <p>Telefono: ${pedidoVisualizado.motorista.numTelefono}</p>
                </div>`;
            }else {
                document.getElementById('informacion-motorista-modal').innerHTML="";
            }

        }else{
            console.log(a);
            modalWarning.show();
        }
    /*}catch{
        modalWarning.show();
        console.log('entra aqui')
    }*/

}

//Funciones que se ejecutan antes de interarctuar con el usuario
obtenerPedidos();
