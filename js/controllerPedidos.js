
//Renderizar
const visualizarPedidos= ()=>{
    document.getElementById('pedidos-agregar-repartidor').style.display="block";
    document.getElementById('pedidos-tomados-repartidor').style.display="none";
    document.getElementById('pedidos-entregados-repartidor').style.display="none";  

    document.getElementById('btn-pedidos').classList.add('active');
    document.getElementById('btn-tomados').classList.remove('active');
    document.getElementById('btn-entregados').classList.remove('active');  

}

const visualizarTomados= ()=>{
    document.getElementById('pedidos-agregar-repartidor').style.display="none";
    document.getElementById('pedidos-tomados-repartidor').style.display="block";
    document.getElementById('pedidos-entregados-repartidor').style.display="none";

    document.getElementById('btn-pedidos').classList.remove('active');
    document.getElementById('btn-tomados').classList.add('active');
    document.getElementById('btn-entregados').classList.remove('active');    
}

const visualizarEntregados= ()=>{
    document.getElementById('pedidos-agregar-repartidor').style.display="none";
    document.getElementById('pedidos-tomados-repartidor').style.display="none";
    document.getElementById('pedidos-entregados-repartidor').style.display="block";

    document.getElementById('btn-pedidos').classList.remove('active');
    document.getElementById('btn-tomados').classList.remove('active');
    document.getElementById('btn-entregados').classList.add('active');    

}