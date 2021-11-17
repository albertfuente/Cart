# FoodDrink

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# run tests
$ yarn test
```


## INTRODUCTION
This is cart page of a site for ordering drinks.




## QUESTIONS

Bienvenido a la prueba técnica de Drinks&Co para front-end developers.

Hemos dividido la prueba técnica en dos áreas. Una primera parte más teórica, y una segunda más práctica donde te
pediremos que programes una pequeña webapp.

Por último, te agradecermos cualquier feedback sobre esta prueba.

¡Buena suerte!

# Parte 1

A continuación te planteamos:

- **¿En CSS existen varias unidades de medida (px, em, rem, vh, vw…). ¿Podrías explicarnos en qué casos utilizarias cada una?**
- **Teniendo en cuenta el siguiente código, ¿de qué color será el texto `You are awesome`? ¿Por qué?:**
```html
<style>
  ul.shopping-list li.favorite span {
    color: blue;
  }

  ul#awesomeProduct li {
    color: red;
  }
</style>
```
```html
<ul id="awesomeProduct" class="shopping-list">
  <li><span>Milk</span></li>
  <li id="buyThis" class="favorite"><span class="highlight">You are awesome</span></li>
</ul>
```

## RESPUESTA
PX no es escalable es una unidad absolute siempre fija.
Element y Root element son responsive y el browser lo equipara a px.
Vh es el view port height y se basa en el height del viewport 1vh es un 1% del viewport height si queremos todo el vh necesitamos un 100vh.
Vw es lo mismo que view port height pero en width.
Cuando usamos rem los px equivalen al font size del html element.

El color de You are awesome seria azul porque primero va del html element a la clase dentro de ul y luego dentro de li va ala classe favorite y selecciona el span


- **En Javascript puedes testear la igualdad mediante doble igual o triple igual (`==` `===`). ¿Sabrías decirnos diferencias y ventajas de cada uno?**
- **Nos gustaría que el siguiente código mostrara `hey Maria`, pero nos devuelve `hey Raynold`. ¿Cómo lo solucionarias?**
```js
function getName(person) {
if (person == { name: 'Maria' }) {
return 'hey Maria'
} else {
return 'hey Raynold'
}
}
getName({ name: 'Maria' })
```

## RESPUESTA:
En JS cuando testeas con doble igual no testeas el type (solo el valor), si lo haces con triple igual testeas que sea igual el valor y el type
Para que funcione laoharia  un Object.values para ver que los valores son los que queremos.
```js
function getName(person) {
if (Object.values(person) ==  'Maria' ) {
return 'hey Maria'
} else {
return 'hey Raynold'…
```

# Parte 2

En Drinks&Co estamos rediseñando nuestro ecommerce y para evaluar tus conocimientos en front-end, queremos que nos
hagas una propuesta de nuestro checkout utilizando las librerias que consideres. Por desgracia, en esta ocasión, nuestro equipo de UX/UI
sólo nos ha podido preparar un wireframe para Desktop.
Además, tendrás que mostrar los datos que te devuelve nuestra API mediante el siguiente endpoint:
```
http://demo0915487.mockable.io/cart
```
# Wireframe
![](https://live.staticflickr.com/7402/16376980461_fbbd43ec65_b.jpg)

## Valoraremos positivamente:
- El uso de buenas prácticas y que utilices el potencial de ES6.
- Que incluyas tests de tus componentes.
- Si utilizas librerias, explicanos por qué las has escogido.
- Recuerda, se trata de una prueba técnica de front-end, no de UX/UI Designer. Evaluaremos cómo utilizas CSS, no el look and feel final. 
