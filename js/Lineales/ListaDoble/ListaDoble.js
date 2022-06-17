
class Nodo {
    constructor(dpi, userName, nombreCompleto, cantidadLibros) {
        this.dpi = dpi;
        this.userName = userName;
        this.nombreCompleto = nombreCompleto;
        this.cantidadLibros = cantidadLibros;
       
        
        this.siguiente = null;
        this.anterior = null;
    }
    get_siguiente() {
        return this.siguiente;
    }
    set_siguiente(siguiente) {
        this.siguiente = siguiente;
    }

    get_anterior() {
        return this.anterior;
    }
    set_anterior(anterior) {
        this.anterior = anterior;
    }
}


class ListaDoble{
    contrusctor(){
        this.primero = null;
        this.ultimo = null;
    }

    

    insertar = (dpi, userName, nombreCompleto, cantidadLibros) => {

        let nodo_nuevo = new Nodo(dpi, userName, nombreCompleto, cantidadLibros);

        if (this.vacia() == true){
            this.set_primero(nodo_nuevo);
            this.set_ultimo(nodo_nuevo);
        }else{

            this.get_ultimo().set_siguiente(nodo_nuevo)
            nodo_nuevo.set_anterior(this.get_ultimo())
            this.set_ultimo(nodo_nuevo)

        }
    }
    
    vacia = () => {
        if (this.primero == null){ 
            return true;
        }else{
            return false;
        }
    }

    print = () => {
        
        let nodo_actual = this.get_primero();
        if (this.vacia() == false){
            do{
                console.log(nodo_actual.dpi + " " + nodo_actual.userName + " " + nodo_actual.nombreCompleto + " " + nodo_actual.rol + " " + nodo_actual.pw + " " + nodo_actual.telefono)
                nodo_actual = nodo_actual.get_siguiente()
            }while(nodo_actual != null);

           
            
        }else{
            console.log("Empty!"); 
            
        }
    }
    get_primero = () => { 
        return this.primero; 
    }
    set_primero = (primero) =>{ 
        this.primero = primero; 
    }
    get_ultimo = () => { 
        return this.ultimo; 
    }
    set_ultimo = (ultimo) => { 
        this.ultimo = ultimo; 
    }

    ususer(){
        console.log('holamundo')
    }

    graficarCliente = () => {
        var codigodot = "digraph G{\nlabel=\" Clientes \";\nnode [shape=box];\n nodesep=1;\n"+"node [shape=record fontname=Arial]\n;";
        var temp = this.get_primero();
        var nodes = "";
        var conexiones ="";
        var Nnode=0;

        while ( temp != null ){
            nodes += "N" + Nnode + " [label=\"" + "\\n" + temp.nombreCompleto + "\\n" + temp.cantidadLibros + "\\n"  + "\"];\n";
            if(temp.get_siguiente()!=null){
                var auxnum = Nnode + 1;
                conexiones += "N" + Nnode + "->" + "N" + auxnum + "[dir=both];\n";
            }
            temp = temp.siguiente;
            Nnode++;
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodes+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{rank=same;\n"+conexiones+"\n}\n}"
        

        d3.select('#lienzo').graphviz()
            .width(1200)
            .height(1200)
            .renderDot(codigodot)
    
    }



}



var listaClientes = new ListaDoble();


    



