// @input string url = "https://example.com"

// Función que se llama cuando se detecta un toque en la pantalla
function onTouchStart(eventData) {
    // Verifica si el toque ocurrió dentro del área del objeto de texto
    var touchLocation = eventData.getTouchLocation();
    var touchWorldPosition = script.getSceneObject().getTransform().getWorldPosition();

    // Puedes necesitar ajustar estos valores para que coincidan con el tamaño y posición del texto
    var textWidth = 200; // Ajusta al tamaño real del texto
    var textHeight = 50; // Ajusta al tamaño real del texto
    var isInTextBounds = (touchLocation.x >= touchWorldPosition.x && touchLocation.x <= touchWorldPosition.x + textWidth &&
                          touchLocation.y >= touchWorldPosition.y && touchLocation.y <= touchWorldPosition.y + textHeight);

    if (isInTextBounds && script.url) {
        // Abre el enlace en el navegador
        if (global.platform == "ios") {
            var webView = new Texture();
            webView.loadURL(script.url);
        } else {
            var intent = new Intent(Intent.ACTION_VIEW, Uri.parse(script.url));
            script.context.getActivity().startActivity(intent);
        }
    }
}

// Escuchar el evento de pantalla táctil
var touchEvent = global.getTouchEvent();
touchEvent.onTouchStart.add(onTouchStart);
