var pedidos=[
    {
        id:11,
        factura:{
            id:5,
            fecha: "12/7/10",
            cliente: {
                primerNombre: "Mario",
                primerApellido: "Martinez",
                numTelefono:"5896-5235"
            },
            empresa:{
                nombre: "Blalala",
                direccion: "Mall Multiplaza",
            },
            productos:[
                {
                    producto: {
                        nombre: "Camisa",
                        precio: 100, 
                    },
                    cantidad: 2,
                },
                {
                    producto: {
                        nombre: "Leggin",
                        precio: 200, 
                    },
                    cantidad: 1,
                },
                {
                    producto: {
                        nombre: "Tenis",
                        precio: 1000, 
                    },
                    cantidad: 1,
                },
                {
                    producto: {
                        nombre: "Camisa",
                        precio: 500, 
                    },
                    cantidad: 2,
                },
                
            ],
        },
        costoEnvio:80,
        ubicacion: "Aldea de Suyapa",
        calificacion: null,
        estado:"Buscando Repartidor",
        imagenPedido: "../img/producto3.webp",
        motorista:{
            primerNombre: null,
            primerApellido: null,
            calificacion:null,
            tipoVehiculo:null,
            placa:null,
            numTelefono:null,
        }
    },
    {
        id:12,
        factura:{
            id:12,
            fecha: "12/7/10",
            cliente: {
                primerNombre: "Mario",
                primerApellido: "Martinez",
                numTelefono:"5896-5235"
            },
            empresa:{
                nombre: "SportLine",
                direccion: "Mall Multiplaza",
            },
            productos:[
                {
                    producto: {
                        nombre: "Camisa",
                        precio: 100, 
                    },
                    cantidad: 2,
                },
                {
                    producto: {
                        nombre: "Leggin",
                        precio: 200, 
                    },
                    cantidad: 1,
                },                
            ],
        },
        costoEnvio:80,
        ubicacion: "Aldea de Suyapa",
        calificacion: null,
        estado:null,
        imagenPedido: "../img/producto.png",
        motorista:{
            primerNombre: null,
            primerApellido: null,
            calificacion:null,
            tipoVehiculo:null,
            placa:null,
            numTelefono:null,
        }
    },
    {
        id:13,
        factura:{
            id:5,
            fecha: "12/7/10",
            cliente: {
                primerNombre: "Ana",
                primerApellido: "Martinez",
                numTelefono:"5896-5235"
            },
            empresa:{
                nombre: "Nike",
                direccion: "Res. las hadas",
            },
            productos:[
                {
                    producto: {
                        nombre: "Camisa",
                        precio: 100, 
                    },
                    cantidad: 2,
                },
                {
                    producto: {
                        nombre: "Leggin",
                        precio: 200, 
                    },
                    cantidad: 1,
                },
                {
                    producto: {
                        nombre: "Tenis",
                        precio: 1000, 
                    },
                    cantidad: 1,
                },
            ],
        },
        costoEnvio:80,
        ubicacion: "Col. Kennedy",
        calificacion: null,
        estado:"Buscando repartidor",
        imagenPedido:"../img/producto2.jpg",
        motorista:{
            primerNombre: null,
            primerApellido: null,
            calificacion:null,
            tipoVehiculo:null,
            placa:null,
            numTelefono:null,
        }
    },
]

var repartidores=[
    {
        id:1,
        primerNombre: "Thomas",
        primerApellido: "Vasquez",
        numTelefono: "9856-8521",
        genero:"M",
        pedidoTomados:[
            {
                id:1,
                factura:{
                    id:1,
                    fecha: "12/7/10",
                    cliente: {
                        primerNombre: "Maria",
                        primerApellido: "Martinez",
                        numTelefono:"5896-5235"
                    },
                    empresa:{
                        nombre: "Nike",
                        direccion: "Mall Multiplaza",
                    },
                    productos:[
                        {
                            producto: {
                                nombre: "Camisa",
                                precio: 100, 
                            },
                            cantidad: 2,
                        },
                        {
                            producto: {
                                nombre: "Leggin",
                                precio: 200, 
                            },
                            cantidad: 1,
                        },
                        
                    ],
                },
                costoEnvio: 70,
                ubicacion: "Col. Hato de enmedio",
                calificacion: 2,
                estado:"En camino",
                imagenPedido: "../img/producto.png", 
                motorista:{
                    primerNombre: "Thomas",
                    primerApellido: "Vasquez",
                    calificacion:3,
                    tipoVehiculo:"Moto",
                    placa:"HVD-196",
                    numTelefono:"9856-8521",
                }  
            },
        ],
        pedidoEntregados: [
            {
                id:2,
                factura:{
                    id:2,
                    fecha: "12/7/10",
                    cliente: {
                        primerNombre: "Mario",
                        primerApellido: "Martinez",
                        numTelefono:"5896-5235"
                    },
                    empresa:{
                        nombre: "Nike",
                        direccion: "Mall Multiplaza",
                    },
                    productos:[
                        {
                            producto: {
                                nombre: "Camisa",
                                precio: 100, 
                            },
                            cantidad: 2,
                        },
                        {
                            producto: {
                                nombre: "Leggin",
                                precio: 200, 
                            },
                            cantidad: 1,
                        },
                        {
                            producto: {
                                nombre: "Tenis",
                                precio: 1000, 
                            },
                            cantidad: 1,
                        },
                        
                    ],
                },
                costoEnvio: 70,
                ubicacion: "Col. Hato de enmedio",
                calificacion: 4,
                estado:"entregado",
                imagenPedido:"../img/producto2.jpg",
                motorista:{
                    primerNombre: "Thomas",
                    primerApellido: "Vasquez",
                    calificacion:3,
                    tipoVehiculo:"Moto",
                    placa:"HVD-196",
                    numTelefono:"9852-8741",
                }     
            },
            {
                id:3,
                factura:{
                    id:3,
                    fecha: "12/7/10",
                    cliente: {
                        primerNombre: "Mario",
                        primerApellido: "Martinez",
                        numTelefono:"5896-5235"
                    },
                    empresa:{
                        nombre: "Nike",
                        direccion: "Mall Multiplaza",
                    },
                    productos:[
                        {
                            producto: {
                                nombre: "Camisa",
                                precio: 100, 
                            },
                            cantidad: 2,
                        },                        
                    ],
                },
                costoEnvio: 70,
                ubicacion: "Col. Hato de enmedio",
                calificacion: 1,
                estado:"Entregado", 
                imagenPedido:"../img/producto3.webp",
                motorista:{
                    primerNombre: "Thomas",
                    primerApellido: "Vasquez",
                    calificacion:3,
                    tipoVehiculo:"Moto",
                    placa:"HVD-196",
                    numTelefono:"9856-8521",
                }   
            }
        ],
        mensajes: [
            {
                encabezado: "¡Se le ha asignado un nuevo pedido, pedido#100!",
                contenido: "Por favor revise su apartado de tomados.",
                estado:true
            },
            {
                encabezado: "¡Se le ha asignado un nuevo pedido, pedido#10!",
                contenido: "Por favor revise su apartado de tomados.",
                estado:true
            },
            {
                encabezado: "¡Se le ha asignado un nuevo pedido, pedido#15!",
                contenido: "Por favor revise su apartado de tomados.",
                estado:true
            }
        ]
    },
    {
        id:2,
        primerNombre: "Juana",
        primerApellido: "Godoy",
        numTelefono: "3659-8541",
        genero:"F",
        pedidoTomados:[
            {
                id:4,
                factura:{
                    id:4,
                    fecha: "12/7/10",
                    cliente: {
                        primerNombre: "Sam",
                        primerApellido: "Martinez",
                        numTelefono:"5896-5235"
                    },
                    empresa:{
                        nombre: "SportLine",
                        direccion: "Mall Multiplaza",
                    },
                    productos:[
                        {
                            producto: {
                                nombre: "Camisa",
                                precio: 100, 
                            },
                            cantidad: 2,
                        },
                        
                    ],
        
                },
                costoEnvio: 70,
                ubicacion: "Col. Hato de enmedio",
                calificacion: 0,
                estado:"En destino",
                imagenPedido:"../img/producto3.webp",
                motorista:{
                    primerNombre: "Juana",
                    primerApellido: "Godoy",
                    calificacion:4,
                    tipoVehiculo:"Carro",
                    placa:"KD5-85D",
                    numTelefono:"3659-8541",
                }     
            },
        ],
        pedidoEntregados: [
            {
                id:5,
                factura:{
                    id:5,
                    fecha: "12/7/10",
                    cliente: {
                        primerNombre: "Mario",
                        primerApellido: "Martinez",
                        numTelefono:"5896-5235"
                    },
                    empresa:{
                        nombre: "Blalala",
                        direccion: "Mall Multiplaza",
                    },
                    productos:[
                        {
                            producto: {
                                nombre: "Camisa",
                                precio: 100, 
                            },
                            cantidad: 2,
                        },
                        {
                            producto: {
                                nombre: "Leggin",
                                precio: 200, 
                            },
                            cantidad: 1,
                        },
                        {
                            producto: {
                                nombre: "Tenis",
                                precio: 1000, 
                            },
                            cantidad: 1,
                        },
                        {
                            producto: {
                                nombre: "Camisa",
                                precio: 500, 
                            },
                            cantidad: 2,
                        },
                        
                    ],
                },
                costoEnvio: 60,
                ubicacion: "Aldea de Suyapa",
                calificacion: 4,
                estado:"entregado", 
                imagenPedido: "../img/producto.png",
                motorista:{
                    primerNombre: "Juana",
                    primerApellido: "Godoy",
                    calificacion:4,
                    tipoVehiculo:"Carro",
                    placa:"KD5-85D",
                    numTelefono:"3659-8541",
                }   
            },
            {
                id:6,
                factura:{
                    id:6,
                    fecha: "12/7/10",
                    cliente: {
                        primerNombre: "Miriam",
                        primerApellido: "Martinez",
                        numTelefono:"5896-5235"
                    },
                    empresa:{
                        nombre: "Nike",
                        direccion: "Mall Multiplaza",
                    },
                    productos:[
                        {
                            producto: {
                                nombre: "Camisa",
                                precio: 100, 
                            },
                            cantidad: 2,
                        },                        
                    ],
                },
                costoEnvio: 70,
                ubicacion: "Col. Hato de enmedio",
                calificacion: 1,
                estado:"entregado",
                imagenPedido:"../img/producto2.jpg",
                motorista:{
                    primerNombre: "Juana",
                    primerApellido: "Godoy",
                    calificacion:4,
                    tipoVehiculo:"Carro",
                    placa:"KD5-85D",
                    numTelefono:"3659-8541",
                }     
            },
        ],
        mensajes: [
            {
                encabezado: "¡Se le ha asignado un nuevo pedido, pedido#100!",
                contenido: "Por favor revise su apartado de tomados.",
                estado:true
            },
            {
                encabezado: "¡Se le ha asignado un nuevo pedido, pedido#10!",
                contenido: "Por favor revise su apartado de tomados.",
                estado:false
            },
        ]
    },

]

//variables
var pedidosTomados=[];
var pedidosEntregados=[];
var motoristaSeleccionado={};
var pedidoSeleccionado={};
var modalConfirmarSeleccion = new bootstrap.Modal(document.getElementById('modalConfirmarSeleccion'));

  
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
        //Calculos
        let subtotal=0;
        pedido.factura.productos.forEach(producto =>{
            subtotal+=(producto.producto.precio*producto.cantidad);
        })

        let isv=subtotal*0.15;
        let total=subtotal+isv+pedido.costoEnvio;

        document.getElementById('contenedor-lista-pedidos').innerHTML+=
        `<div class="objeto row" data-bs-toggle="modal" data-bs-target="#modalInfoPedido" onclick="visualizarInfoPedido(${pedido.id}, 'pedido')">
            <div class="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 centrar-div">
                <img src="${pedido.imagenPedido}" alt="Imagen Pedido" srcset=""> 
            </div>
            <div class="col ms-2 mb-1 text-center">
                <p class="fs-5 fw-medium">Pedido #${pedido.id}</p>
                <p class="fw-medium h6 " style="color: #fd8d07ff;">(Información cliente)</p>
                <div class="row">
                    <div class="col">
                        <p class="h6" style="color: #fd8d07ff;">Nombre:</p> 
                        <p class="h6">${pedido.factura.cliente.primerApellido} ${pedido.factura.cliente.primerApellido}</p>
                    </div>
                    <div class="col">
                        <p class="h6" style="color: #fd8d07ff;">Número de teléfono:</p>
                        <p class="h6">${pedido.factura.cliente.numTelefono}</p>
                    </div>
                </div>
                <p class="h6" style="color: #fd8d07ff;">Dirección:</p>
                <p class="h6">${pedido.ubicacion}</p>
            </div>
            <div class="row">
                <div class="col-12 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xxl-5 centrar-div">
                    <p class="fw-medium fs-5 text-center">Información pedido</p>
                    <p class="fw-medium" style="font-size: 1rem; color: #fd8d07ff;">(Factura #${pedido.factura.id})</p>
                    <p class="fw-medium">${pedido.factura.empresa.nombre}</p>
                </div>
                <div class="col centrar-div">
                    <p class="h6" style="color: #fd8d07ff;">Subtotal: </p>
                    <p class="">${subtotal}</p>
                </div>
                <div class="col centrar-div">
                    <p class="h6" style="color: #fd8d07ff;">ISV: </p>
                    <p class="">${isv}</p>
                </div>
                <div class="col centrar-div">
                    <p class="h6" style="color: #fd8d07ff;">Envio: </p>
                    <p class="">${pedido.costoEnvio}</p>
                </div>
                <div class="col centrar-div">
                    <p class="h6" style="color: #fd8d07ff;">Total: </p>
                    <p class="">${total}</p>
                </div>
            </div>
            <div class="text-end fs-2" style="color: #fd8d07ff;" onclick="agregarMotorista(${pedido.id});" data-bs-toggle="modal" data-bs-target="#modalAgregarMotorista")>
                <i class="fa-solid fa-circle-plus ps-2 pe-2"></i>
            </div>
        </div> `;
    });
    

}

const agregarMotorista= id =>{
    //renderizar
    document.getElementById('contenedor-repartidores').innerHTML="";
    repartidores.forEach(repartidor=>{
        let img="";
        if(repartidor.genero=="M"){
            img="../img/usuario.png";
        }else{
            img="../img/usuario2.png";
        }
        document.getElementById('contenedor-repartidores').innerHTML+=
        `<div class="objeto row">
            <div class="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 centrar-div">
                <img src="${img}" alt="Imagen Pedido" srcset=""> 
                <div class="row">
                    <button class="btn-default" style="font-size: 15px;" data-bs-toggle="modal" data-bs-target="#modalConfirmarSeleccion" onclick="obtenerMotoristaSeleccionado(${repartidor.id})">Seleccionar</button>
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
    pedidoSeleccionado=pedidos.find(element=>element.id===id);
    console.log(pedidoSeleccionado);
}

const obtenerMotoristaSeleccionado = (id) =>{
    motoristaSeleccionado= repartidores.find(element => element.id === id);
    //console.log(motoristaSeleccionado);

    //Modificar modal de confirmacion
    document.getElementById('mensaje-confirmacion').innerHTML=`¿Esta seguro de asignar pedido al motorista ${motoristaSeleccionado.primerNombre} ${motoristaSeleccionado.primerApellido}?`;
}

const confirmarSeleccionMotorista = ()=>{
    //Agregar info del motorista
    pedidoSeleccionado.motorista=motoristaSeleccionado;

    //agregar el pedido seleccionado a tomados
    pedidosTomados.push(pedidoSeleccionado);

    //Agregar pedido seleccionado al repartido
    motoristaSeleccionado.pedidoTomados.push(pedidoSeleccionado);

    //Mandar mensaje al motorista
    let mensaje={
        encabezado: "¡Se le ha asignado un nuevo pedido, pedido#100!",
        contenido: "Por favor revise su apartado de tomados.",
        estado:false,
    };
    motoristaSeleccionado.mensajes.push(mensaje);

    //Borrar el pedido de la lista de pedidos
    pedidos.splice(pedidos.indexOf(pedidoSeleccionado),1);
    modalConfirmarSeleccion.hide();

    //Mostrar pedido en el apartado de tomados
    visualizarTomados();
    document.getElementById('contenedor-lista-tomados').scrollTop= document.getElementById('contenedor-lista-tomados').scrollHeight;

    console.log(repartidores);
    console.log(pedidos);
    console.log(motoristaSeleccionado.pedidoTomados.length);
    console.log(pedidosTomados);

}

const visualizarTomados= ()=>{
    document.getElementById('pedidos-agregar-repartidor').style.display="none";
    document.getElementById('pedidos-tomados-repartidor').style.display="block";
    document.getElementById('pedidos-entregados-repartidor').style.display="none";

    document.getElementById('btn-pedidos').classList.remove('active');
    document.getElementById('btn-tomados').classList.add('active');
    document.getElementById('btn-entregados').classList.remove('active');   
    
    pedidosTomados=[];
    repartidores.forEach(repartidor=>{
        repartidor.pedidoTomados.forEach(pedido=>{
            pedidosTomados.push(pedido);
        });
    });

    //console.log(pedidosTomados);

    document.getElementById('contenedor-lista-tomados').innerHTML="";
    pedidosTomados.forEach(pedido =>{
        document.getElementById('contenedor-lista-tomados').innerHTML+=
        `<div class="objeto row" data-bs-toggle="modal" data-bs-target="#modalInfoPedido" onclick="visualizarInfoPedido(${pedido.id}, 'tomado')">
            <div class="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 centrar-div">
                <img src="${pedido.imagenPedido}" alt="Imagen Pedido" srcset=""> 
            </div>
            <div class="col ms-2 mb-1 text-center">
                <p class="fs-5 fw-medium">Pedido #${pedido.id}</p>
                <p class="fw-medium h6 " style="color: #fd8d07ff;">(Información cliente)</p>
                <div class="row">
                    <div class="col">
                        <p class="h6" style="color: #fd8d07ff;">Nombre:</p> 
                        <p class="h6">${pedido.factura.cliente.primerNombre} ${pedido.factura.cliente.primerApellido}</p>
                    </div>
                    <div class="col">
                        <p class="h6" style="color: #fd8d07ff;">Número de teléfono:</p>
                        <p class="h6">${pedido.factura.cliente.numTelefono}</p>
                    </div>
                </div>
                <p class="h6" style="color: #fd8d07ff;">Dirección:</p>
                <p class="h6">${pedido.ubicacion}</p>
            </div>
            <div class="row">
                <div class="col-12 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xxl-5 centrar-div">
                    <p class="fw-medium fs-5">Información pedido</p>
                    <p class="fw-medium" style="font-size: 1rem; color: #fd8d07ff;">(Factura #${pedido.factura.id})</p>
                    <p class="fw-medium">${pedido.factura.empresa.nombre}</p>
                </div>
                <div class="col">
                    <div class="row text-center">
                        <div class="col centrar-div">
                            <p class="h6" style="color: #fd8d07ff;">Motorista: </p>
                            <p class="">${pedido.motorista.primerNombre} ${pedido.motorista.primerApellido}</p>
                        </div>
                        <div class="col centrar-div">
                            <p class="h6" style="color: #fd8d07ff;">Estado: </p>
                            <p class="">${pedido.estado}</p>
                        </div>
                        <p class="h6" style="color: #fd8d07ff;">Número de Teléfono: </p>
                        <p class="">${pedido.motorista.numTelefono}</p>
                    </div>
                </div>  
            </div>
        </div>`;
    });
}

const visualizarEntregados= ()=>{
    document.getElementById('pedidos-agregar-repartidor').style.display="none";
    document.getElementById('pedidos-tomados-repartidor').style.display="none";
    document.getElementById('pedidos-entregados-repartidor').style.display="block";

    document.getElementById('btn-pedidos').classList.remove('active');
    document.getElementById('btn-tomados').classList.remove('active');
    document.getElementById('btn-entregados').classList.add('active'); 
    
    pedidosEntregados=[];
    repartidores.forEach(repartidor=>{
        repartidor.pedidoEntregados.forEach(pedido=>{
            pedidosEntregados.push(pedido);
        });
    });

    console.log(pedidosEntregados);

    document.getElementById('contenedor-lista-entregados').innerHTML="";
    pedidosEntregados.forEach(pedido=>{
        let calificacion="";
        for(let i=0; i<pedido.calificacion; i++){
            calificacion+=`<i class="fa-solid fa-star" style="color: #fd8d07ff;"></i>`;
        };
        for(let i=0; i<5-pedido.calificacion; i++){
            calificacion+=`<i class="fa-solid fa-star"></i>`;
        }

        document.getElementById('contenedor-lista-entregados').innerHTML+=
        `<div class="objeto row" data-bs-toggle="modal" data-bs-target="#modalInfoPedido" onclick="visualizarInfoPedido(${pedido.id}, 'entrega')">
            <div class="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 centrar-div">
                <img src="${pedido.imagenPedido}" alt="Imagen Pedido" srcset=""> 
            </div>
            <div class="col mb-1 text-center">
                <p class="fs-5 fw-medium">Pedido #${pedido.id}</p>
                <div class="row text-start">
                    <div class="col border-end text-center">
                        <p class="fw-medium h6">Información cliente</p>
                        <p class="h6" style="color: #fd8d07ff;">Nombre:</p> 
                        <p class="h6">${pedido.factura.cliente.primerNombre} ${pedido.factura.cliente.primerApellido}</p>
                        <p class="h6" style="color: #fd8d07ff;">Número de teléfono:</p>
                        <p class="h6">${pedido.factura.cliente.numTelefono}</p>
                    </div>
                    <div class="col text-center">
                        <p class="fw-medium h6 text-center ">Información Empleado</p>
                        <p class="h6" style="color: #fd8d07ff;">Nombre:</p> 
                        <p class="h6">${pedido.motorista.primerNombre} ${pedido.motorista.primerApellido}</p>
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

}

//Funciones de modales
const visualizarInfoPedido = (id, tipo) =>{
    let pedidoVisualizado={};
    if(tipo=="pedido"){
        pedidoVisualizado= pedidos.find(element => element.id === id);
    }else if(tipo=="tomado"){
        pedidoVisualizado= pedidosTomados.find(element => element.id === id);
    }else{
        pedidoVisualizado= pedidosEntregados.find(element => element.id === id);
    }
    

    //encabezado
    document.getElementById('informacion-general-pedido-modal').innerHTML=
    `<div>
        <p class="mt-2 fw-bold titulo">Pedido #${pedidoVisualizado.id}</p>
        <hr class="m-2">
        <div>
    <div>
        <p class="fw-bold titulo">Informacion cliente</p>
        <p>Nombre: ${pedidoVisualizado.factura.cliente.primerNombre} ${pedidoVisualizado.factura.cliente.primerApellido}</p>
        <p>Telefono: ${pedidoVisualizado.factura.cliente.numTelefono}</p>
        <p>Direccion: ${pedidoVisualizado.ubicacion}</p>
    </div>
    <hr class="m-2">
    <p class="fw-bold titulo">Factura #${pedidoVisualizado.factura.id}</p>
    <p>Fecha: ${pedidoVisualizado.factura.fecha}</p>
    <p>Empresa: ${pedidoVisualizado.factura.empresa.nombre}</p>
    <p>Dirección: ${pedidoVisualizado.factura.empresa.direccion}</p>`;

    //productos
    document.getElementById('productos-factura').innerHTML=``;

    pedidoVisualizado.factura.productos.forEach(producto =>{
        document.getElementById('productos-factura').innerHTML+=
        `<tr>
            <td>${producto.producto.nombre}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.producto.precio}</td>
        </tr>`;
    });

    //Calculos
    let subtotal=0;
    pedidoVisualizado.factura.productos.forEach(producto =>{
        subtotal+=(producto.producto.precio*producto.cantidad);
    })

    let isv=subtotal*0.15;
    let total=subtotal+isv+pedidoVisualizado.costoEnvio;

    document.getElementById('productos-factura').innerHTML+=
    `<tr>
        <td>Subtotal</td>
        <td colspan="2">${subtotal}</td>
    </tr>
    <tr>
        <td>ISV</td>
        <td colspan="2">${isv}</td>
    </tr>
    <tr>
        <td>Envio</td>
        <td colspan="2">${pedidoVisualizado.costoEnvio}</td>
    </tr>
    <tr>
        <td>Total</td>
        <td colspan="2">${total}</td>
    </tr>`;
    if(tipo!="pedido"){
        document.getElementById('informacion-motorista-modal').innerHTML=
        `<div>
            <p class="fw-bold titulo">Informacion motorista</p>
            <p>Nombre: ${pedidoVisualizado.motorista.primerNombre} ${pedidoVisualizado.motorista.primerApellido}</p>
            <p>Telefono: ${pedidoVisualizado.motorista.numTelefono}</p>
        </div>`;
    }else {
        document.getElementById('informacion-motorista-modal').innerHTML="";
    }

}

//Funciones que se ejecutan antes de interarctuar con el usuario
visualizarPedidos();
