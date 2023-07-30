var productos=[
    {
        id:1,
        img: "../img/producto.png",
        nombre: "Camisa Deportiva",
        empresaNombre: "Nike",
        precio: 200,
        tallas:["L", "XS", "S", "M", "XL"],
        colores:["Rojo", "Azul", "Verde"],
    },
    {
        id:2,
        img: "../img/producto2.jpg",
        nombre: "Leggins",
        empresaNombre: "Adidas",
        precio: 200,
        tallas:["L", "XS", "S", "M", "XL"],
        colores:["Verde", "Rojo", "Azul"],
    },
    {
        id:3,
        img: "../img/producto3.webp",
        nombre: "Tenis Deportivos",
        empresaNombre: "Jordan",
        precio: 200,
        tallas:["36", "37", "33", "39"],
        colores:["Rojo", "Azul", "Verde"],
    }
]

var empresas=["Nike", "Adidas", "Jordan"];

//Variables
var idAutogenerado=4;
var imgActual="";
var productoModificar={};
var empresaElegida="";
var arrayTallas=[];
var arrayColores=[];
var contTallas=0;
var contColores=0;
var productoBorrar={};
const modalConfirmarAgregar= new bootstrap.Modal(document.getElementById('modalConfirmarAgregar'));
const modalConfirmarModificar= new bootstrap.Modal(document.getElementById('modalConfirmarModificar'));
const modalConfirmarBorrar= new bootstrap.Modal(document.getElementById('modalConfirmarBorrar'));
const inputFile= document.getElementById('input-file');
const modalCamposVacios= new bootstrap.Modal(document.getElementById('modalCamposVacios'));

//Renderizar lista
const renderizarLista = ()=>{
    document.getElementById('contenedor-lista-productos').innerHTML="";
    productos.forEach(producto => {
        let tallas="-";
        producto.tallas.forEach(talla =>{
            tallas+=talla+" - ";
        });
        let colores="-";
        producto.colores.forEach(color=>{
            colores+=color+" - ";
        });
        document.getElementById('contenedor-lista-productos').innerHTML+=
        `<div class="objeto row">
            <div class="col-4 centrar-div">
                <img src="${producto.img}" alt="Logo Producto" srcset=""> 
            </div>
            <div class="col ms-2">
                <p class="fw-bold id-style text-center">#${producto.id}</p>
                <div class="row">
                    <div class="col-6">
                        <p>Nombre producto:</p>
                        <p style="color: #fd8d07ff;" class="fw-medium">${producto.nombre}</p>
                        <p>Empresa:</p>
                        <p style="color: #fd8d07ff;" class="fw-medium">${producto.empresaNombre}</p>
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
                    <i class="fa-solid fa-pen-to-square p-1 me-2" style="color: #2c2c2c;" onclick="modificarProducto(${producto.id});" ></i>
                    <i class="fa-solid fa-trash p-1 me-2" style="color: red;" onclick="borrarProducto(${producto.id})" data-bs-toggle="modal" data-bs-target="#modalConfirmarBorrar"></i>
                </div>
            </div>
        </div>`;
    });


}

const volverAtras = ()=>{
    document.getElementById('pagina-lista').style.display="block";
    document.getElementById('pagina-agregar-modificar').style.display="none";
    renderizarLista();
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
    document.getElementById('id-producto').innerHTML=`#${idAutogenerado}`;

}

const confirmarAgregarProducto =()=>{
    if(validarCamposLlenos()){
        let producto= obtenerValoresInput();
        producto.id=idAutogenerado;
        productos.push(producto);
        console.log(producto);
        modalConfirmarAgregar.hide();
        volverAtras();
        idAutogenerado++;
    }else{
        modalConfirmarAgregar.hide();
        modalCamposVacios.show();
    }
}

//Modificar Producto
const modificarProducto = (id)=>{
    document.getElementById('pagina-lista').style.display="none";
    document.getElementById('pagina-agregar-modificar').style.display="block";

    document.getElementById('btn-agregar-producto').style.display="none";
    document.getElementById('btn-modificar-producto').style.display="block";

    document.getElementById('agregar-producto-titulo').style.display="none";
    document.getElementById('modificar-producto-titulo').style.display="block";

    document.getElementById('label-input-file').innerHTML="Cambiar";
    document.getElementById('id-producto').innerHTML=`#${id}`;

    productoModificar=productos.find(element=>element.id===id);

    //Poner valores de los inputs
    document.getElementById('imagen-producto').setAttribute('src', `${productoModificar.img}`);
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
    document.getElementById('select-empresa').value=productoModificar.empresaNombre;

}

const confirmarModificarProducto=()=>{
    if(validarCamposLlenos()){
        let producto= obtenerValoresInput();
        producto.id=productoModificar.id;
        producto.img=imgActual;
        productos[productos.indexOf(productoModificar)]=producto;
        modalConfirmarModificar.hide();
        volverAtras();
    }else{
        modalConfirmarModificar.hide();
        modalCamposVacios.show();
    }
}

//Eliminar Producto
const borrarProducto = (id)=>{
    productoBorrar=productos.find(element=>element.id===id);
}

const confirmarBorrarProducto = ()=>{
    productos.splice(productos.indexOf(productoBorrar),1);
    modalConfirmarBorrar.hide();
    volverAtras();
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
        `<option value="${empresa}">${empresa}</option>`;  
    });
}

const empresaEscogida = ()=>{
    empresaElegida=document.getElementById('select-empresa').value;
}

//Funciones agregar y borrar tallas
const agregarTalla= ()=>{
    if(document.getElementById('input-agregar-talla').value!=""){
        arrayTallas.push(document.getElementById('input-agregar-talla').value);
        document.getElementById('contenedor-agregar-tallas').innerHTML+=
        `<div class="objeto-agregado" onclick="borrarTalla(${contTallas});">
            <p>${document.getElementById('input-agregar-talla').value}</p>
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
        id:0,
        img: imgActual,
        nombre:document.getElementById('nombre-producto').value ,
        empresaNombre: empresaElegida,
        precio: document.getElementById('precio-producto').value,
        tallas:arrayTallas,
        colores:arrayColores,
    }

    return producto;
}

//Funciones que inician antes de la interaccion con el usuario
renderizarLista();
