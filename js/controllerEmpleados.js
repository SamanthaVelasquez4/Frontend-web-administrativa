let empleados=[];
    
//Variables
const modalConfirmarAgregar= new bootstrap.Modal(document.getElementById('modalConfirmarAgregar'));
const modalConfirmarModificar= new bootstrap.Modal(document.getElementById('modalConfirmarModificar'));
const modalConfirmarBorrar= new bootstrap.Modal(document.getElementById('modalConfirmarBorrar'));
const modalCamposVacios= new bootstrap.Modal(document.getElementById('modalCamposVacios'));
const modalWarning= new bootstrap.Modal(document.getElementById('modalWarning'));
let empleadoBorrar;
let empleadoModificar={};
let imgActual="";

//Obtener y renderizar usuarios
const obtenerMotoristas = async() =>{
    try{let respuesta = await fetch('http://localhost:5555/motoristas',
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json", //MIME type 
        },
    });

    let a = await respuesta.json();
        if(a.status){
            empleados=a.respuesta;
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
    document.getElementById('contenedor-lista-empleados').innerHTML=``;
    empleados.forEach(empleado =>{
        let calificacion="";
        for(let i=0; i<empleado.calificacion;i++){
            calificacion+='<i class="fa-solid fa-star" style="color: #fd8d07ff;"></i>';
        }
        for(let i=0; i<5-empleado.calificacion;i++){
            calificacion+='<i class="fa-solid fa-star"></i>';
        }
        document.getElementById('contenedor-lista-empleados').innerHTML+=
        `<div class="objeto row">
            <div class="col-12 col-xl-4 col-lg-4 col-md-5 col-sm-11 centrar-div">
                <img src="${empleado.img}" alt="Imagen Usuario" srcset=""> 
                <div class="fs-5">
                   ${calificacion}
                </div>
            </div>
            <div class="col ms-2">
                <p class="fw-bold id-style text-center">${empleado._id}</p>
                <div class="row">
                    <div class="col-6">
                        <p>Nombre:</p>
                        <p style="color: #fd8d07ff;" class="fw-medium">${empleado.primerNombre} ${empleado.primerApellido}</p>
                        <p>Edad:</p>
                        <p style="color: #fd8d07ff;" class="fw-medium">${empleado.edad} años</p>
                        <p>Genero:</p>
                        <p style="color: #fd8d07ff;" class="fw-medium">${empleado.genero}</p>
                    </div>
                    <div class="col">
                        <p>Tipo de vehículo:</p>
                        <p style="color: #fd8d07ff;" class="fw-medium">${empleado.tipoVehiculo}</p>
                        <p>Placa:</p>
                        <p style="color: #fd8d07ff;" class="fw-medium">${empleado.placa}</p>
                        <p>Número teléfono:</p>
                        <p style="color: #fd8d07ff;" class="fw-medium">${empleado.numTelefono}</p>
                    </div>
                </div>
                <div class="text-end fs-2 mt-3">
                    <i class="fa-solid fa-pen-to-square p-1 me-2" style="color: #2c2c2c;" onclick="modificarEmpleado('${empleado._id}')"></i>
                    <i class="fa-solid fa-trash p-1 me-2" style="color: red;" onclick="borrarEmpleado('${empleado._id}')" data-bs-toggle="modal" data-bs-target="#modalConfirmarBorrar"></i>
                </div>
            </div>
        </div>`;
    })
}

const volverAtras = ()=>{
    document.getElementById('pagina-lista').style.display="block";
    document.getElementById('pagina-agregar-modificar').style.display="none";
    obtenerMotoristas();
}

//Agregar empleado
const agregarEmpleado = ()=>{
    //Borrar inputs
    borrarValoresInputs();
    document.getElementById('id-empleado').innerHTML=``;

    //Mostrar la pagina para agregar empresa y ocultar la lista
    document.getElementById('pagina-lista').style.display="none";
    document.getElementById('pagina-agregar-modificar').style.display="block";

    //Mostrar el btn para agregar empresa
    document.getElementById('btn-agregar-empleado').style.display="block";
    document.getElementById('btn-modificar-empleado').style.display="none";

    //Mostrar el titulo
    document.getElementById('agregar-empleado-titulo').style.display="block";
    document.getElementById('modificar-empleado-titulo').style.display="none";

    document.getElementById('imagen-empleado').setAttribute('src',`https://cdn-icons-png.flaticon.com/512/848/848006.png?w=740&t=st=1690708873~exp=1690709473~hmac=4578ff43a45d0339bd35be6cbf2df7eec47ee60706178fd26de21ba79f6adcec`);
}

const confirmarAgregarEmpleado= async()=>{

    try{
        if(validarCamposLlenos()){
            let motorista= obtenerValoresInput();
            let respuesta = await fetch(`http://localhost:5555/motoristas`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json", //MIME type 
                },
                body: JSON.stringify(motorista) 
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

//Modificar empleado
const modificarEmpleado = (id)=>{
    document.getElementById('pagina-lista').style.display="none";
    document.getElementById('pagina-agregar-modificar').style.display="block";

    document.getElementById('btn-agregar-empleado').style.display="none";
    document.getElementById('btn-modificar-empleado').style.display="block";

    document.getElementById('agregar-empleado-titulo').style.display="none";
    document.getElementById('modificar-empleado-titulo').style.display="block";

    document.getElementById('id-empleado').innerHTML=`${id}`;

    empleadoModificar=empleados.find(element=>element._id===id);

    //Poner valores de los inputs
    document.getElementById('imagen-empleado').setAttribute('src',`${empleadoModificar.img}`);
    document.getElementById('primer-nombre-empleado').value=empleadoModificar.primerNombre;
    document.getElementById('primer-apellido-empleado').value=empleadoModificar.primerApellido;
    document.getElementById('segundo-nombre-empleado').value=empleadoModificar.segundoNombre;
    document.getElementById('segundo-apellido-empleado').value=empleadoModificar.segundoApellido;
    document.getElementById('usuario-input').value=empleadoModificar.usuario;
    document.getElementById('contrasena-input').value=empleadoModificar.contrasena;
    document.getElementById('verificar-contrasena-input').value=empleadoModificar.contrasena;
    document.getElementById('num-telefono').value=empleadoModificar.numTelefono;
    document.getElementById('edad-input').value=empleadoModificar.edad;
    document.getElementById('placa-input').value=empleadoModificar.placa;
    document.getElementById('verificacion-contra').style.backgroundColor="green";
    if(empleadoModificar.genero=="M"){
        document.getElementById('radio-masculino').checked=true;
    }else{
        document.getElementById('radio-femenino').checked=true;
    }
    if(empleadoModificar.tipoVehiculo=="Moto"){
        document.getElementById('radio-moto').checked=true;
    }else{
        document.getElementById('radio-carro').checked=true;
    }
    imgActual=empleadoModificar.img;
}

const confirmarmodificarEmpleado = async()=>{
    if(validarCamposLlenos()){
        let empresa= obtenerValoresInput();
        empresa.img=imgActual;
        try{
            let respuesta = await fetch(`http://localhost:5555/motoristas/${empleadoModificar._id}`,
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

//Borrar empleado
const borrarEmpleado = (id)=>{
    empleadoBorrar=id;
}

const confirmarBorrarEmpleado = async()=>{
    try{
        let respuesta = await fetch(`http://localhost:5555/motoristas/${empleadoBorrar}`,
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

//Actualizar imagen con cambio de genero
const cambioGenero = ()=>{
    if(document.getElementById('radio-masculino').checked){
        imgActual="../img/usuario.png";
        document.getElementById('imagen-empleado').setAttribute('src',`${imgActual}`);
    }else if(document.getElementById('radio-femenino').checked){
        imgActual="../img/usuario2.png";
        document.getElementById('imagen-empleado').setAttribute('src',`${imgActual}`);
    }else{
        imgActual="";
    }
}

const generarUsuario = ()=>{
    document.getElementById('usuario-input').value=`${document.getElementById('primer-nombre-empleado').value.toLowerCase()}${document.getElementById('primer-apellido-empleado').value.toLowerCase()}@ssport.hn`;
}

//Funciones para los inputs
const borrarValoresInputs = () =>{
    document.getElementById('primer-nombre-empleado').value="";
    document.getElementById('primer-apellido-empleado').value="";
    document.getElementById('segundo-nombre-empleado').value="";
    document.getElementById('segundo-apellido-empleado').value="";
    document.getElementById('usuario-input').value="";
    document.getElementById('contrasena-input').value="";
    document.getElementById('verificar-contrasena-input').value="";
    document.getElementById('num-telefono').value="";
    document.getElementById('edad-input').value="";
    document.getElementById('radio-masculino').checked=false;
    document.getElementById('radio-femenino').checked=false;
    document.getElementById('radio-moto').checked=true;
    document.getElementById('placa-input').value="";
    document.getElementById('verificacion-contra').style.backgroundColor="red";
}

const obtenerValoresInput = () =>{
    let genero="";
    if(document.getElementById('radio-masculino').checked){
        genero="M";
    }else{
        genero="F";
    }

    let tipoVehiculo="";
    if(document.getElementById('radio-moto').checked){
        tipoVehiculo="Moto";
    }else{
        tipoVehiculo="Carro";
    }
    
    let empleado={
        primerNombre: document.getElementById('primer-nombre-empleado').value.charAt(0).toUpperCase() + document.getElementById('primer-nombre-empleado').value.slice(1) ,
        segundoNombre:document.getElementById('segundo-nombre-empleado').value.charAt(0).toUpperCase() + document.getElementById('segundo-nombre-empleado').value.slice(1) ,
        primerApellido:document.getElementById('primer-apellido-empleado').value.charAt(0).toUpperCase()+document.getElementById('primer-apellido-empleado').value.slice(1),
        segundoApellido:document.getElementById('segundo-apellido-empleado').value.charAt(0).toUpperCase()+document.getElementById('segundo-apellido-empleado').value.slice(1),
        usuario:document.getElementById('usuario-input').value,
        contrasena:document.getElementById('verificar-contrasena-input').value,
        numTelefono:document.getElementById('num-telefono').value,
        genero:genero,
        edad:document.getElementById('edad-input').value,
        tipoVehiculo:tipoVehiculo,
        placa:document.getElementById('placa-input').value.toUpperCase(),
        calificacion:5,
        img:imgActual
    }

    return empleado;
}

const validarCamposLlenos = ()=>{
    let validar=true;
    if(document.getElementById('primer-nombre-empleado').value==""){
        validar=false;
    }
    if(document.getElementById('primer-apellido-empleado').value==""){
        validar=false;
    }
    if(document.getElementById('segundo-nombre-empleado').value==""){
        validar=false;
    }
    if(document.getElementById('segundo-apellido-empleado').value==""){
        validar=false;
    }
    if(document.getElementById('verificar-contrasena-input').value==""){
        validar=false;
    }
    if(document.getElementById('num-telefono').value==""){
        validar=false;
    }
    if(document.getElementById('edad-input').value==""){
        validar=false;
    }
    if(document.getElementById('placa-input').value==""){
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

const placaMayuscula = ()=>{
    let placa= document.getElementById('placa-input');
    placa.value= placa.value.toUpperCase();
}
//verificar Contraseña
const verificarContrasena = ()=>{
    if(document.getElementById('verificar-contrasena-input').value==document.getElementById('contrasena-input').value && document.getElementById('contrasena-input').value!="" && document.getElementById('verificar-contrasena-input').value!=""){
        document.getElementById('verificacion-contra').style.backgroundColor="green";
        return true;
    }else{
        document.getElementById('verificacion-contra').style.backgroundColor="red";
        return false;
    }
}

//Funciones que inician antes de la interaccion con el usuario
obtenerMotoristas();