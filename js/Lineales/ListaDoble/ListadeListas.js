class nodo{
    constructor(nombreLibro) {
        this.nombreLibro = nombreLibro;
        this.siguiente = this.anterior = null;
        
    }
}class nodoL{
    constructor(userName) {
        
        this.userName = userName;
        this.libros = new Lista();
        this.siguiente = this.anterior = null;
        
    }
}


class Lista{
    constructor(){
        this.raiz = this.ultimo = null;
        this.size = 0;
    }

    add = (nombreLibro) => {
        let nuevo = new nodo(nombreLibro);
        if(this.raiz == null){
            this.raiz = this.ultimo = nuevo;
            return;
        } else {
            this.ultimo.siguiente = nuevo;
            nuevo.anterior = this.ultimo;
            this.ultimo = nuevo;
            return;
        }
    }

    print = () => {
        let aux = this.raiz;
        while ( aux != null){
            console.log(aux.nombreLibro);
            aux = aux.siguiente;
        }
        
        
    }
}

class ListadeListas{
    constructor(){
        this.raiz = this.ultimo = null;
    }

    search = (dpi) => {
        let aux = this.raiz;
        while(aux != null){
            if(aux.userName == dpi){
                return true;
            }
            aux = aux.siguiente;
        }
        return false;

    }

    insert = (userName, libro) => {
        if( this.raiz == null){
            this.raiz = this.ultimo = new nodoL(userName);
            this.raiz.libros.add(libro);
            return ;
        } else{
            if ( this.search(userName) == false){
               let  nuevo = new nodoL(userName)
                nuevo.libros.add(libro)
                this.ultimo.siguiente = nuevo;
                nuevo.anterior = this.ultimo;
                this.ultimo = nuevo;
                this.size++;
                return ;

            } else {
                let temp = this.get(userName)
                temp.libros.add(libro)
                this.size++;
                return;
            }
        }

    }

    get=(dpi) => {
        let aix = this.raiz
        while( aix != null){
            if(aix.userName == dpi){
                return aix;
            }
            aix = aix.siguiente;
        }
        return null;
    }
    prints = () => {
        let aux = this.raiz;
        while ( aux != null){
            console.log(aux.dpi);
            aux.libros.print();
            aux = aux.siguiente;
        }
        
        
    }

    graph = () => {
        var codigodot = "digraph G{\nlabel=\" Clientes \";\nnode [shape=box];\n nodesep=1;\n";
        let vertical = this.raiz
        let contador=0;
        while(vertical != null){
            codigodot += "\""+ vertical.userName + "\"[shape=box,rankdir=UD, style =\"filled\"; label=\"" + vertical.userName + "\";pos=\"0,-" + contador + "!\"];\n";
             let horizonal = vertical.libros.raiz
             let contador2=0;
            while(horizonal !=null){
                codigodot += "\"" + horizonal.nombreLibro + "\"[shape=box,rankdir=LR ,style =\"filled\"; label=\"" + horizonal.nombreLibro + "\";pos=\"" + contador2 + "!\"" + "];\n";
                contador2++;
                horizonal = horizonal.siguiente;
            }
            contador++;
            vertical = vertical.siguiente;
        }
        vertical = this.raiz
        while(vertical !=null){
            if(vertical==this.raiz){
                codigodot+= "\"" + vertical.userName + "\""
            }else{
                codigodot+="->\"" + vertical.userName + "\"" 
            }
            vertical = vertical.siguiente;
        }
        codigodot+= "[dir=both]"
        codigodot+="\n"
        vertical = this.raiz
        while(vertical != null){
            let horizontal = vertical.libros.raiz
            if(horizontal != null){
                codigodot += "\"" + vertical.userName + "\"->\"" +horizontal.nombreLibro + "\"\n";
                while(horizontal != null){
                    if(horizontal == vertical.libros.raiz){
                        codigodot+= "\""+ horizontal.nombreLibro + "\""
                     }else{
                         codigodot+="->\"" + horizontal.nombreLibro + "\""
                     }
                    horizontal = horizontal.siguiente;
                }
                
            }
            codigodot+="\n"
            
            vertical = vertical.siguiente;
        }
        codigodot+= "\"" + this.ultimo.userName + "\"" + "->" +"\""+ this.raiz.userName +"\""+ "\n"
        codigodot+="}"
        console.log(codigodot)
        d3.select('#lienzoLibroVenta').graphviz()
        .width(500)
        .height(500)
        .renderDot(codigodot)

        return codigodot;
        

    }

}

let listadeListasClientes = new ListadeListas();
