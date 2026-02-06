// script.js

// Función para manejar los clics en los botones
function selectOption(option) {
    if (option === 'no') {
        // Colores arcoíris
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Ocultar la pregunta
            displayCatHeart(); // Mostrar cat-heart.gif
        });
    } else if (option === 'yes') {
        // Cambiar texto del botón "Sí" a "Estás segura?"
        document.getElementById('no-button').innerText = 'Estás segura?';
        // Aumentar tamaño de fuente del botón "Sí"
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Duplicar tamaño de fuente
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // Si no se clickeó ni "Sí" ni "No", mostrar mensaje de alerta
        alert('¡Opción inválida!');
    }
}

// Función para mostrar colores morado y blanco y luego ejecutar un callback
function flashRainbowColors(callback) {
    var colors = ['#9400d3', '#ffffff']; // Morado y blanco
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 300); // Cambiar color cada 300 ms
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Resetear color de fondo
        if (callback) {
            callback();
        }
    }, 2000); // Flashear por 2 segundos
}


// Función para mostrar el cat.gif inicialmente
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Gato';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Función para mostrar cat-heart.gif
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Gato con corazón';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none'; // Ocultar opciones
    };
}

// Mostrar cat.gif inicialmente
displayCat();
