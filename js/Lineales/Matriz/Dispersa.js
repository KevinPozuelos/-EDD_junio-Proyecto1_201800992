class NodoMatriz {
    constructor(bandera, yes, equis) {
      this.bandera = bandera;
      this.yes = yes;
      this.equis = equis;
      this.arriba = null;
      this.abajo = null;
      this.derecha = null;
      this.izquierda = null;
      this.atras = null;
      this.adelante = null;
    }
  
    getBandera() {
      return this.bandera;
    }
  
    setBandera(nCorreo) {
      this.bandera = nCorreo;
    }
  
    getYes() {
      return this.yes;
    }
  
    getEquis() {
      return this.equis;
    }
  
  }
  
  class Matriz {
    constructor() {
      this.inicioHorizontal = null;
      this.inicioVertical = null;
    }
  
    ingresar(bandera, yes, equis) {
      var nuevoNodoHorizontal, nuevoNodoMatriz, nuevoNodoVertical, temp2, temp3, temp4, temp5, temp6, tempHorizont, tempVerti;
      nuevoNodoMatriz = new NodoMatriz(bandera, yes, equis);
  
      if (this.vacioHorizont() === true) {
        nuevoNodoHorizontal = new NodoMatriz("", "", equis);
        this.inicioHorizontal = nuevoNodoHorizontal;
      }
  
      if (this.vacioVerti() === true) {
        nuevoNodoVertical = new NodoMatriz("", yes, "");
        this.inicioVertical = nuevoNodoVertical;
      }
  
      tempHorizont = this.inicioHorizontal;
  
      if (this.existeHorizont(equis) === true) {
        while (tempHorizont.getEquis() !== equis) {
          tempHorizont = tempHorizont.derecha;
        }
      } else {
        nuevoNodoHorizontal = new NodoMatriz("", "", equis);
        temp2 = null;
  
        while (tempHorizont !== null && tempHorizont.getEquis() < equis) {
          temp2 = tempHorizont;
          tempHorizont = tempHorizont.derecha;
        }
  
        if (tempHorizont !== null && tempHorizont.getEquis() > equis) {
          if (tempHorizont === this.inicioHorizontal) {
            temp4 = this.inicioHorizontal;
            tempHorizont = nuevoNodoHorizontal;
            tempHorizont.izquierda = null;
            tempHorizont.derecha = temp4;
            temp4.izquierda = tempHorizont;
            this.inicioHorizontal = tempHorizont;
          } else {
            temp4 = tempHorizont;
            tempHorizont = nuevoNodoHorizontal;
            temp2.derecha = tempHorizont;
            tempHorizont.derecha = temp4;
            temp4.izquierda = tempHorizont;
            tempHorizont.izquierda = temp2;
          }
        } else {
          tempHorizont = nuevoNodoHorizontal;
          temp2.derecha = tempHorizont;
          tempHorizont.izquierda = temp2;
        }
      }
  
      if (tempHorizont.abajo !== null) {
        temp5 = null;
  
        while (tempHorizont.abajo !== null) {
          temp5 = tempHorizont;
          tempHorizont = tempHorizont.abajo;
  
          if (tempHorizont.getYes() === yes || tempHorizont.getYes() > yes) {
            break;
          }
        }
      }
  
      if (tempHorizont.getYes() === yes) {
        if (tempHorizont.atras !== null) {
          while (tempHorizont.atras !== null) {
            tempHorizont = tempHorizont.atras;
          }
        }
  
        tempHorizont.atras = nuevoNodoMatriz;
        nuevoNodoMatriz.adelante = tempHorizont;
      } else {
        if (tempHorizont.abajo !== null && tempHorizont.abajo.getYes() > yes) {
          temp6 = tempHorizont.abajo;
          tempHorizont = nuevoNodoMatriz;
          temp5.abajo = tempHorizont;
          tempHorizont.abajo = temp6;
          temp6.arriba = tempHorizont;
          tempHorizont.arriba = temp5;
        } else {
          if (tempHorizont !== null && tempHorizont.getYes() > yes) {
            temp6 = tempHorizont;
            tempHorizont = nuevoNodoMatriz;
            temp5.abajo = tempHorizont;
            tempHorizont.abajo = temp6;
            temp6.arriba = tempHorizont;
            tempHorizont.arriba = temp5;
          } else {
            tempHorizont.abajo = nuevoNodoMatriz;
            nuevoNodoMatriz.arriba = tempHorizont;
          }
        }
      }
  
      tempVerti = this.inicioVertical;
  
      if (this.existeVerti(yes) === true) {
        while (tempVerti.getYes() !== yes) {
          tempVerti = tempVerti.abajo;
        }
      } else {
        nuevoNodoVertical = new NodoMatriz("", yes, "");
        temp3 = null;
  
        while (tempVerti !== null && tempVerti.getYes() < yes) {
          temp3 = tempVerti;
          tempVerti = tempVerti.abajo;
        }
  
        if (tempVerti !== null && tempVerti.getYes() > yes) {
          if (tempVerti === this.inicioVertical) {
            temp4 = this.inicioVertical;
            tempVerti = nuevoNodoVertical;
            tempVerti.arriba = null;
            tempVerti.abajo = temp4;
            temp4.arriba = tempVerti;
            this.inicioVertical = tempVerti;
          } else {
            temp4 = tempVerti;
            tempVerti = nuevoNodoVertical;
            temp3.abajo = tempVerti;
            tempVerti.abajo = temp4;
            temp4.arriba = tempVerti;
            tempVerti.arriba = temp3;
          }
        } else {
          tempVerti = nuevoNodoVertical;
          temp3.abajo = tempVerti;
          tempVerti.arriba = temp3;
        }
      }
  
      if (tempVerti.derecha !== null) {
        temp5 = null;
  
        while (tempVerti.derecha !== null) {
          temp5 = tempVerti;
          tempVerti = tempVerti.derecha;
  
          if (tempVerti.getEquis() === equis || tempVerti.getEquis() > equis) {
            break;
          }
        }
      }
  
      if (tempVerti.getEquis() === equis && tempVerti.getBandera() !== bandera) {
        return;
      } else {
        if (tempVerti.derecha !== null && tempVerti.derecha.getEquis() > equis) {
          temp6 = tempVerti;
          tempVerti = nuevoNodoMatriz;
          temp5.derecha = tempVerti;
          tempVerti.derecha = temp6;
          temp6.izquierda = tempVerti;
          tempVerti.izquierda = temp5;
        } else {
          if (tempVerti !== null && tempVerti.getEquis() !== "" && tempVerti.getEquis() > equis) {
            temp6 = tempVerti;
            tempVerti = nuevoNodoMatriz;
            temp5.derecha = tempVerti;
            tempVerti.derecha = temp6;
            temp6.izquierda = tempVerti;
            tempVerti.izquierda = temp5;
          } else {
            tempVerti.derecha = nuevoNodoMatriz;
            nuevoNodoMatriz.izquierda = tempVerti;
          }
        }
      }
    }
  
    vacioHorizont() {
      if (this.inicioHorizontal === null) {
        return true;
      } else {
        return false;
      }
    }
  
    vacioVerti() {
      if (this.inicioVertical === null) {
        return true;
      } else {
        return false;
      }
    }
  
    existeVerti(yes) {
      var temporal;
      temporal = this.inicioVertical;
  
      while (temporal !== null) {
        if (temporal.getYes() === yes) {
          return true;
        } else {
          temporal = temporal.abajo;
        }
      }
  
      return false;
    }
  
    existeHorizont(equis) {
      var temp;
      temp = this.inicioHorizontal;
  
      while (temp !== null) {
        if (temp.getEquis() === equis) {
          return true;
        } else {
          temp = temp.derecha;
        }
      }
  
      return false;
    }
  
    buscarPorYes(yes) {
      var aux, aux2, cadena;
  
      if (this.vacioVerti() === false) {
        aux = this.inicioVertical;
  
        while (aux !== null && aux.getYes() !== yes) {
          aux = aux.abajo;
        }
  
        if (aux.getYes() === yes) {
          if (aux.derecha !== null) {
            cadena = "";
            aux = aux.derecha;
  
            while (aux !== null) {
              cadena = cadena + aux.getBandera() + "@" + aux.getEquis() + "\n";
  
              if (aux.atras !== null) {
                aux2 = aux.atras;
  
                while (aux2 !== null) {
                  cadena = cadena + aux2.getBandera() + "@" + aux2.getEquis() + "\n";
                  aux2 = aux2.atras;
                }
              }
  
              aux = aux.derecha;
            }
  
            return console.log(cadena);
          }
        }
      }
    }
  
    buscarPorEquis(equis) {
      var aux, aux2, cadena;
  
      if (this.vacioHorizont() === false) {
        aux = this.inicioHorizontal;
  
        while (aux !== null && aux.getEquis() !== equis) {
          aux = aux.derecha;
        }
  
        if (aux.getEquis() === equis) {
          if (aux.abajo !== null) {
            cadena = "";
            aux = aux.abajo;
  
            while (aux !== null) {
              cadena = cadena + aux.getBandera() + "@" + aux.getEquis() + " || Letra = " + aux.getYes() + "\n";
  
              if (aux.atras !== null) {
                aux2 = aux.atras;
  
                while (aux2 !== null) {
                  cadena = cadena + aux2.getBandera() + "@" + aux2.getEquis() + " || Letra = " + aux.getYes() + "\n";
                  aux2 = aux2.atras;
                }
              }
  
              aux = aux.abajo;
            }
  
            return cadena;
          }
        }
      }
    }
  
    eliminar(bandera, yes, equis) {
      var temp1, temp2, temp3, temp4, tempHorizont, tempVerti;
      tempHorizont = this.inicioHorizontal;
      tempVerti = this.inicioVertical;
      temp1 = temp2 = null;
  
      while (tempHorizont !== null && tempHorizont.getEquis() !== equis) {
        temp1 = tempHorizont;
        tempHorizont = tempHorizont.derecha;
      }
  
      while (tempVerti !== null && tempVerti.getYes() !== yes) {
        temp2 = tempVerti;
        tempVerti = tempVerti.abajo;
      }
  
      if (tempHorizont !== null && tempVerti !== null && tempHorizont.getEquis() === equis && tempVerti.getYes() === yes) {
        while (tempHorizont !== null && tempHorizont.getYes() !== yes) {
          temp3 = tempHorizont;
          tempHorizont = tempHorizont.abajo;
        }
  
        while (tempVerti !== null && tempVerti.getEquis() !== equis) {
          temp4 = tempVerti;
          tempVerti = tempVerti.derecha;
        }
  
        if (tempHorizont !== null && tempHorizont.atras !== null) {
          while (tempHorizont.atras !== null && tempHorizont.getBandera() !== bandera) {
            temp3 = tempHorizont;
            tempHorizont = tempHorizont.atras;
          }
        }
  
        if (tempVerti !== null && tempVerti.atras !== null) {
          while (tempVerti.atras !== null && tempVerti.getBandera() !== bandera) {
            temp4 = tempVerti;
            tempVerti = tempVerti.atras;
          }
        }
  
        if (tempHorizont !== null && tempHorizont.getBandera() === bandera) {
          if (temp3 !== null && temp3.getBandera() === "") {
            if (tempHorizont.atras !== null) {
              temp3.abajo = tempHorizont.atras;
              tempHorizont.atras.arriba = temp3;
  
              if (tempHorizont.abajo !== null) {
                tempHorizont.atras.abajo = tempHorizont.abajo;
                tempHorizont.abajo.arriba = tempHorizont.atras;
              }
            } else {
              if (tempHorizont.abajo !== null) {
                temp3.abajo = tempHorizont.abajo;
                tempHorizont.abajo.arriba = temp3;
              } else {
                temp3.abajo = null;
  
                if (temp1 !== null && temp3.derecha !== null) {
                  temp1.derecha = temp3.derecha;
                  temp3.derecha.izquierda = temp1;
                  temp3 = null;
                } else {
                  if (temp1 !== null) {
                    temp1.derecha = null;
                    temp3 = null;
                  } else {
                    if (temp3.derecha !== null) {
                      temp3.derecha.izquierda = null;
                      this.inicioHorizontal = temp3.derecha;
                      temp3 = null;
                    } else {
                      temp3 = this.inicioHorizontal = null;
                    }
                  }
                }
              }
            }
          } else {
            if (temp3 !== null) {
              if (tempHorizont.adelante !== null) {
                if (tempHorizont.atras !== null) {
                  temp3.atras = tempHorizont.atras;
                  tempHorizont.atras.adelante = temp3;
                } else {
                  temp3.atras = null;
                }
              } else {
                if (tempHorizont.atras !== null) {
                  temp3.abajo = tempHorizont.atras;
  
                  if (tempHorizont.abajo !== null) {
                    tempHorizont.atras.abajo = tempHorizont.abajo;
                    tempHorizont.abajo.arriba = tempHorizont.atras;
                  }
  
                  tempHorizont.atras.arriba = temp3;
                } else {
                  if (tempHorizont.abajo !== null) {
                    temp3.abajo = tempHorizont.abajo;
                    tempHorizont.abajo.arriba = temp3;
                  } else {
                    temp3.abajo = null;
                  }
                }
              }
            }
          }
        }
  
        if (tempVerti !== null && tempVerti.getBandera() === bandera) {
          if (temp4 !== null && temp4.getBandera() === "") {
            if (tempVerti.atras !== null) {
              temp4.derecha = tempVerti.atras;
              tempVerti.atras.izquierda = temp4;
  
              if (tempVerti.derecha !== null) {
                tempVerti.atras.derecha = tempVerti.derecha;
                tempVerti.derecha.izquierda = tempVerti.atras;
              }
            } else {
              if (tempVerti.derecha !== null) {
                temp4.derecha = tempVerti.derecha;
                tempVerti.derecha.izquierda = temp4;
              } else {
                temp4.derecha = null;
  
                if (temp2 !== null && temp4.abajo !== null) {
                  temp2.abajo = temp4.abajo;
                  temp4.abajo.arriba = temp2;
                  temp4 = null;
                } else {
                  if (temp2 !== null) {
                    temp2.abajo = null;
                    temp4 = null;
                  } else {
                    if (temp4.abajo !== null) {
                      temp4.abajo.arriba = null;
                      this.inicioVertical = temp4.abajo;
                      temp4 = null;
                    } else {
                      temp4 = this.inicioVertical = null;
                    }
                  }
                }
              }
            }
          } else {
            if (temp4 !== null) {
              if (tempVerti.adelante !== null) {
                if (tempVerti.atras !== null) {
                  temp4.atras = tempVerti.atras;
                  tempVerti.atras.adelante = temp4;
                } else {
                  temp4.atras = null;
                }
              } else {
                if (tempVerti.atras !== null) {
                  temp4.derecha = tempVerti.atras;
  
                  if (tempVerti.derecha !== null) {
                    tempVerti.atras.derecha = tempVerti.derecha;
                    tempVerti.derecha.izquierda = tempVerti.atras;
                  }
  
                  tempVerti.atras.izquierda = temp4;
                } else {
                  if (tempVerti.derecha !== null) {
                    temp4.derecha = tempVerti.derecha;
                    tempVerti.derecha.izquierda = temp4;
                  } else {
                    temp4.derecha = null;
                  }
                }
              }
            }
          }
        }
      }
    }
  
    hacerGrafica() {
      var AUX2Verti, AUXtempHorizont, AUXtempVerti, file, tempHorizont, tempVerti;
        let dot = "";
      if (this.vacioHorizont() === true || this.vacioVerti() === true) {
        return;
      } else {
        
        dot +=("digraph G\n{\n");
        tempHorizont = this.inicioHorizontal;
        tempVerti = this.inicioVertical;
        dot +=("\"INICIO\"[label = \"Inicio\", style = filled, fillcolor=\"#0D5A73\", fontcolor=\"#A2E7FF\", shape=box]\n");
        dot +=("\"INICIO\" -> \"n" + tempVerti.getYes().toString() + "\"\n");
  
        while (tempVerti !== null) {
          dot +=("\"n" + tempVerti.getYes().toString() + "\"[label = \"" + tempVerti.getYes().toString() + "\", style = filled, fillcolor=\"#E1E16E\", fontcolor=\"#040404\", shape=box]\n");
  
          if (tempVerti.abajo !== null) {
            dot +=("\"n" + tempVerti.getYes().toString() + "\" -> \"n" + tempVerti.abajo.getYes().toString() + "\"[rankdir=UD];\n");
            dot +=("\"n" + tempVerti.abajo.getYes().toString() + "\" -> \"n" + tempVerti.getYes().toString() + "\"\n");
          }
  
          if (tempVerti.derecha !== null) {
            dot +=("\"n" + tempVerti.derecha.getYes().toString() + "," + tempVerti.derecha.getBandera().toString() + "," + tempVerti.derecha.getEquis().toString() + "\"[label = \"" + tempVerti.derecha.getBandera().toString() + "\", style = filled, fillcolor=\"#5C5C5A\", fontcolor=\"#FCFC29\", shape=circle]\n");
            dot +=("\"n" + tempVerti.getYes().toString() + "\" -> \"n" + tempVerti.derecha.getYes().toString() + "," + tempVerti.derecha.getBandera().toString() + "," + tempVerti.derecha.getEquis().toString() + "\"[constraint=false];\n");
            dot +=("\"n" + tempVerti.derecha.getYes().toString() + "," + tempVerti.derecha.getBandera().toString() + "," + tempVerti.derecha.getEquis().toString() + "\" -> \"n" + tempVerti.getYes().toString() + "\"[constraint=false];\n");
            dot +=("{rank=same; \"n" + tempVerti.getYes().toString() + "\"  \"n" + tempVerti.derecha.getYes().toString() + "," + tempVerti.derecha.getBandera().toString() + "," + tempVerti.derecha.getEquis().toString() + "\"}\n");
            dot +=("{rank=same; \"n" + tempVerti.derecha.getYes().toString() + "," + tempVerti.derecha.getBandera().toString() + "," + tempVerti.derecha.getEquis().toString() + "\"  \"n" + tempVerti.getYes().toString() + "\"}\n");
            AUXtempVerti = tempVerti.derecha;
          }
  
          while (AUXtempVerti.derecha !== null) {
            dot +=("\"n" + AUXtempVerti.derecha.getYes().toString() + "," + AUXtempVerti.derecha.getBandera().toString() + "," + AUXtempVerti.derecha.getEquis().toString() + "\"[label = \"" + AUXtempVerti.derecha.getBandera().toString() + "\", style = filled, fillcolor=\"#5C5C5A\", fontcolor=\"#FCFC29\", shape=circle]\n");
            dot +=("\"n" + AUXtempVerti.getYes().toString() + "," + AUXtempVerti.getBandera().toString() + "," + AUXtempVerti.getEquis().toString() + "\" -> \"n" + AUXtempVerti.derecha.getYes().toString() + "," + AUXtempVerti.derecha.getBandera().toString() + "," + AUXtempVerti.derecha.getEquis().toString() + "\"[constraint=false];\n");
            dot +=("\"n" + AUXtempVerti.derecha.getYes().toString() + "," + AUXtempVerti.derecha.getBandera().toString() + "," + AUXtempVerti.derecha.getEquis().toString() + "\" -> \"n" + AUXtempVerti.getYes().toString() + "," + AUXtempVerti.getBandera().toString() + "," + AUXtempVerti.getEquis().toString() + "\"[constraint=false];\n");
            dot +=("{rank=same; \"n" + AUXtempVerti.getYes().toString() + "," + AUXtempVerti.getBandera().toString() + "," + AUXtempVerti.getEquis().toString() + "\" \"n" + AUXtempVerti.derecha.getYes().toString() + "," + AUXtempVerti.derecha.getBandera().toString() + "," + AUXtempVerti.derecha.getEquis().toString() + "\"}\n");
            dot +=("{rank=same; \"n" + AUXtempVerti.derecha.getYes().toString() + "," + AUXtempVerti.derecha.getBandera().toString() + "," + AUXtempVerti.derecha.getEquis().toString() + "\" \"n" + AUXtempVerti.getYes().toString() + "," + AUXtempVerti.getBandera().toString() + "," + AUXtempVerti.getEquis().toString() + "\"}\n");
            AUXtempVerti = AUXtempVerti.derecha;
          }
  
          tempVerti = tempVerti.abajo;
        }
  
        dot +=("\"INICIO\" -> \"n" + tempHorizont.getEquis().toString() + "\"\n");
        dot +=("{rank=same; \"INICIO\"  \"n" + tempHorizont.getEquis().toString() + "\"}\n");
  
        while (tempHorizont !== null) {
          dot +=("\"n" + tempHorizont.getEquis().toString() + "\"[label = \"" + tempHorizont.getEquis().toString() + "\", style = filled, fillcolor=\"#E1E16E\", fontcolor=\"#040404\", shape=box]\n");
  
          if (tempHorizont.derecha !== null) {
            dot +=("\"n" + tempHorizont.getEquis().toString() + "\" -> \"n" + tempHorizont.derecha.getEquis().toString() + "\"\n");
            dot +=("\"n" + tempHorizont.derecha.getEquis().toString() + "\" -> \"n" + tempHorizont.getEquis().toString() + "\"\n");
            dot +=("{rank=same; \"n" + tempHorizont.getEquis().toString() + "\"  \"n" + tempHorizont.derecha.getEquis().toString() + "\"}\n");
            dot +=("{rank=same; \"n" + tempHorizont.derecha.getEquis().toString() + "\"  \"n" + tempHorizont.getEquis().toString() + "\"}\n");
          }
  
          if (tempHorizont.abajo !== null) {
            dot +=("\"n" + tempHorizont.getEquis().toString() + "\" -> \"n" + tempHorizont.abajo.getYes().toString() + "," + tempHorizont.abajo.getBandera().toString() + "," + tempHorizont.abajo.getEquis().toString() + "\"[rankdir=UD];\n");
            dot +=("\"n" + tempHorizont.abajo.getYes().toString() + "," + tempHorizont.abajo.getBandera().toString() + "," + tempHorizont.abajo.getEquis().toString() + "\" -> \"n" + tempHorizont.getEquis().toString() + "\"\n");
            AUXtempHorizont = tempHorizont.abajo;
          }
  
          while (AUXtempHorizont.abajo !== null) {
            dot +=("\"n" + AUXtempHorizont.getYes().toString() + "," + AUXtempHorizont.getBandera().toString() + "," + AUXtempHorizont.getEquis().toString() + "\" -> \"n" + AUXtempHorizont.abajo.getYes().toString() + "," + AUXtempHorizont.abajo.getBandera().toString() + "," + AUXtempHorizont.abajo.getEquis().toString() + "\"[rankdir=UD];\n");
            dot +=("\"n" + AUXtempHorizont.abajo.getYes().toString() + "," + AUXtempHorizont.abajo.getBandera().toString() + "," + AUXtempHorizont.abajo.getEquis().toString() + "\" -> \"n" + AUXtempHorizont.getYes().toString() + "," + AUXtempHorizont.getBandera().toString() + "," + AUXtempHorizont.getEquis().toString() + "\"\n");
            AUXtempHorizont = AUXtempHorizont.abajo;
          }
  
          tempHorizont = tempHorizont.derecha;
        }
  
        dot +=("subgraph cluster_0 {\n");
        dot +=("style=filled;\n");
        dot +=("color=grey;\n");
        dot +=("node [style=filled,color=white];\n");
        tempVerti = this.inicioVertical;
  
        while (tempVerti !== null) {
          if (tempVerti.derecha !== null) {
            AUXtempVerti = tempVerti.derecha;
          }
  
          while (AUXtempVerti.derecha !== null) {
            if (AUXtempVerti.atras !== null) {
              dot +=("\"extra" + AUXtempVerti.getEquis().toString() + "\"[label = \"" + AUXtempVerti.derecha.getEquis().toString() + "\", style = filled, shape=box]\n");
            }
  
            if (AUXtempVerti.atras !== null) {
              dot +=("\"extra" + AUXtempVerti.getEquis().toString() + "\"[label = \"" + AUXtempVerti.getEquis().toString() + "\", style = filled, shape=box]\n");
              dot +=("\"n" + AUXtempVerti.atras.getYes().toString() + "," + AUXtempVerti.atras.getBandera().toString() + "," + AUXtempVerti.atras.getEquis().toString() + "\"[label = \"" + AUXtempVerti.atras.getBandera().toString() + "\", style = filled, shape=circle]\n");
              dot +=("\"extra" + AUXtempVerti.getEquis().toString() + "\" -> \"n" + AUXtempVerti.atras.getYes().toString() + "," + AUXtempVerti.atras.getBandera().toString() + "," + AUXtempVerti.atras.getEquis().toString() + "\"\n");
              dot +=("\"n" + AUXtempVerti.atras.getYes().toString() + "," + AUXtempVerti.atras.getBandera().toString() + "," + AUXtempVerti.atras.getEquis().toString() + "\" -> \"extra" + AUXtempVerti.getEquis().toString() + "\"\n");
              AUX2Verti = AUXtempVerti.atras;
  
              while (AUX2Verti.atras !== null) {
                dot +=("\"n" + AUX2Verti.atras.getYes().toString() + "," + AUX2Verti.atras.getBandera().toString() + "," + AUX2Verti.atras.getEquis().toString() + "\"[label = \"" + AUX2Verti.atras.getBandera().toString() + "\", style = filled, shape=circle]\n");
                dot +=("\"n" + AUX2Verti.getYes().toString() + "," + AUX2Verti.getBandera().toString() + "," + AUX2Verti.getEquis().toString() + "\" -> \"n" + AUX2Verti.atras.getYes().toString() + "," + AUX2Verti.atras.getBandera().toString() + "," + AUX2Verti.atras.getEquis().toString() + "\"\n");
                dot +=("\"n" + AUX2Verti.atras.getYes().toString() + "," + AUX2Verti.atras.getBandera().toString() + "," + AUX2Verti.atras.getEquis().toString() + "\" -> \"n" + AUX2Verti.getYes().toString() + "," + AUX2Verti.getBandera().toString() + "," + AUX2Verti.getEquis().toString() + "\"\n");
                AUX2Verti = AUX2Verti.atras;
              }
            }
  
            AUXtempVerti = AUXtempVerti.derecha;
          }
  
          if (AUXtempVerti.atras !== null) {
            dot +=("\"extra" + AUXtempVerti.getEquis().toString() + "\"[label = \"" + AUXtempVerti.getEquis().toString() + "\", style = filled, shape=box]\n");
            dot +=("\"n" + AUXtempVerti.atras.getYes().toString() + "," + AUXtempVerti.atras.getBandera().toString() + "," + AUXtempVerti.atras.getEquis().toString() + "\"[label = \"" + AUXtempVerti.atras.getBandera().toString() + "\", style = filled, shape=circle]\n");
            dot +=("\"extra" + AUXtempVerti.getEquis().toString() + "\" -> \"n" + AUXtempVerti.atras.getYes().toString() + "," + AUXtempVerti.atras.getBandera().toString() + "," + AUXtempVerti.atras.getEquis().toString() + "\"\n");
            dot +=("\"n" + AUXtempVerti.atras.getYes().toString() + "," + AUXtempVerti.atras.getBandera().toString() + "," + AUXtempVerti.atras.getEquis().toString() + "\" -> \"extra" + AUXtempVerti.getEquis().toString() + "\"\n");
            AUX2Verti = AUXtempVerti.atras;
  
            while (AUX2Verti.atras !== null) {
              dot +=("\"n" + AUX2Verti.atras.getYes().toString() + "," + AUX2Verti.atras.getBandera().toString() + "," + AUX2Verti.atras.getEquis().toString() + "\"[label = \"" + AUX2Verti.atras.getBandera().toString() + "\", style = filled, shape=circle]\n");
              dot +=("\"n" + AUX2Verti.getYes().toString() + "," + AUX2Verti.getBandera().toString() + "," + AUX2Verti.getEquis().toString() + "\" -> \"n" + AUX2Verti.atras.getYes().toString() + "," + AUX2Verti.atras.getBandera().toString() + "," + AUX2Verti.atras.getEquis().toString() + "\"\n");
              dot +=("\"n" + AUX2Verti.atras.getYes().toString() + "," + AUX2Verti.atras.getBandera().toString() + "," + AUX2Verti.atras.getEquis().toString() + "\" -> \"n" + AUX2Verti.getYes().toString() + "," + AUX2Verti.getBandera().toString() + "," + AUX2Verti.getEquis().toString() + "\"\n");
              AUX2Verti = AUX2Verti.atras;
            }
          }
  
          tempVerti = tempVerti.abajo;
        }
  
        dot +=("label = \"DATO_REPETIDO\";\n");
        dot +=("}\n");
        dot +=("}");  
        
       
      }
      d3.select('#lienzoLibro').graphviz()
      .width(1200)
      .height(1200)
      .renderDot(dot)
      return console.log(dot);
    }
  
  }
 
let Thriller = new Matriz();
