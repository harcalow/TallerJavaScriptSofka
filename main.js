var todos=false;      
var menu=true;
while(menu){
    var mensaje=
    `Inventario Base ingreresar los items separados por , ejemplo 1,3,4 \n
    1) 5 Electrodomésticos generales de consumo B nacionales\n 
    2) 10 Neveras de consumo A nacionales\n
    3) 7 Tvs de consumo C internacionales\n
    4) 13 Tvs de consumo B internacionales\n
    5) 3 Tvs de consumo A nacionales\n
    6) 8 Electrodomesticos generales de consumo A internacionales\n
    7) 12 Neveras de consumo C internacionales\n
    8) Todos\n
    `;
    var numeroDeUsuario= prompt(mensaje);
    // verificacion 
    var itemsInventario = numeroDeUsuario.split(",")
    var itemsNumericos =itemsInventario.map(function(elemento) {
        return parseInt(elemento);
    })
    
    for(i=0;i<itemsNumericos.length;i++){
        if ((itemsNumericos[i]>0)&&(itemsNumericos[i]<9)){
            menu=false;
        }else{
            alert("Error al ingresar valores intente nuevamente");
        }
        if (itemsNumericos[i]==8){
            todos=true;
        }
    }
}
if (todos==true){
    itemsNumericos=[1,2,3,4,5,6,7];
}
//creacion de base de datos se hara en arrays
var electrodomestico=[];
itemsNumericos.forEach(element => {
    
    if (element==1){
        for(i=0;i<5;i++){
            electrodomestico.push(new Electrodomestico("B","Nacional"));    
        }
    }if (element==2){
        for(i=0;i<10;i++){
            electrodomestico.push(new Nevera("A","Nacional",120));    
        }
    }if (element==3){
        for(i=0;i<7;i++){
            electrodomestico.push(new Televisor("C","Internacional",40,"no"));    
        }
    }if (element==4){
        for(i=0;i<13;i++){
            electrodomestico.push(new Televisor("B","Internacional",40,"no"));    
        }
    }if (element==5){
        for(i=0;i<3;i++){
            electrodomestico.push(new Televisor("A","Nacional",40,"no"));    
        }
    }if (element==6){
        for(i=0;i<8;i++){
            electrodomestico.push(new Electrodomestico("A","Internacional"));    
        }    
    }if (element==7){
        for(i=0;i<12;i++){
            electrodomestico.push(new Nevera("C","Internacional",120));    
        }
    }
});

// Creacion de facturas
menu=true;
while(menu){
    var mensaje=
    `Facturación escoge el ítem a facturar \n
    1) 1 TV de consumo C internacionales\n 
    2) 2 Neveras de consumo C internacionales\n
    3) 5 Electrodomesticos generales de consumo B nacionales\n
    `;
    var numeroDeUsuario= prompt(mensaje);
    //verificacion
    if(numeroDeUsuario=="1"){
        menu=false;
    }else if(numeroDeUsuario=="2"){
        menu=false;
    }else if(numeroDeUsuario=="3"){
        menu=false;
    }else{
        alert("Error al ingresar los valores intente nuevamente");
    }
}


//factura 1

if (numeroDeUsuario=="1"){
    var valorUnitario=0;
    var total=0;
    var posicionTv=[];
    for(i=0;i<electrodomestico.length;i++){
    a = electrodomestico[i] instanceof Televisor;
        if (a==true){
            if(electrodomestico[i].consumoActual()=="B"){
                if(electrodomestico[i].procedenciaActual()=="Internacional"){
                    posicionTv.push(i);
                    valorUnitario=electrodomestico[i].precioActual();
                }
            }
        }
    }
    if (posicionTv.length>=1){
        total+=valorUnitario;
        //borrar
        electrodomestico.splice(posicionTv[0],1); 
    }else{
        alert("No hay inventario");
    }
    
}
 
//factura 2
if (numeroDeUsuario=="2"){
    var valorUnitario=0;
    var total=0;
    var posicionNevera=[];
    for(i=0;i<electrodomestico.length;i++){
        a = electrodomestico[i] instanceof Nevera;
        if (a==true){
            if(electrodomestico[i].consumoActual()=="C"){
                if(electrodomestico[i].procedenciaActual()=="Internacional"){
                    valorUnitario=electrodomestico[i].precioActual();
                    posicionNevera.push(i);
                }
            }
        }
    }
    if (posicionNevera.length>=2){
        for (i=0;i<2;i++){
            total+=valorUnitario;
        //borrar
        electrodomestico.splice(posicionNevera[i],1);
        }
    }else{
        alert("No hay inventario");
    }
}

//factura 3

if (numeroDeUsuario=="3"){
    var valorUnitario=0;
    var total=0;
    var posicionElectrodomestico=[];
    for(i=0;i<electrodomestico.length;i++){
        a = electrodomestico[i] instanceof Electrodomestico;
        if (a==true){
            if(electrodomestico[i].consumoActual()=="B"){
                if(electrodomestico[i].procedenciaActual()=="Nacional"){
                    valorUnitario=electrodomestico[i].precioActual();
                    posicionElectrodomestico.push(i);
                }
            }
        }
    }

    if (posicionElectrodomestico.length>=5){
        for (i=0;i<5;i++){
            total+=valorUnitario;
        //borrar
        electrodomestico.splice(posicionElectrodomestico[i],1);
        }
    }else{
        alert("No hay inventario");
    }
}
var mensaje=
    `Factura N°
    Valor unitario=${valorUnitario}
    total=${total}
    precione 1 para ver inventario 2 para salir
   `;
   var numeroDeUsuario= prompt(mensaje);
    //inventario 
   if (numeroDeUsuario=="1"){
        var mensaje="";
        for(i=0;i<electrodomestico.length;i++){
            if (electrodomestico[i] instanceof Televisor==true){
                mensaje+=(i+1)+" Electrodomestico Televisor consumo:"+electrodomestico[i].consumoActual()+" y procedencia "+electrodomestico[i].procedenciaActual()+"<br>";
            }else if (electrodomestico[i] instanceof Nevera==true){
                mensaje+=(i+1)+" Electrodomestico Nevera consumo:"+electrodomestico[i].consumoActual()+" y procedencia "+electrodomestico[i].procedenciaActual()+"<br>";
            }else{

                mensaje+=(i+1)+" Electrodomestico general consumo:"+electrodomestico[i].consumoActual()+" y procedencia "+electrodomestico[i].procedenciaActual()+"<br>"; 
            }
        }
    document.querySelector("body").innerHTML=mensaje;
   }