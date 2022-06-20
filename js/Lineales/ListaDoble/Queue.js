class nodoCola{
    constructor(nombreLibro,NombreCliente){
        this.nombreLibro = nombreLibro;
        this.NombreCliente = NombreCliente;
        this.siguiente = null;
    }
}

class Queue{
    constructor(){
        this.tail = null;
        this.head = null
    }

    enqueue = (nombreLibro,NombreCliente) => {
        let nuevo = new nodoCola(nombreLibro,NombreCliente);
        if(this.head == null){
            this.head = nuevo;
            this.tail = nuevo
        }else{
            this.tail.siguiente = nuevo;
            this.tail = nuevo;
        }
    }

    dequeue(){
        if(this.head == null){
            console.log("La cola esta vacia");
            return false
        }else{
            let aux = this.head
            this.head = this.head.siguiente;
            return aux
        }
    }

    print = () => {
        let aux = this.head;
        while(aux!= null){
            console.log(aux.nombreLibro + " " + aux.NombreCliente);
            aux = aux.siguiente;
        }
    }

    graficarCola = () => {
        var codigodot = "digraph G{rankdir=RL;\nlabel=\" Clientes \";\nnode [shape=box];\n nodesep=1;\n" + "node [shape=record fontname=Arial]\n;";
        var temp = this.head
        var nodes = "";
        var conexiones = "";
        var Nnode = 0;
        while(temp != null){
            nodes += "N" + Nnode + " [label=\"" + "\\n" + temp.nombreLibro + "\\n" + temp.NombreCliente + "\\n" + "\"];\n";
            if (temp.siguiente != null) {
                var auxnum = Nnode + 1;
                conexiones += "N" + auxnum + "->" + "N" + Nnode + ";\n";
            }
            temp = temp.siguiente;
            Nnode++;
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodes + "\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "\n" + conexiones + "\n}\n}"
        d3.select('#lienzoLibroVenta').graphviz()
        .width(500)
        .height(500)
        .renderDot(codigodot)
        return console.log(codigodot);
    }
}

let coladeEspera = new Queue();
