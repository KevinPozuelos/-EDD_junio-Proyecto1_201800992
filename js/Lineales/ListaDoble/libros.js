
class NodoLibro {
    constructor(nombreLibro, cantidadLibros) {
        this.nombreLibro = nombreLibro;
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


class ListaDobleLibros {
    contrusctor() {
        this.primero = null;
        this.ultimo = null;
    }



    insertar = (nombreLibro, cantidadLibros) => {

        let nodo_nuevo = new NodoLibro(nombreLibro, cantidadLibros);

        if (this.vacia() == true) {
            this.set_primero(nodo_nuevo);
            this.set_ultimo(nodo_nuevo);
        } else {

            this.get_ultimo().set_siguiente(nodo_nuevo)
            nodo_nuevo.set_anterior(this.get_ultimo())
            this.set_ultimo(nodo_nuevo)

        }
    }

    insertarOrdenado = (nombreLibro, cantidadLibros) => {
        let nuevo = new NodoLibro(nombreLibro, cantidadLibros);
        if (this.buscar(nombreLibro)) {
            console.log('El usuario ya existe')
        } else {
            if (this.vacia()) {
                this.primero = nuevo
                console.log("se inserto dato nuevo")
            } else if (nuevo.nombreLibro < this.primero.nombreLibro) {
                this.insertarInicio(nuevo)
            } else {
                this.insertarAlmedio(nuevo)
            }
        }
    }

    insertarInicio = (nuevo) => {
        nuevo.set_siguiente(this.get_primero());
        this.primero.set_anterior(nuevo);
        this.primero = nuevo
        console.log("SE AGREGO AL INICIO" + nombreLibro)
    }

    insertarAlmedio = (nuevo) => {
        let ins = false;
        let temp = this.primero;
        let aux = this.primero.get_siguiente();
        while (aux != null) {
            if (nuevo.nombreLibro >= temp.nombreLibro && nuevo.nombreLibro <= aux.nombreLibro) {
                temp.set_siguiente(nuevo)
                nuevo.set_anterior(temp)
                nuevo.set_siguiente(aux)
                aux.set_anterior(nuevo)
                ins = true;
                break;
            } else {
                temp = aux;
                aux = aux.get_siguiente();
            }
        }
        if (!ins) {
            temp.set_siguiente(nuevo)
            nuevo.set_anterior(temp)
        }
        console.log("se inserto al medio")
    }

    vacia = () => {
        if (this.primero == null) {
            return true;
        } else {
            return false;
        }
    }

    print = () => {
        if (this.vacia()) {
            console.log('Lista vacia')
        } else {
            let aux = this.primero;
            while (aux != null) {
                console.log(aux.nombreLibro + ' ' + aux.cantidadLibros + "<->")
                aux = aux.get_siguiente();
            }
            console.log("\n")
        }

    }

    buscar = (nombre) => {
        if (this.vacia) {
            console.log('Lista vacia')
            return false
        } else {
            if (nombre == this.primero.nombreLibro) {
                console.log('Encontrado')
                return true
            }
            let aux = this.get_primero();
            while (aux != null) {
                if (nombre == aux.nombreLibro) {
                    console.log("Se encontro dato" + aux.nombreLibro)
                    return true
                }
                aux = aux.get_siguiente()
            }
        }
        console.log('No se encontro')
        return false
    }

    get_primero = () => {
        return this.primero;
    }
    set_primero = (primero) => {
        this.primero = primero;
    }
    get_ultimo = () => {
        return this.ultimo;
    }
    set_ultimo = (ultimo) => {
        this.ultimo = ultimo;
    }

    ususer() {
        console.log('holamundo')
    }

    graficarCliente = () => {
        var codigodot = "digraph G{rankdir=BT;\nlabel=\" Libros \";\nnode [shape=box];\n nodesep=1;\n" + "node [shape=record fontname=Arial]\n;";
        var temp = this.get_primero();
        var nodes = "";
        var conexiones = "";
        var Nnode = 0;

        while (temp != null) {
            nodes += "N" + Nnode + " [label=\"" + "\\n" + temp.nombreLibro + "\\n" + temp.cantidadLibros + "\\n" + "\"];\n";
            if (temp.get_siguiente() != null) {
                var auxnum = Nnode + 1;
                conexiones += "N" + Nnode + "->" + "N" + auxnum + "[dir=both];\n";
            }
            temp = temp.siguiente;
            Nnode++;
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodes + "\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "\n" + conexiones + "\n}\n}"
        d3.select('#lienzoAcendente').graphviz()
        .width(600)
        .height(600)
        .renderDot(codigodot)

        return console.log(codigodot);
        
    }

    graficarCliente2 = () => {
        var codigodot = "digraph G{rankdir=TB;\nlabel=\" Libros \";\nnode [shape=box];\n nodesep=1;\n" + "node [shape=record fontname=Arial]\n;";
        var temp = this.get_primero();
        var nodes = "";
        var conexiones = "";
        var Nnode = 0;

        while (temp != null) {
            nodes += "N" + Nnode + " [label=\"" + "\\n" + temp.nombreLibro + "\\n" + temp.cantidadLibros + "\\n" + "\"];\n";
            if (temp.get_siguiente() != null) {
                var auxnum = Nnode + 1;
                conexiones += "N" + Nnode + "->" + "N" + auxnum + "[dir=both];\n";
            }
            temp = temp.siguiente;
            Nnode++;
        }
        codigodot += "//agregando nodos\n"
        codigodot += nodes + "\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "\n" + conexiones + "\n}\n}"
        d3.select('#lienzoAcendente').graphviz()
        .width(600)
        .height(600)
        .renderDot(codigodot)

        return console.log(codigodot);
        
    }
}
var Libros = new ListaDobleLibros();
