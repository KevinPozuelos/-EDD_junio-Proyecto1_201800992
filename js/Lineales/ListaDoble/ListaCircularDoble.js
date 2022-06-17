class NodoDoble {
    constructor(dpi, nombreCompleto, userName, email, rol, pw, telefono) {
        this.dpi = dpi;
        this.userName = userName;
        this.nombreCompleto = nombreCompleto;
        this.email = email;
        this.rol = rol;
        this.pw = pw;
        this.telefono = telefono;        
        this.siguiente = null;
        this.anterior = null;

    }
}

class ListaCircularDoble{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

    addCliente = (dpi, nombreCompleto, userName, email, rol, pw, telefono) => {
        let nuevo = new NodoDoble(dpi, nombreCompleto, userName, email, rol, pw, telefono);

        if ( this.primero == null ){
            this.primero = nuevo;
            this.primero.siguiente = nuevo;
            this.primero.anterior = nuevo;
            this.ultimo = nuevo;
        }else{
            this.ultimo.siguiente = nuevo;
            nuevo.siguiente = this.primero;
            nuevo.anterior = this.ultimo;
            this.ultimo = nuevo;
            this.primero.anterior = this.ultimo;   
        }
    }

    mostrarCliente = () => {
        let temp = this.primero;

        if( temp != null ){
            console.log("Lista del primero al ultimo")
            do{
                console.log(temp.userName+"->");
                temp = temp.siguiente;

            }while(temp != this.primero);
                console.log(temp.dpi+"->");
                console.log("del ultimo al primero");
                let temp1 = this.ultimo;
                do{ 
                       console.log(temp1.dpi+ "->")
                       temp1 = temp1.anterior; 
                }while(temp1 != this.ultimo);
                console.log(temp1.dpi+"->");
        }
    }

    dot=()=>{
        let temp = this.primero; 
        let codigoDot= "digraph G {\n"+
        "label=\"Clientes\"\n"+
        "node [shape=box]\n"+
        "nodesep=1;\n"+
        "node [fillcolor =\"#EEEEEEE\"]\n"+
        "node [color = \"#4EA06D\"]\n"+
        "edge [color = \"#00FF00\"];\n";

        if( temp != null ){
            do{
                codigoDot+= temp.userName+"->";
                temp = temp.siguiente; 
            } while(temp != this.primero);
        }
        this.ultimo = this.primero;
        do{
            codigoDot+= temp.userName + "->";
            temp = temp.anterior;
        }while(temp != this.ultimo);
        codigoDot+= temp.userName+"\n";

        codigoDot+= "rankdir=LR;\n"+
        "}";
        d3.select('#lienzo').graphviz()
            .width(1200)
            .height(1200)
            .renderDot(codigoDot)

        return console.log(codigoDot);
    }

    dot2=()=>{
        let temp = this.primero; 
        let contador1= 0;
        
        let codigoDot= "digraph G {\n"+
        "label=\"Clientes\"\n"+
        "node [shape=box]\n"+
        "nodesep=1;\n"+
        "node [fillcolor =\"#EEEEEEE\"]\n"+
        "node [color = \"#4EA06D\"]\n"+
        "edge [color = \"#00FF00\"];\n";

        while(temp != null){
            codigoDot+= temp.userName + "_nodo_" + contador1+" [label=\""+temp.dpi+ "\n " +temp.userName+"\n " +temp.nombreCompleto+"\n " +temp.email+"\n " +temp.rol+"\n "+temp.telefono+"\"]\n"
            contador1= contador1+1;
            temp = temp.siguiente;
            if (temp == this.primero){
                break;
            }
                
        }
        contador1=0;
        let contador2= contador1+1;
        temp = this.primero;
        while(temp != null){
            if (temp.siguiente != null){
                codigoDot+= temp.userName + "_nodo_" + contador1+ "->" + temp.siguiente.userName +"_nodo_"+contador2+"\n"
                contador1= contador1+1;
                contador2= contador2+1;
                temp = temp.siguiente;
                if (temp == this.ultimo){
                    break;
                }
            }
            
        }
        let contadorUltimo= contador1;
        contador2 = contador1-1;
        temp = this.ultimo;
        while(temp != null){
            if (temp.anterior != null){
                codigoDot+= temp.userName + "_nodo_" + contador1+"->" + temp.anterior.userName +"_nodo_"+contador2+"\n"
                contador1= contador1-1;
                contador2= contador2-1;
                temp = temp.anterior;
                if (temp == this.primero){
                    break;
                }
            }
        }

        temp = this.primero
        let temp2 = this.ultimo;
        codigoDot+= temp.userName + "_nodo_" + "0"+"->" + temp2.userName +"_nodo_"+contadorUltimo+"\n"
        codigoDot+= temp2.userName + "_nodo_" + contadorUltimo+"->" + temp.userName +"_nodo_"+ "0"+"\n"

        codigoDot+= "rankdir=LR;\n"+
        "}";
        d3.select('#lienzo').graphviz()
            .width(1200)
            .height(1200)
            .renderDot(codigoDot)

        return console.log(codigoDot);
    }

    buscarCliente = (userName, pw) => {
        let aux = this.primero;
        while(aux != null){
            if(aux.userName == userName && aux.pw == pw){
                console.log("Usuario existe");
                return aux.rol;
            }
            aux = aux.siguiente;
            if(aux == this.primero){
                break;
            }
        }

    }
}

let Cliente = new ListaCircularDoble();

