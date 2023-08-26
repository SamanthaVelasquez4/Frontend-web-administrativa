var productos=[];
let empresas=[];

//Variables
let imgActual="";
let productoModificar={};
let empresaElegida="";
let arrayTallas=[];
let arrayColores=[];
let contTallas=0;
let contColores=0;
let productoBorrar;
const modalConfirmarAgregar= new bootstrap.Modal(document.getElementById('modalConfirmarAgregar'));
const modalConfirmarModificar= new bootstrap.Modal(document.getElementById('modalConfirmarModificar'));
const modalConfirmarBorrar= new bootstrap.Modal(document.getElementById('modalConfirmarBorrar'));
const inputFile= document.getElementById('input-file');
const modalCamposVacios= new bootstrap.Modal(document.getElementById('modalCamposVacios'));
const modalWarning= new bootstrap.Modal(document.getElementById('modalWarning'));


//obtener Empresas
const obtenerEmpresas = async() =>{
    try{let respuesta = await fetch('http://localhost:5555/empresas/administrador/nombres',
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", //MIME type 
        },
    });

    let a = await respuesta.json();
        if(a.status){
            empresas=a.respuesta;
            generarSelect();
        }else{
            console.log(a);
            modalWarning.show();
        }
    }catch{
        modalWarning.show();
    }
}

//obtener y renderizar productos
const ObtenerProductos = async() =>{
    try{
        let respuesta = await fetch('http://localhost:5555/productos',
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json", //MIME type 
            },
        });

        let a = await respuesta.json();
        if(a.status){
            productos=a.respuesta;
            renderizarLista();
        }else{
            console.log(a);
            modalWarning.show();
        }
    }catch{
        modalWarning.show();
    }

    /*window.location.href="../index.html";*/
}

//Renderizar lista
const renderizarLista = async()=>{
    if(productos.length<=0){
        document.getElementById('contenedor-lista-productos').innerHTML=
        `<div class="vacio" style="color: #ffffff;">
            <i class="fa-regular fa-clock fa-spin"></i>
            No se han agregado productos...
        </div>`;
    }else{
        document.getElementById('contenedor-lista-productos').innerHTML="";
        productos.forEach(productosRenderizar);
    }
}

const productosRenderizar = async(producto) =>{
    try{
         //obtener Imagen
        let respuesta = await fetch(`http://localhost:5555/productos/${producto._id}/obtener/imagen`,
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json", //MIME type 
            },
        });

        let a = await respuesta.json();
        if(a.status){
            let imagenProducto= a.respuesta.img;

            let tallas="-";
            producto.tallas.forEach(talla =>{
            tallas+=talla+" - ";
            });
            let colores="-";
            producto.colores.forEach(color=>{
            colores+=color+" - ";
            });
    
            //Obtener nombre empresa
            let empresaProducto= empresas.find(element=>element._id===producto._idEmpresa);
            let nombreEmpresa= empresaProducto.nombre;
            document.getElementById('contenedor-lista-productos').innerHTML+=
            `<div class="objeto row">
            <div class="col-12 col-xl-4 col-lg-5 col-md-5 col-sm-11 centrar-div">
                <img src="${imagenProducto}" alt="Logo Producto" srcset=""> 
            </div>
            <div class="col ms-2">
                <p class="fw-bold id-style text-center">${producto._id}</p>
                <div class="row">
                    <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <p>Nombre producto:</p>
                        <p style="color: #fd8d07ff;" class="fw-medium">${producto.nombre}</p>
                        <p>Empresa:</p>
                        <p style="color: #fd8d07ff;" class="fw-medium">${nombreEmpresa}</p>
                        <p>Precio:</p>
                        <p style="color: #fd8d07ff;" class="fw-medium">${producto.precio} lps</p>
                    </div>
                    <div class="col">
                        <p>Tallas disponibles:</p>
                        <p style="color: #fd8d07ff;" class="fw-medium">${tallas}</p>
                        <p>Colores:</p>
                        <p style="color: #fd8d07ff;" class="fw-medium">${colores}</p>
                    </div>
                </div>
                <div class="text-end fs-2">
                    <i class="fa-solid fa-pen-to-square p-1 me-2" style="color: #2c2c2c;" onclick="modificarProducto('${producto._id}');" ></i>
                    <i class="fa-solid fa-trash p-1 me-2" style="color: red;" onclick="borrarProducto('${producto._id}')" data-bs-toggle="modal" data-bs-target="#modalConfirmarBorrar"></i>
                </div>
            </div>
            </div>`;
        }else{
            modalWarning.show();
        }  
    }catch{
        modalWarning.show();
    }
   
}

const volverAtras = ()=>{
    document.getElementById('pagina-lista').style.display="block";
    document.getElementById('pagina-agregar-modificar').style.display="none";
    ObtenerProductos();
}

//Agregar Producto
const agregarProducto = ()=>{
    //Borrar inputs
    borrarValoresInputs();

    //Mostrar la pagina para agregar empresa y ocultar la lista
    document.getElementById('pagina-lista').style.display="none";
    document.getElementById('pagina-agregar-modificar').style.display="block";

    //Mostrar el btn para agregar empresa
    document.getElementById('btn-agregar-producto').style.display="block";
    document.getElementById('btn-modificar-producto').style.display="none";

    //Mostrar el titulo
    document.getElementById('agregar-producto-titulo').style.display="block";
    document.getElementById('modificar-producto-titulo').style.display="none";

    document.getElementById('imagen-producto').setAttribute('src',`https://tiny-img.com/images/icons/upload-icon.png`);
    document.getElementById('label-input-file').innerHTML="Elegir imagen";
    document.getElementById('id-producto').innerHTML=``;

}

const confirmarAgregarProducto =async()=>{

    try{
        if(validarCamposLlenos()){
            let producto= obtenerValoresInput();
            let respuesta = await fetch(`http://localhost:5555/productos`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json", //MIME type 
                },
                body: JSON.stringify(producto) 
            });
            let a= await respuesta.json();
            if(a.status){
                modalConfirmarAgregar.hide();
                volverAtras();
            }else{
                console.log(a);
                modalWarning.show();
                volverAtras();
            }
    
        }else{
            modalConfirmarAgregar.hide();
            modalCamposVacios.show();
        }

    }catch{
        modalWarning.show();
    }
}

//Modificar Producto
const modificarProducto = async(id)=>{
    document.getElementById('pagina-lista').style.display="none";
    document.getElementById('pagina-agregar-modificar').style.display="block";

    document.getElementById('btn-agregar-producto').style.display="none";
    document.getElementById('btn-modificar-producto').style.display="block";

    document.getElementById('agregar-producto-titulo').style.display="none";
    document.getElementById('modificar-producto-titulo').style.display="block";

    document.getElementById('label-input-file').innerHTML="Cambiar";
    document.getElementById('id-producto').innerHTML=`${id}`;

    productoModificar=productos.find(element=>element._id===id);

    //Poner valores de los inputs
    //obtener Imagen
    let respuesta = await fetch(`http://localhost:5555/productos/${id}/obtener/imagen`,
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", //MIME type 
        },
    });

    let a = await respuesta.json();
    let imagenProducto=a.respuesta.img;
    document.getElementById('imagen-producto').setAttribute('src', `${imagenProducto}`);
    borrarValoresInputs();
    imgActual=productoModificar.img;
    document.getElementById('nombre-producto').value=productoModificar.nombre;
    document.getElementById('precio-producto').value=productoModificar.precio;
    contColores=0;
    arrayColores=productoModificar.colores;
    arrayColores.forEach(color=>{
        document.getElementById('contenedor-agregar-colores').innerHTML+=
        `<div class="objeto-agregado" onclick="borrarColor(${contColores});">
            <p>${color}</p>
            <p class="ms-3 btn-close"></p>
        </div>`;
        contColores++;
    })
    contTallas=0;
    arrayTallas=productoModificar.tallas;
    arrayTallas.forEach(talla=>{
        document.getElementById('contenedor-agregar-tallas').innerHTML+=
        `<div class="objeto-agregado" onclick="borrarTalla(${contTallas});">
            <p>${talla}</p>
            <p class="ms-3 btn-close"></p>
        </div>`;
        contTallas++;
    })
    document.getElementById('select-empresa').value=productoModificar._idEmpresa;
    empresaElegida=productoModificar.empresaNombre;

}

const confirmarModificarProducto=async()=>{

    if(validarCamposLlenos()){
        let producto= obtenerValoresInput();
        producto.img=imgActual;
        try{
            let respuesta = await fetch(`http://localhost:5555/productos/${productoModificar._id}`,
            {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json", //MIME type 
                },
                body: JSON.stringify(producto) 
            });
        
            let a=await respuesta.json();
            if(a.status){
                modalConfirmarModificar.hide();
                volverAtras();
            }else{
                console.log(a);
                modalConfirmarModificar.hide();
                modalWarning.show();
                volverAtras();
            }
        }catch{
            modalConfirmarModificar.hide();
            modalWarning.show();
            volverAtras();
        }
    }else{
        modalConfirmarModificar.hide();
        modalCamposVacios.show();
    }
}

//Eliminar Producto
const borrarProducto = (id)=>{
    productoBorrar=id;
}

const confirmarBorrarProducto = async()=>{
    try{
        let respuesta = await fetch(`http://localhost:5555/productos/${productoBorrar}`,
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json", //MIME type 
            },
        });
        let a = await respuesta.json();
        if(a.status){
            modalConfirmarBorrar.hide();
            volverAtras();
        }else{
            console.log(a);
            modalConfirmarBorrar.hide();
            modalWarning.show();
        }

    }catch{
        modalConfirmarBorrar.hide();
        modalWarning.show();
    }
}

//Para la imagenes
inputFile.addEventListener('change',  e => {
    if(e.target.files[0]){
        const reader = new FileReader();
        reader.onload = e =>{
            document.getElementById('imagen-producto').setAttribute('src',e.target.result);
            imgActual=e.target.result;
            //console.log(e.target.result);
        }
        reader.readAsDataURL(e.target.files[0]);
    }else{
        document.getElementById('imagen-producto').setAttribute('src',`https://tiny-img.com/images/icons/upload-icon.png`);
    }
});

//Funciones para el select
const generarSelect = ()=>{
    document.getElementById('select-empresa').innerHTML='<option value="default">Seleccione Empresa</option>';
    empresas.forEach(empresa =>{
        document.getElementById('select-empresa').innerHTML += 
        `<option value="${empresa._id}">${empresa.nombre}</option>`;  
    });
}

const empresaEscogida = ()=>{
    empresaElegida=document.getElementById('select-empresa').value;
}

//Funciones agregar y borrar tallas
const agregarTalla= ()=>{
    if(document.getElementById('input-agregar-talla').value!=""){
        let talla=document.getElementById('input-agregar-talla').value;
        arrayTallas.push(talla.toUpperCase());
        document.getElementById('contenedor-agregar-tallas').innerHTML+=
        `<div class="objeto-agregado" onclick="borrarTalla(${contTallas});">
            <p>${talla.toUpperCase()}</p>
            <p class="ms-3 btn-close"></p>
        </div>`;
        contTallas++;
        document.getElementById('input-agregar-talla').value="";
    }

}

const borrarTalla= (indice) =>{
    arrayTallas.splice(indice,1);
    document.getElementById('contenedor-agregar-tallas').innerHTML="";
    contTallas=0;
    arrayTallas.forEach(talla=>{
        document.getElementById('contenedor-agregar-tallas').innerHTML+=
        `<div class="objeto-agregado" onclick="borrarTalla(${contTallas});">
            <p>${talla}</p>
            <p class="ms-3 btn-close"></p>
        </div>`;
        contTallas++;
    })
}

//Funciones para borrar y agregar colores
const agregarColor = ()=> {
    if(document.getElementById('input-agregar-color').value){
        arrayColores.push(document.getElementById('input-agregar-color').value);
        document.getElementById('contenedor-agregar-colores').innerHTML+=
        `<div class="objeto-agregado" onclick="borrarColor(${contColores});">
            <p>${document.getElementById('input-agregar-color').value}</p>
            <p class="ms-2 btn-close"></p>
        </div>`;
        contColores++;
        document.getElementById('input-agregar-color').value="#000000";
    }
}

const borrarColor= indice =>{
    arrayColores.splice(indice,1);
    document.getElementById('contenedor-agregar-colores').innerHTML="";
    contColores=0;
    arrayColores.forEach(color=>{
        document.getElementById('contenedor-agregar-colores').innerHTML+=
        `<div class="objeto-agregado" onclick="borrarColor(${contColores});">
            <p>${color}</p>
            <p class="ms-3 btn-close"></p>
        </div>`;
        contColores++;
    })
}

//Funciones para los inputs
const validarCamposLlenos = ()=>{
    let validar=true;
    if(document.getElementById('nombre-producto').value==""){
        validar=false;
    }
    if(document.getElementById('select-empresa').value=="default"){
        validar=false;
    }
    if(document.getElementById('precio-producto').value==""){
        validar=false;
    }
    if(arrayColores.length<=0){
        validar=false;
    }
    if(arrayTallas.length<=0){
        validar=false;
    }
    if(imgActual==""){
        validar=false;
    }
    return validar;
}

const borrarValoresInputs = ()=>{
    document.getElementById('nombre-producto').value="";
    generarSelect();
    document.getElementById('precio-producto').value="";
    document.getElementById('contenedor-agregar-colores').innerHTML="";
    document.getElementById('contenedor-agregar-tallas').innerHTML="";
    contColores=0;
    contTallas=0;
    arrayColores=[];
    arrayTallas=[];
    imgActual="";
}

const obtenerValoresInput= ()=>{
    let producto={
        img: imgActual,
        nombre:document.getElementById('nombre-producto').value ,
        _idEmpresa: empresaElegida,
        precio: document.getElementById('precio-producto').value,
        tallas:arrayTallas,
        colores:arrayColores,
    }

    return producto;
}

//Funciones que inician antes de la interaccion con el usuario
obtenerEmpresas();
ObtenerProductos();