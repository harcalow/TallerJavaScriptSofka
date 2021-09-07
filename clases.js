class Electrodomestico{
    constructor(consumo,procedencia){
        this.consumo=consumo;
        this.procedencia=procedencia;
        this.precio=0;
        this.precioInicial()
    }
   precioInicial(){
        if (this.consumo=="A"){
            this.precio=450000;
        }else if (this.consumo=="B"){
            this.precio=350000;
        }else {
            this.precio=250000;
        }

        if (this.procedencia=="Nacional"){
            this.precio+=250000;
        }else{
            this.precio+=350000;
        }
    }
    aumentoDePrecio(aumento){
        this.precio+=aumento;
    }
    precioActual(){
        return this.precio;
    }
    consumoActual(){
        return this.consumo;
    }
    procedenciaActual(){
        return this.procedencia;    
    }
}
class Nevera extends Electrodomestico{
    constructor(consumo,procedencia,size){
        super(consumo,procedencia);
        this.size=size;
        this.dimension();
    }
    
    dimension(){
        var porcentaje
        var precio= 0;
        if (this.size>120){
            porcentaje=(this.size-120)/10;
            porcentaje=Math.floor(porcentaje);
            porcentaje=porcentaje*0.05;
            precio = super.precioActual()*porcentaje;
            super.aumentoDePrecio(precio);
        }
    }
    
}
class Televisor extends Electrodomestico{
    constructor(consumo,procedencia,size,sintonizador){
        super(consumo,procedencia);
        this.dimension(size);
        this.calculoSintonizador(sintonizador);
    }
    dimension(size){
        if (size>40){
            var precio=super.precioActual();
            precio=precio*0.30;//aumento del 30 %
            super.aumentoDePrecio(precio);
        }
    }
    calculoSintonizador(sintonizador){
        if (sintonizador=="si"){
            super.aumentoDePrecio(250000);
        }
    }
}