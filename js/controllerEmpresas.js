let empresas= [];

//Variables
const modalConfirmarAgregar= new bootstrap.Modal(document.getElementById('modalConfirmarAgregar'));
let empresaModificar={};
const modalConfirmarModificar= new bootstrap.Modal(document.getElementById('modalConfirmarModificar'));
let empresaBorrar="";
const modalConfirmarBorrar= new bootstrap.Modal(document.getElementById('modalConfirmarBorrar'));
const modalWarning= new bootstrap.Modal(document.getElementById('modalWarning'));
const inputFile= document.getElementById('input-file');
let imgActual;
const modalCamposVacios= new bootstrap.Modal(document.getElementById('modalCamposVacios'));

//Obtener y renderizar lista de empresas
const obtenerEmpresas = async() =>{
    try{let respuesta = await fetch('http://localhost:5555/empresas',
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", //MIME type 
        },
    });

    let a = await respuesta.json();
        if(a.status){
            empresas=a.respuesta;
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
const renderizarLista = ()=>{
    if(empresas.length<=0){
        document.getElementById('contenedor-lista-empresas').innerHTML=
        `<div class="vacio" style="color: #ffffff;">
            <i class="fa-regular fa-clock fa-spin"></i>
            No hay empresas agregadas...
        </div>`;
    }else{
        document.getElementById('contenedor-lista-empresas').innerHTML="";
        empresas.forEach(empresa => {
            let tipoEmpresa="- ";
            empresa.tipo.forEach(tipo => {
                tipoEmpresa+=tipo+" - ";
            })
            document.getElementById('contenedor-lista-empresas').innerHTML+=
            `<div class="objeto row">
                <div class="col-12 col-xl-4 col-lg-5 col-md-5 col-sm-11 centrar-div">
                    <img src="${empresa.img}" alt="Logo Empresa" srcset=""> 
                </div>
                <div class="col ms-2">
                    <p class="fw-bold id-style text-center">${empresa._id}</p>
                    <div class="row">
                        <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <p>Nombre empresa:</p>
                            <p style="color: #fd8d07ff;" class="fw-medium">${empresa.nombre}</p>
                            <p>Horario de atención:</p>
                            <p style="color: #fd8d07ff;" class="fw-medium">${empresa.horaApertura}-${empresa.horaCierre}</p>
                        </div>
                        <div class="col">
                            <p>Tipo de empresa:</p>
                            <p style="color: #fd8d07ff;" class="fw-medium">${tipoEmpresa}</p>
                            <p>Número teléfono:</p>
                            <p style="color: #fd8d07ff;" class="fw-medium">${empresa.numTelefono}</p>
                        </div>
                    </div>
                    <p>Dirección: ${empresa.direccion}</p>
                    <div class="text-end fs-2">
                        <i class="fa-solid fa-pen-to-square p-1 me-2" style="color: #2c2c2c;" onclick="modificarEmpresa('${empresa._id}')"></i>
                        <i class="fa-solid fa-trash p-1 me-2" style="color: red;" onclick="borrarEmpresa('${empresa._id}')" data-bs-toggle="modal" data-bs-target="#modalConfirmarBorrar"></i>
                    </div>
                </div>
            </div>`;
        })
    }
    
}

const volverAtras = ()=>{
    document.getElementById('pagina-lista').style.display="block";
    document.getElementById('pagina-agregar-modificar').style.display="none";
    obtenerEmpresas();
}

//Agregar empresa
const agregarEmpresa = ()=>{
    //Borrar inputs
    borrarValoresInputs();
    document.getElementById('id-empresa').innerHTML=``;

    //Mostrar la pagina para agregar empresa y ocultar la lista
    document.getElementById('pagina-lista').style.display="none";
    document.getElementById('pagina-agregar-modificar').style.display="block";

    //Mostrar el btn para agregar empresa
    document.getElementById('btn-agregar-empresa').style.display="block";
    document.getElementById('btn-modificar-empresa').style.display="none";

    //Mostrar el titulo
    document.getElementById('agregar-empresa-titulo').style.display="block";
    document.getElementById('modificar-empresa-titulo').style.display="none";

    document.getElementById('imagen-empresa').setAttribute('src',`https://tiny-img.com/images/icons/upload-icon.png`);
    document.getElementById('label-input-file').innerHTML="Elegir imagen";

}

const confirmarAgregarEmpresa= async()=>{
    try{
        if(validarCamposLlenos()){
            let empresa= obtenerValoresInput();
            let respuesta = await fetch(`http://localhost:5555/empresas`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json", //MIME type 
                },
                body: JSON.stringify(empresa) 
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

//Modificar empresa
const modificarEmpresa = async(id)=>{
    document.getElementById('pagina-lista').style.display="none";
    document.getElementById('pagina-agregar-modificar').style.display="block";

    document.getElementById('btn-agregar-empresa').style.display="none";
    document.getElementById('btn-modificar-empresa').style.display="block";

    document.getElementById('agregar-empresa-titulo').style.display="none";
    document.getElementById('modificar-empresa-titulo').style.display="block";

    document.getElementById('label-input-file').innerHTML="Cambiar";

    try{
        let respuesta = await fetch(`http://localhost:5555/empresas/${id}`,
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json", //MIME type 
            },
        });
    
        let a = await respuesta.json();
        if(a.status){
            empresaModificar=a.respuesta;
            //poner valores en los inputs
            document.getElementById('imagen-empresa').setAttribute('src',`${empresaModificar.img}`);
            borrarValoresInputs();
            imgActual=empresaModificar.img;
            document.getElementById('nombre-empresa').value=empresaModificar.nombre;
            document.getElementById('id-empresa').innerHTML=`${empresaModificar._id}`;
            document.getElementById('num-telefono-empresa').value=empresaModificar.numTelefono;
            document.getElementById('hora-inicio').value=empresaModificar.horaApertura;
            document.getElementById('hora-final').value=empresaModificar.horaCierre;
            document.getElementById('direccion-empresa').value=empresaModificar.direccion;
    
            empresaModificar.tipo.forEach(tipo =>{
                if(tipo=="Ropa"){
                    document.getElementById('checkbox-ropa').checked=true;
                }else if(tipo=="Calzado"){
                    document.getElementById('checkbox-calzado').checked=true;
                }
            });
        }else{
            console.log(a);
            modalWarning.show();
            volverAtras();
        }
    }catch{
        modalWarning.show();
        volverAtras();
    } 
}

const confirmarmodificarEmpresa = async()=>{
    if(validarCamposLlenos()){
        let empresa= obtenerValoresInput();
        empresa.img=imgActual;
        try{
            let respuesta = await fetch(`http://localhost:5555/empresas/${empresaModificar._id}`,
            {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json", //MIME type 
                },
                body: JSON.stringify(empresa) 
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

//Funciones para los inputs
const borrarValoresInputs = ()=>{
    document.getElementById('nombre-empresa').value="";
    document.getElementById('num-telefono-empresa').value="";
    document.getElementById('hora-inicio').value="";
    document.getElementById('hora-final').value="";
    document.getElementById('direccion-empresa').value="";
    document.getElementById('checkbox-ropa').checked=false;
    document.getElementById('checkbox-calzado').checked=false;
    inputFile.value="";
    imgActual="";
}

const obtenerValoresInput = () =>{

    let tipoEmpresa=[];
    if(document.getElementById('checkbox-ropa').checked){
        tipoEmpresa.push("Ropa");
    };
    if(document.getElementById('checkbox-calzado').checked){
        tipoEmpresa.push("Calzado");
    };
    let empresaNueva={
        nombre: document.getElementById('nombre-empresa').value,
        tipo:tipoEmpresa,
        horaApertura:document.getElementById('hora-inicio').value ,
        horaCierre: document.getElementById('hora-final').value,
        numTelefono:  document.getElementById('num-telefono-empresa').value,
        direccion: document.getElementById('direccion-empresa').value,
        img: imgActual
    }

    return empresaNueva;
}

const validarCamposLlenos = () =>{
    let validar=true;
    if(document.getElementById('nombre-empresa').value==""){
        validar=false;
    }
    if(document.getElementById('num-telefono-empresa').value==""){
        validar=false;
    }
    if(document.getElementById('hora-inicio').value==""){
        validar=false;
    }
    if(document.getElementById('hora-final').value==""){
        validar=false;
    }
    if(document.getElementById('direccion-empresa').value==""){
        validar=false;
    }
    if(!document.getElementById('checkbox-ropa').checked && !document.getElementById('checkbox-calzado').checked){
        validar=false;
    }
    if(imgActual==""){
        validar=false;
    }
    return validar;
}

function formatNumber(input) {

    let value = input.value;
  
    value = value.replace(/\D/g, '');
  
    if (value.length > 4 && value.length <= 8) {
      value = value.slice(0, 4) + '-' + value.slice(4);
    }
  
    if (value.length > 9) {
      value = value.slice(0, 9);
    }
  
    if (value.length === 9) {
      value = "+504 " + value;
    }
  
    input.value = value;
  }

//Eliminar Empresa
const borrarEmpresa = (id)=>{
    empresaBorrar=id;
}

const confirmarBorrarEmpresa = async()=>{
    try{
        let respuesta1 = await fetch(`http://localhost:5555/productos/empresa/${empresaBorrar}`,
        {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json", //MIME type 
            },
        });
        let a1 = await respuesta1.json();
        if(a1.status){
            let respuesta = await fetch(`http://localhost:5555/empresas/${empresaBorrar}`,
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
        }else{
            modalWarning.show();
        }
    }catch{
        modalConfirmarBorrar.hide();
        modalWarning.show();
    }
}

//Para las imagenes
inputFile.addEventListener('change',  e => {
    if(e.target.files[0]){
        const reader = new FileReader();
        reader.onload = e =>{
            document.getElementById('imagen-empresa').setAttribute('src',e.target.result);
            imgActual=e.target.result;
            //console.log(e.target.result);
        }
        reader.readAsDataURL(e.target.files[0]);
    }else{
        document.getElementById('imagen-empresa').setAttribute('src',`https://tiny-img.com/images/icons/upload-icon.png`);
    }
});

//Funciones que inician antes de la interaccion con el usuario
obtenerEmpresas();