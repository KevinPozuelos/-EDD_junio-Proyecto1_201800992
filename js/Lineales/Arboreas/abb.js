class NodoA{
    constructor(valor, biografia, correo, telefono, direccion) {
    this.valor = valor;
    this.biografia = biografia
    this.correo = correo
    this.telefono = telefono
    this.direccion = direccion
    this.izquierdo=null;
    this.derecho=null;
    }

    abbGraph =() => {
        let graph = "";
        if(this.izquierdo == null && this.derecho == null){
            graph+= this.valor +"->"+ this.valor +"\n";
        } else {
            
            if(this.izquierdo != null){
                graph = this.valor+"->"+this.izquierdo.abbGraph()+"\n";
            }
            if(this.derecho!= null){
                graph+= this.valor+"->"+this.derecho.abbGraph()+"\n";
            }
        }
        return graph;
    }
    
}

class ABB{
    constructor() {
        this.raiz = null;
    }

    insertar(valor, biografia, correo, telefono, direccion){
        this.raiz = this.add(valor, biografia, correo,telefono,direccion, this.raiz);
    }

    add(valor,biografia,correo,telefono,direccion, nodo){
        if (nodo == null){
            return new NodoA(valor, biografia,correo, telefono, direccion);
        }else{
            if ( valor > nodo.valor){
                nodo.derecho = this.add(valor,biografia,correo,telefono,direccion, nodo.derecho);
            }else {
                nodo.izquierdo = this.add(valor,biografia,correo,telefono,direccion, nodo.izquierdo);
            }
        }
        return nodo;
    }

    preOrden(){
        this.pre_orden(this.raiz);
    }

    pre_orden(nodo){
        if(nodo!=null){
            console.log("Valor:",nodo.valor);
            this.pre_orden(nodo.izquierdo);
            this.pre_orden(nodo.derecho);
        }
    }

    inOrden(){
        this.in_orden(this.raiz);
    }

    in_orden(nodo){
        if(nodo!=null){
            this.in_orden(nodo.izquierdo);
            console.log("Valor:",nodo.valor);
            this.in_orden(nodo.derecho);
        }
    }

    postOrden(){
        this.post_orden(this.raiz);
    }
    post_orden(nodo){
        if(nodo!=null){
            this.post_orden(nodo.izquierdo);
            this.post_orden(nodo.derecho);
            console.log("Valor:",nodo.valor);
        }
    }

    graphRaiz=(nodo)=>{
        let graph = "";
        if(nodo.izquierdo == null && nodo.derecho == null){
           graph += nodo.valor;
        } else {
            
            if(nodo.izquierdo != null){
              
                graph += nodo.valor + "->"+ this.graphRaiz(nodo.izquierdo)+"\n";
            }
            if(nodo.derecho!= null){
                graph+= nodo.valor + "->" + this.graphRaiz(nodo.derecho)+"\n";
            }
        }
        return graph

    }

    graph1=()=>{
        this.graphRaiz(this.raiz);
        return this.graphRaiz(this.raiz);
    }

    dotGraph =() => {
        var codigodot = "digraph G\n"
        +"{\n"
        +"node [shape=circle];\n"
        +"node [style = filled]\n";
        +"node [fillColor = \"#FF0000\"];\n"
        +"node [color = \"#FF0000\"];\n"
        +"edge [color = \"#FF0000\"];\n"

        if(this.raiz != null){
            codigodot += this.graph1(this.raiz); ;
        }
        codigodot += "\n}";
        d3.select('#lienzoAutor').graphviz()
            .width(1200)
            .height(1200)
            .renderDot(codigodot)
        
        return console.log(codigodot);
    }
    buscar =(valor, aux = this.raiz)=>{
        
        if(valor > aux.valor){
            if(aux.derecho != null){
                return this.buscar(valor, aux.derecho)
            }else{
                return false
            }
        }else if(valor < aux.valor){
            if(aux.izquierdo != null){
                return this.buscar(valor, aux.izquierdo)
            }else{
                return false
            }
        }else{
            return aux
        }
    }

    
}

let Autores = new ABB();

