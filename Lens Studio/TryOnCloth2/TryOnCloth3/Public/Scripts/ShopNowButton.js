// @input Component.ScreenTransform buttonTransform
// @input string url

function onTapped(eventData) {
    if (script.url) {
        global.openURL(script.url);
    } else {
        print("URL no está definida.");
    }
}

// Verificar si buttonTransform está definido
if (script.buttonTransform) {
    // Crear el evento de toque
    var touchComponent = script
