const URL = "https://fakestoreapi.com/products";

document.addEventListener("DOMContentLoaded", async function (e) {
  const products = await fetchData(URL);
  showProducts(products);
});

async function fetchData(url) {
  /*Función asincrónica que realiza una solicitud a una URL utilizando la función fetch() y await.
  Si ocurre algún error lo captura y lo registra en la consola. 
  Si no hay errores devuelve el array de productos obtenido.*/
  try {
    
  } catch (error) {
    // Log de eventual error
    console.log(error);
  }
}

function showProducts(productsData) {
  /*Función para mostrar productos en el div con id="products".
  Debe usar la función stars(), cutString() y getCurrentDateTime() para lograrlo */
}

function stars(cantidadStars) {
  /*Función que toma como entrada un número cantidadStars y devuelve 
  el html correspondiente a cinco estrellas con cantidadStars rellenas
  y el resto vacías */
}

function cutString(string) {
  /*Función que toma como entrada un string y y un número máximo de caracteres,
     y devuelve la cadena truncada a esa longitud si es más larga,
     seguida de tres puntos suspensivos ("...").*/
}

function getCurrentDateTime() {
  /*función devuelve la fecha y hora actuales 
  en una string legible por humanos.*/
}
