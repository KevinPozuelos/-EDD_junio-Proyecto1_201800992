# Manual Técnico <h1>
  
Descripción de la Solución
-----------------------
  
La aplicación que se desarrollará será una versión en la cual se podrá ver la estructura
implementada junto con la aplicación de la misma, para corroborar que el funcionamiento
sea el correcto.
La aplicación contará con las siguientes opciones:

•La página web contará con un Login en la cual ingresaran sus datos para poder
ingresar identificándose ya sea un usuario que desea comprar un libro o como un
administrador el cual tendrá el control del ingreso de nuevos pedidos y la revisión de
todas las funcionalidades.

• Un cliente podrá comprar un libro y almacenarlo en su biblioteca virtual.

• Se tendrá una cola de espera para los clientes que soliciten un libro que no esté
disponible

• El cliente podrá visualizar todos los libros disponibles según las dos categorías más
comunes descritas más adelante, encontradas en esta librería simulando
estanterías.

• Se podrá visualizar los diferentes tops de ventas generales dentro de la página

• Se tendrá una vista en la cual se podrán apreciar las estructuras y su aplicación
homogénea.


• Se podrá consultar la biografía de cada uno de los autores de los libros
almacenados en un árbol binario ordenado por nombre.


• Se podrá ordenar la vista de los libros de forma ascendente y descendente.

• Se sabe que cada libro cuenta con una cantidad n de ejemplares, los cuales serán
almacenados en una pila.


  
Requerimientos del Entorno de Desarrollo
-----------------------

• IDE utilizada: Visual Studio Code 

• Espacio en memoria: 30 MB como mínimo

• Librerias: d3-graphviz

Requerimientos Funcionales del Sistema
-----------------------
• Cargar archivos .Json y visualizacion de las estructuras a implementar

• Busquedas en estructuras de datos

• Algoritmo de busqueda como BubbleSort y Quicksort

• Metodos recursivos



Diccionario de Clases 
-----------------------
Clase |  Definición 
------------ | -------------
`Arbol de busqueda binaria` | Clase que nos permitira almacenar los datos de los autores en un arbol de busqueda binaria
`Lista Circular Doblemente enlazada` | Clase que nos permitira almacenar los datos de los usuarios previamente cargados en la aplicacion web
`Libros` | Clase que nos permitira almacenar y ordenar los libros de forma acendente o desendente por medio de algoritmos de ordenamiento
`Queue` | Los libros encargados por los clientes que no esten disponibles.
`Stack` | Pila que simulara una pila de libros.
`Lista de listas` | Estructura de datos compuesta que nos permitira ver los libros comprados por cada uno de los usuarios con rol normal.
`Dispersa` | Matriz dispersa que nos permitira almacenar los libros de cierta categoria.
`Ortogonal` | Matriz ortogonal que nos permitira almacenar los libros de cierta categoria.

Diccionario de Funciones
-----------------------

### Funciones de la clase Arbol de busqueda binaria ###
Función |  Definición 
------------ | -------------
`add` | Inserta nodos en el arbol binario de forma recursiva 
`insertar` | Asigna usando el metodo recursivo add los hijos y padres del arbol binario
`preOrden` | Recorre el arbol en preorden.
`inOrden` | Recorre el arbol en inorden.
`postOrden` | Recorre el arbol en postorden.
`agraphRaiz` | Metodo de graficacion recursiva.
`dotGraph` | Manda a llamar al metodo agraphRaiz para generar el String dot.
`Busqueda` | Busqueda de forma recursivo.

### Funciones de la clase libros ###
Función |  Definición 
------------ | -------------
`addLibro` | Inserta de manera ordenada segun el nombre del libro.
`insertarInicio` | Inserta un nodo al inicio de la lista.
`insertarAlmedio` | Inserta un nodo al medio de lista.
`busqueda` | Metodo para buscar el nombre de un libro.
`buscarNodo` | Metodo que utiliza el metodo busqueda para retornar un nodo.
`getCantidad` | Verifica la cantidad de libros en un nodo.
`modificar` | Resta la cantidad de libros de un nodo.
`Graficar` | Graficar el archivo dot.

### Funciones de la clase ListaCircularDoble ###
Función |  Definición 
------------ | -------------
`AddCliente` | Agrega un nodo a la lista
`dot` | grafica la lista circular doblemente enlazada
`buscarCliente` | Busca un cliente.

### Funciones de la clase ListadeListas ###
Función |  Definición 
------------ | -------------
`add` | Agrega un nodo a la lista a la lista de libros.
`search` | Busca un nodo en la lista principal.
`insert` | Agrega un nodo de la lista principal.
`get` | Busca un cliente.
`graph` | grafica el el dot.

### Funciones de la clase ListaDoble ###
Función |  Definición 
------------ | -------------
`addOrdenado` | Inserta de manera ordenada segun el nombre del libro.
`insertarInicio` | Inserta un nodo al inicio de la lista.
`insertarAlmedio` | Inserta un nodo al medio de lista.
`busqueda` | Metodo para buscar el nombre de un libro.
`buscarNodo` | Metodo que utiliza el metodo busqueda para retornar un nodo.
`getCantidad` | Verifica la cantidad de libros en un nodo.
`modificar` | Resta la cantidad de libros de un nodo.
`Graficar` | Graficar el archivo dot.

### Funciones de la clase Queue ###
Función |  Definición 
------------ | -------------
`enqueue` | Inserta un nodo en la cola
`graficarCola` | Grafica la cola

### Funciones de la clase Stack ###
Función |  Definición 
------------ | -------------
`push` | inserta un nodo en el top de la pila
`pop` | saca el ultimo dato ingresado
`peek` | retorna el top de la pila
`dot` | Grafica la pila

### Funciones de la clase Dispersa ###
Función |  Definición 
------------ | -------------
`ingresar` | Ingresa nodos a la matriz dispersa.
`vacioHorizont` | Verifica si la cabezera horizontal esta vacia.
`vacioVerti` | Verifica si la cabezera vertical esta vacia.
`buscarPorYes` | Busca por posicion columna
`buscarPorEquis` | Busca por posicion fila
`eliminar` | Elimina un nodo
`hacerGrafica` | Genera la grafica.

### Funciones de la clase Ortogonal ###
Función |  Definición 
------------ | -------------
`agregarCabezara` | Ingresa nodos a la matriz ortogonal.
`agregarCabezaraFil` | agrega a la cabecera horizontal esta vacia.
`agregarCabezaraCol` | agrega a la cabecera vertical esta vacia.
`PunteroC ` | apuntadores a las columnas
`punteroF` | apuntadores a las filas
`agregar` | agrega nodos segun posicion
`graphNodos` | Genera la grafica.




