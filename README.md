Descripción general del la pagina web.
-----------------------
  
La librería “catsbooks” posee varias sucursales dentro del País, esta cuenta con una gran
cantidad de libros, revistas, historietas y demás material de lectura. Debido a la pandemia
las ventas se han disminuido en un gran porcentaje ya que las sucursales se encuentran
ubicadas en lugares muy retirados de la ciudad capital, para ello la empresa lo contrata a
usted como estudiante de ingeniería en sistemas para que aplique sus conocimientos
obtenidos y aplicar las estructuras de datos para aplicarlos a la página Web para brindar un
óptimo servicio a cada uno de sus clientes.
Deberá desarrollar una página web utilizando las estructuras de datos y sus algoritmos
explicados en clase, de tal forma que pueda entregarle a la empresa una página optima,
segura, ordenada y confiable. Dicha aplicación web estará desarrollada en el lenguaje de
javascript. 

Requerimientos del sistema.
------------------------
• java version "1.8" 

• Cualquier navergador web actual.

• Espacio en memoria: 1 MB como mínimo

Guia de uso.
---------------------------
#### Archivo de entrada ####
La pagina web aceptara unicamente archivos en formato JSON, para cada uno de los diferentes modulos. Los cuales son: Usuarios, autores y libros. Los archivos de entrada unicamente se cargaran con el rol de administrador.

#### Login ####
El login permitira ingresar segun el rol a diferentes partes de la pagina web. Los roles son
administrador y usuario.

#### Carga users ####
Se podra cargar un archivo tipo JSON con el contenido de los usuario.Que seran cargados en una lista Circular doblemente enlazada.
#### Carga Autores ####
Se podra cargar un archivo tipo JSON con el contenido de los Autores. Que seran cargados en un arbol binario 

#### Carga libros ####
Se podra cargar un archivo tipo JSON con el contenido de los usuario.Estos seran cargados segun su categoria, para la categoria de Fantasia se cargara en una Matriz Ortogonal de 25x25. Para la categoria de Thiller se cargara en una matriz dispersa.

#### Vista Home ####
Sera la vista inicial, donde se podra observar un slide con diferentes imagenes de libros en venta. Con la las opciones de ver a los autores y libros disponibles. El apartado de compras esta deshabilitado para las persona que no ingresen con usuario.

#### Vista compras ####
Se podra comprar libros disponibles y observar si no hay algun ejemplar disponible. Los ejemplaces no disponibles sercan encargados por clientes y disponibles para ver en una cola

#### Vista autores ####
Se podra buscar a los diferentes autores, al realizar la busqueda aparecera toda la informacion de dicho autor.

#### Vista libros ####
Se podra observar los libros en forma acendente y descentende.

#### Vista Libreras ####
Se pobra observar las dos libreras, fantasia y thiller con sus respectivos libros disponibles.

Glosario de Terminos
-----------------------

Término |  Definición 
------------ | -------------
`Arbol de busqueda Binaria`  | Un árbol binario de búsqueda también llamado BST (acrónimo del inglés Binary Search Tree) es un tipo particular de árbol binario que presenta una estructura de datos en forma de árbol usada en informática.
`Lista doblemenete enlanzada` | Es un tipo de lista enlazada que permite moverse hacia delante y hacia atras. Cada nodo de una lista doblemente enlazada tiene dos enlaces, ademas de los campos de datos. Un enlace, el derecho, se utiliza para navegar la lista hacia delante. El otro enlace, el isquierdo, se utiliza para navegar la lista hacia atras.
`Lista circular doblemente enlazada` |  es una lista doblemente ligada modificada, donde la referencia siguiente (NEXT) del elemento que se encuentra al final de la lista (TAIL) en lugar de apuntar a nulo, apunta al primer elemento de la lista (HEAD).
`Cola` | Una Cola o Queue es una estructura de datos que sigue la Filosofía FIFO del ingles First In – First Out que en español seria “Primero en entrar primero en salir”. Esto quiere decir que el elemento que entre primero a la Cola sera el primero que salga y el último que entre sera el último en salir
`Matriz dispersa` | una matriz dispersa o matriz rala o matriz hueca es una matriz de gran tamaño en la que la mayor parte de sus elementos son cero. Con matrices de gran tamaño los métodos tradicionales para almacenar la matriz en la memoria de una computadora o para la resolución de sistemas de ecuaciones lineales necesitan una gran cantidad de memoria y de tiempo de proceso. Se han diseñado algoritmos específicos para estos fines cuando las matrices son dispersas.
`Matriz ortogonal` | Al contrario de la matriz dispersa, es una matriz donde todos sus nodos estan llenos y tienen un espacio reservado en memoria.
`JSON` | es un formato de texto sencillo para el intercambio de datos. Se trata de un subconjunto de la notación literal de objetos de JavaScript, aunque, debido a su amplia adopción como alternativa a XML, se considera un formato independiente del lenguaje.