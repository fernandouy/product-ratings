const URL = "https://fakestoreapi.com/products";

document.addEventListener("DOMContentLoaded", async function (e) {
  const products = await fetchData(URL);
  console.log(products)
  showProducts(products);
});

async function fetchData(url) {
  /*Función asincrónica que realiza una solicitud a una URL utilizando la función fetch() y await.
  Si ocurre algún error lo captura y lo registra en la consola. 
  Si no hay errores devuelve el array de productos obtenido.*/
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error("Error al traer los productos")
    }
    const jsonResponse = response.json();
    return jsonResponse;
  } catch (error) {
    // Log de eventual error
    console.error(error);
  }
}

function showProducts(productsData) {
  /*Función para mostrar productos en el div con id="products".
  Debe usar la función stars(), cutString() y getCurrentDateTime() para lograrlo */
  const productsDiv = document.getElementById("products");
  
  productsData.forEach(product => {
    productsDiv.innerHTML += `
    <li class="list-group-item list-group-item-action">
      <p class="fw-bold">${cutString(product.title, 20)}</p>
      <div>
        ${getCurrentDateTime()}
        ${stars(product.rating.rate)}
      </div>
    </li>
  `
  })

  
}

function stars(cantidadStars) {
  /*Función que toma como entrada un número cantidadStars y devuelve 
  el html correspondiente a cinco estrellas con cantidadStars rellenas
  y el resto vacías */
  cantidadStars = Math.floor(cantidadStars)
  let stars = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= cantidadStars) {
      stars += "<i class='bi bi-star-fill' style='color: #fd7e14'></i>"
    } else {
      stars += "<i class='bi bi-star-fill' style='color: black'></i>"
    }
  }

  return stars;
  
}

function cutString(string, maxLenght) {
  /*Función que toma como entrada un string y y un número máximo de caracteres,
     y devuelve la cadena truncada a esa longitud si es más larga,
     seguida de tres puntos suspensivos ("...").*/
     if (string.length > maxLenght) {
      return string.substring(0, maxLenght) + "...";
     }
     return string
}

function getCurrentDateTime() {
  /*función devuelve la fecha y hora actuales 
  en una string legible por humanos.*/
  var now = new Date();
  var opcion = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return now.toLocaleDateString('es-UY', opcion);
}
