class Nodo{
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;

    }
}

class stack {
    constructor() {
        this.top = null;
        this.bottom = null;
    }

    push =(dato)  => {
        let nuevo = new Nodo(dato)
        if(this.top == null){
            this.top = this.bottom = nuevo;
            
        } else {
            this.top.siguiente = nuevo;
            nuevo.anterior = this.top
            this.top = nuevo
        }
    }

    pop = () => {
        if(this.top.anterior != null){
            let aux = this.top
            let actual = this.top.anterior
            actual.siguiente = null
            this.top = actual
            return aux.dato
        }else if (this.bottom == this.top){
            let aux = this.top
            this.top = null
            return aux.dato
        }
        else{
            console.log("No exiten elementos en la pila")
            return null
        }

    }
    peek = () => {
        return this.top;
    }

    invertirPila = () => {
        let temp = this.top; 
        let auxStack = new stack()
        while(temp != this.bottom){
            auxStack.push(temp.dato)
            temp = temp.anterior

        }
        
        
        auxStack.push(this.bottom.dato)
        return auxStack;
    }

    dot = () => {
        let temp = this.bottom; 
        var nodes = "";
        var conexiones ="";
        var Nnode=0;
        let codigoDot= "digraph G {\n"+
        
        "node [shape=box, rankdir=UD]\n"+
        "nodesep=0;\n"+
        "node [fillcolor =\"#EEEEEEE\"]\n"+
        "node [color = \"#4EA06D\"]\n"+
        "edge [color = \"#00FF00\"];\n";

        if( temp != null ){
            
            while(temp != null){
                nodes += "N" + Nnode + " [shape=box,rankdir=LR, style =\"filled\";label=\"" + temp.dato+ "\";pos=\"0,-" + "\"];\n";
                if(Nnode != 8){
                    var auxnum = Nnode + 1;
                    conexiones += "N" + Nnode + "->" + "N" + auxnum + "\n";
                
                }
                temp = temp.siguiente;
                Nnode++;
            }
        }
      
        codigoDot += nodes+"\n"
       
        codigoDot += "{\n"+conexiones+"\n}\n}"
        
        "}";
        d3.select('#lienzo').graphviz()
            .width(1200)
            .height(1200)
            .renderDot(codigoDot)
        
    }
    dot2 = () => {
        let temp = this.bottom; 
        var nodes = "";
        var conexiones ="";
        var Nnode=0;
        let codigoDot= "digraph G {\n"+
        
        "node [shape=box, rankdir=UD]\n"+
        "nodesep=0;\n"+
        "node [fillcolor =\"#EEEEEEE\"]\n"+
        "node [color = \"#4EA06D\"]\n"+
        "edge [color = \"#00FF00\"];\n";

        if( temp != null ){
            
            while(temp != null){
                nodes += "N" + Nnode + " [shape=box,rankdir=LR, style =\"filled\";label=\"" + temp.dato+ "\";pos=\"0,-" + "\"];\n";
                if(Nnode != 8){
                    var auxnum = Nnode + 1;
                    conexiones += "N" + Nnode + "->" + "N" + auxnum + "\n";
                
                }
                temp = temp.siguiente;
                Nnode++;
            }
        }
      
        codigoDot += nodes+"\n"
       
        codigoDot += "{\n"+conexiones+"\n}\n}"
        
        "}";
        d3.select('#lienzo2').graphviz()
            .width(1200)
            .height(1200)
            .renderDot(codigoDot)
       
    }

    print = () => {
        let aux = this.bottom;
        while(aux!= null){
            console.log(aux.dato)
            aux = aux.siguiente;
        }
    }
    


}

let pila = new stack();
pila.push(2);
pila.push(0);
pila.push(1);
pila.push(8);
pila.push(0);
pila.push(0);
pila.push(9);
pila.push(9);
pila.push(2);
pila.print();
pila.dot();
pila.invertirPila().dot2();

export default stack;