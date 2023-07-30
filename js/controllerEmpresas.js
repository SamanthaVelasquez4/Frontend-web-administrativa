var empresas= [
    {
        id: 1,
        nombre: "Adidas",
        tipo:["Ropa" , "Calzado"],
        horaApertura: "07:00",
        horaCierre: "18:00",
        numTelefono: "2578-2152",
        direccion: "Mall Multiplaza, segundo piso a la par de Helados Sarita",
        img: "../img/adidas.jpg"
    },
    {
        id: 2,
        nombre: "Jordan",
        tipo:["Calzado"],
        horaApertura: "09:00",
        horaCierre: "20:00",
        numTelefono: "2578-2152",
        direccion: "Mall Multiplaza",
        img: "../img/jordan.jpg"
    },
    {
        id: 3,
        nombre: "Nike",
        tipo:["Ropa", "Calzado"],
        horaApertura: "08:00",
        horaCierre: "19:00",
        numTelefono: "2578-2152",
        direccion: "Mall Multiplaza",
        img: "../img/nike.jpg"
    },
]

//Variables
var idAutogenerado=4;
const modalConfirmarAgregar= new bootstrap.Modal(document.getElementById('modalConfirmarAgregar'));
var empresaModificar={};
const modalConfirmarModificar= new bootstrap.Modal(document.getElementById('modalConfirmarModificar'));
var empresaBorrar={};
const modalConfirmarBorrar= new bootstrap.Modal(document.getElementById('modalConfirmarBorrar'));
const inputFile= document.getElementById('input-file');
var imgActual;

//Renderizar lista
const renderizarLista = ()=>{
    document.getElementById('contenedor-lista-empresas').innerHTML="";
    empresas.forEach(empresa => {
        let tipoEmpresa="- ";
        empresa.tipo.forEach(tipo => {
            tipoEmpresa+=tipo+" - ";
        })
        document.getElementById('contenedor-lista-empresas').innerHTML+=
        `<div class="objeto row">
            <div class="col-4 centrar-div">
                <img src="${empresa.img}" alt="Logo Empresa" srcset=""> 
            </div>
            <div class="col ms-2">
                <p class="fw-bold id-style text-center">#${empresa.id}</p>
                <div class="row">
                    <div class="col-6">
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
                    <i class="fa-solid fa-pen-to-square p-1 me-2" style="color: #2c2c2c;" onclick="modificarEmpresa(${empresa.id})"></i>
                    <i class="fa-solid fa-trash p-1 me-2" style="color: red;" onclick="borrarEmpresa(${empresa.id})" data-bs-toggle="modal" data-bs-target="#modalConfirmarBorrar"></i>
                </div>
            </div>
        </div>`;
    })
}

//Agregar empresa
const agregarEmpresa = ()=>{
    //Borrar inputs
    borrarValoresInputs();
    document.getElementById('id-empresa').innerHTML=`#${idAutogenerado}`;

    //Mostrar la pagina para agregar empresa y ocultar la lista
    document.getElementById('pagina-lista').style.display="none";
    document.getElementById('pagina-agregar-modificar').style.display="block";

    //Mostrar el btn para agregar empresa
    document.getElementById('btn-agregar-empresa').style.display="block";
    document.getElementById('btn-modificar-empresa').style.display="none";

    //Mostrar el titulo
    document.getElementById('agregar-empresa-titulo').style.display="block";
    document.getElementById('modificar-empresa-titulo').style.display="none";

    document.getElementById('imagen-empresa').setAttribute('src',`https://img.freepik.com/free-vector/video-upload-concept-illustration_114360-4702.jpg?w=740&t=st=1690681573~exp=1690682173~hmac=6087d39cdf91c304f0b3839d872f0f4df2cdb08054fbebd50e8a06bf50736a76`);


}

const confirmarAgregarEmpresa= ()=>{
    let empresa= obtenerValoresInput();
    empresa.id=idAutogenerado;
    empresas.push(empresa);
    console.log(empresa);
    modalConfirmarAgregar.hide();
    volverAtras();
    idAutogenerado++;
}

//Modificar empresa
const modificarEmpresa = (id)=>{
    document.getElementById('pagina-lista').style.display="none";
    document.getElementById('pagina-agregar-modificar').style.display="block";

    document.getElementById('btn-agregar-empresa').style.display="none";
    document.getElementById('btn-modificar-empresa').style.display="block";

    document.getElementById('agregar-empresa-titulo').style.display="none";
    document.getElementById('modificar-empresa-titulo').style.display="block";

    empresaModificar=empresas.find(element => element.id===id);

    //poner valores en los inputs
    document.getElementById('imagen-empresa').setAttribute('src',`${empresaModificar.img}`);
    borrarValoresInputs();
    imgActual=empresaModificar.img;
    document.getElementById('nombre-empresa').value=empresaModificar.nombre;
    document.getElementById('id-empresa').innerHTML=`#${empresaModificar.id}`;
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
}

const confirmarmodificarEmpresa = ()=>{
    let empresa= obtenerValoresInput();
    empresa.id=empresaModificar.id;
    empresa.img=imgActual;
    empresas[empresas.indexOf(empresaModificar)]=empresa;
    modalConfirmarModificar.hide();
    volverAtras();
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
        id: 0,
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

const volverAtras = ()=>{
    document.getElementById('pagina-lista').style.display="block";
    document.getElementById('pagina-agregar-modificar').style.display="none";
    renderizarLista();
}

//Eliminar Empresa
const borrarEmpresa = (id)=>{
    empresaBorrar=empresas.find(element=>element.id===id);
}

const confirmarBorrarEmpresa = ()=>{
    empresas.splice(empresas.indexOf(empresaBorrar),1);
    modalConfirmarBorrar.hide();
    volverAtras();
}

//
inputFile.onchange = e=>{
    if(e.target.files[0]){
        const reader = new FileReader();
        reader.onload = e =>{
            document.getElementById('imagen-empresa').setAttribute('src',e.target.result);
            imgActual=e.target.result;
            console.log(imgActual);
        }
        reader.readAsDataURL(e.target.files[0]);
    }else{
        document.getElementById('imagen-empresa').setAttribute('src',`https://img.freepik.com/free-vector/video-upload-concept-illustration_114360-4702.jpg?w=740&t=st=1690681573~exp=1690682173~hmac=6087d39cdf91c304f0b3839d872f0f4df2cdb08054fbebd50e8a06bf50736a76`);
    }

    console.log(inputFile.value);
}

//Funciones que inician antes de la interaccion con el usuario
renderizarLista();