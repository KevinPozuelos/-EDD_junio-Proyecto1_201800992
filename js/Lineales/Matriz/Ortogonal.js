class NodoHijo {
    constructor(n_fil = -1, n_col = -1, valor) {
        this.derecha = null;
        this.izquierda = null;
        this.arriba = null;
        this.abajo = null;
        this.n_col = n_col;
        this.n_fil = n_fil;
        this.valor = valor;
    }
}

class NodoCabezera {
    constructor(clave) {
        this.x = null;
        this.y = null;
        this.acceso = null;
        this.clave = clave;
    }
}

class mOrtogonal {
    constructor() {
        this.xMax = -1;
        this.yMax = -1;
        this.raiz = null;
    }

    agregarCabezara = (nodo) => {
        let nuevo = new NodoCabezera(nodo.valor);
        this.raiz = nuevo;
    }

    agregarCabezaraFil = (fila) => {
        let temp = this.raiz;
        if (this.raiz.x === null) {
            while (fila > this.xMax) {
                ++this.xMax;
                let nuevo = new NodoCabezera(this.xMax);
                temp.x = nuevo;
                temp = temp.x;
            }
            return;
        }
        while (temp.x != null) {
            temp = temp.x;
        }
        while (fila > this.xMax) {
            ++this.xMax;
            let nuevo = new NodoCabezera(this.xMax);
            temp.x = nuevo;
            temp = temp.x;
        }
    }

    agregarCabezaraCol = (columna) => {
        let temp = this.raiz
        if (this.raiz.y === null) {
            while (columna > this.yMax) {
                ++this.yMax;
                let nuevo = new NodoCabezera(this.yMax);
                temp.y = nuevo;
                temp = temp.y;
            }
            return;
        }
        while (temp.y != null) {
            temp = temp.y;
        }
        while (columna > this.yMax) {
            ++this.yMax;
            let nuevo = new NodoCabezera(this.yMax);
            temp.y = nuevo;
            temp = temp.y;
        }
    }

    PunteroC = (nodo) => {
        let temp = this.raiz.y;
        let aux;

        while (temp.clave != nodo.n_col) {
            temp = temp.y
        }

        if (temp.acceso == null) {
            temp.acceso = nodo;
        } else if (temp.acceso.n_fil > nodo.n_fil) {
            nodo.abajo = temp.acceso;
            temp.acceso.arriba = nodo;
            temp.acceso = nodo;
        } else {
            aux = temp.acceso
            while (aux) {
                if (aux.n_fil === nodo.n_fil) {
                    return;
                } else if (aux.abajo === null) {
                    aux.abajo = nodo
                    nodo.arriba = aux;
                    break;
                } else if (aux.abajo.n_fil > nodo.n_fil) {
                    aux.abajo.arriba = nodo;
                    nodo.arriba = aux;
                    nodo.abajo = aux.abajo;
                    aux.abajo = nodo;
                }
                aux = aux.abajo;
            }
        }
    }

    punteroF = (nodo) => {
        let temp = this.raiz.x

        while (temp.clave != nodo.n_fil) {
            temp = temp.x;
        }

        if (temp.acceso == null) {
            temp.acceso = nodo;
        } else if (temp.acceso.n_col > nodo.n_col) {
            nodo.derecha = temp.acceso;
            temp.acceso.izquierda = nodo;
            temp.acceso = nodo;
        } else {
            let aux = temp.acceso;
            while (aux) {
                if (aux.n_col === nodo.n_col) {
                    return
                } else if (aux.derecha === null) {
                    aux.derecha = nodo;
                    nodo.izquierda = aux;
                    break
                } else if (aux.derecha.n_col > nodo.n_col) {
                    aux.derecha.izquierda = nodo;
                    nodo.izquierda = aux;
                    nodo.derecha = aux.derecha;
                    aux.derecha = nodo;
                }
                aux = aux.derecha;
            }
        }
    }

    agregar = (x = 0, y = 0, data) => {
        let nuevo = new NodoHijo(x, y, data);
        if (this.raiz === null) {
            this.agregarCabezara(nuevo);
            return
        }
        if (nuevo.n_fil > this.xMax) {
            this.agregarCabezaraFil(nuevo.n_fil)
        }
        if (nuevo.n_col > this.yMax) {
            this.agregarCabezaraCol(nuevo.n_col)
        }
        this.PunteroC(nuevo);
        this.punteroF(nuevo);

    }

    graphNodos = () => {
        let dot = "edge[dir = \"both\"];\nCOORDENADAS -> "
        let ColValor = "COORDENADAS;"

        for (let i = 0; i <= this.xMax; i++) {
            if (i === this.xMax) {
                dot += "x" + (i) + ";\n"
            } else {
                dot += "x" + (i) + " -> "
            }
            
        }
        dot += "COORDENADAS ->"
        for (let i = 0; i <= this.yMax; i++) {
            if (i === this.yMax) {
                dot += "y" + (i) + ";\n"
            } else {
                dot += "y" + (i) + " -> "
            }
            ColValor += "y" + (i) + ";"
        }
        dot += "{rank=same;" + ColValor + "};\n"
        let temp = this.raiz.x;
        while (temp != null) {
            let ColValor = "";
            ColValor += "x" + temp.clave + ";"
            let aux = temp.acceso;
            for (let i = 0; i <= this.yMax; i++) {
                dot += " x" +
                    temp.clave +
                    "y" + i +
                    "[label = \" \"]" + "\n"
            }
            dot += "x" + temp.clave +
                " -> x" +
                temp.clave + "y" + 0
            ColValor += "x" + temp.clave + "y" + 0 + ";"
            for (let i = 1; i <= this.yMax; i++) {
                dot += " -> x" +
                    temp.clave + "y" + i
                ColValor += "x" +
                    temp.clave +
                    "y" + i + ";"
            }
            dot += " \n"
            while (aux != null) {
                dot += "x" + aux.n_fil + "y" + aux.n_col + "[label = \"" + aux.valor + "\"]" + "\n"
                aux = aux.derecha
            }
            temp = temp.x;
            dot += "\n{rank=same;" + ColValor + "}\n";
        }
        temp = this.raiz.y
        while (temp != null) {
            dot += "\ny" + temp.clave + " -> x" + 0 + "y" + temp.clave;
            ColValor += "x" + 0 + "y" + temp.clave + ";"
            for (let i = 1; i <= this.xMax; i++) {
                dot += " -> x" + i + "y" + temp.clave;
            }
            temp = temp.y;
        }
        return dot;
    }

    graph = () => {
        let dot = "digraph G{\n nodesep=1;\nnode [shape=box3d]; \n";
        if (this.raiz) {
            dot += this.graphNodos(this.raiz);
        }
        dot += "}";
        return console.log(dot);
    }

}

var Fantasia = new mOrtogonal();

Fantasia.agregar(26,26,""); 


