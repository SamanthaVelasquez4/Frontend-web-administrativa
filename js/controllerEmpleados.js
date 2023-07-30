

//Variables
var idAutogenerado=4;
const modalConfirmarAgregar= new bootstrap.Modal(document.getElementById('modalConfirmarAgregar'));
const modalConfirmarModificar= new bootstrap.Modal(document.getElementById('modalConfirmarModificar'));
const modalConfirmarBorrar= new bootstrap.Modal(document.getElementById('modalConfirmarBorrar'));
const modalCamposVacios= new bootstrap.Modal(document.getElementById('modalCamposVacios'));

//Agregar empleado
const agregarEmpleado = ()=>{
    //Borrar inputs
    //borrarValoresInputs();
    document.getElementById('id-empleado').innerHTML=`#${idAutogenerado}`;

    //Mostrar la pagina para agregar empresa y ocultar la lista
    document.getElementById('pagina-lista').style.display="none";
    document.getElementById('pagina-agregar-modificar').style.display="block";

    //Mostrar el btn para agregar empresa
    document.getElementById('btn-agregar-empleado').style.display="block";
    document.getElementById('btn-modificar-empleado').style.display="none";

    //Mostrar el titulo
    document.getElementById('agregar-empleado-titulo').style.display="block";
    document.getElementById('modificar-empleado-titulo').style.display="none";

    document.getElementById('imagen-empleado').setAttribute('src',`https://tiny-img.com/images/icons/upload-icon.png`);
}

//Modificar empresa
const modificarEmpresa = (id)=>{
    document.getElementById('pagina-lista').style.display="none";
    document.getElementById('pagina-agregar-modificar').style.display="block";

    document.getElementById('btn-agregar-empleado').style.display="none";
    document.getElementById('btn-modificar-empleado').style.display="block";

    document.getElementById('agregar-empresa-empleado').style.display="none";
    document.getElementById('modificar-empresa-empleado').style.display="block";

    document.getElementById('id-empleado').innerHTML=`#${id}`;
}

