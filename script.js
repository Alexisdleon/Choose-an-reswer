// script.js

// Función para manejar los clics en los botones
function selectOption(option) {
    if (option === 'yes') {
        // Crear corazones flotando
        var totalHearts = 10 + Math.floor(Math.random() * 10); // entre 10 y 20 corazones
        for (let i = 0; i < totalHearts; i++) {
            setTimeout(() => {
                createHeart();
            }, i * 100); // aparecen escalonados
        }

        // Colores morado y blanco al presionar Sí
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Ocultar la pregunta
            displayCatHeart(); // Mostrar cat-heart.gif
        });

    } else if (option === 'no') {
        // Cambiar texto del botón "No" a "Estás segura?"
        document.getElementById('no-button').innerText = 'Estás segura?';

        // Aumentar tamaño de fuente del botón "Sí"
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Duplicar tamaño de fuente
        yesButton.style.fontSize = newSize + 'px';
    } else {
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

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Gato con corazón';
    
    // Agregar clase show al cargar para activar animación
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        setTimeout(() => {
            catHeartImage.classList.add('show');
        }, 50); // pequeño delay para activar transición
        document.getElementById('options').style.display = 'none'; // Ocultar opciones
    };
}

// Función para crear un corazón flotando
function createHeart() {
    var heart = document.createElement('div');
    heart.className = 'heart';

    // Posición aleatoria horizontal y cerca de la parte inferior
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = (window.innerHeight - 50) + 'px';

    // Tamaño aleatorio
    var size = 10 + Math.random() * 20; // entre 10px y 30px
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';

    // Color aleatorio
    var colors = ['#ff4d6d', '#ff66b2', '#ff99c8', '#ff80aa', '#ff1a75'];
    heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(heart);

    // Activar animación
    setTimeout(() => { heart.style.opacity = 1; }, 10);

    // Eliminar corazón después de animación
    setTimeout(() => { heart.remove(); }, 2000);
}

// Mostrar cat.gif inicialmente
displayCat();

