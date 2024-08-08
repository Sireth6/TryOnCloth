# TryOnCloth - Filtro de Prueba de Ropa para Snapchat

Este proyecto es un filtro de realidad aumentada para Snapchat que permite a los usuarios probarse virtualmente cuatro diferentes cambios de ropa al tocar la pantalla usando un script especial. Utiliza Lens Studio para crear la experiencia de RA y está diseñado para ser fácil de usar y personalizar.

## Características

- Prueba virtual de cuatro cambios de ropa.
- Fácil de usar y personalizar.
- Compatible con Snapchat.

## Requisitos previos

- Lens Studio: Asegúrate de tener la última versión de Lens Studio instalada en tu computadora.
- Cuenta de Snapchat
- Modelos de Ropa: Importa modelos 3D de las prendas que deseas usar en tu filtro.
- Conocimientos Básicos: Familiaridad con la interfaz de Lens Studio y conceptos básicos de scripting en JavaScript.

## Pasos a seguir
1. Paso 1: Preparar los Modelos de Ropa
Importar los Modelos:

- Descarga o crea modelos 3D de las prendas que vas a utilizar (por ejemplo, una playera, un vestido, etc.).
- Importa estos modelos a tu proyecto de Lens Studio (File -> Import -> 3D Model).

Configurar los Modelos en la Escena:

- Coloca todos los modelos de ropa en la misma posición en la escena.
- Desactiva todos los modelos excepto el que deseas que se muestre primero. Puedes hacerlo desmarcando la casilla Enabled en el Inspector.
- Recuerda que para que los modelos 3D funcionen correctamente deben tener un 3D Body Mesh específico de Lens Studio.

2. Paso 2: Script
- Dentro de los assets verás un script llamado "TapToChange" este script tiene como funcionalidad cambiar de efecto, asset, etc. dando un tap a la pantalla
- Agrega un objeto vacío a la escena y agrega el script dentro de este objeto
- Dentro del inspector del objeto en el apartado del script verás varios valores, dentro de esos valores arrastra la prenda que quieras agregar.

3. Paso 3: Configurar los Modelos de Ropa en la Escena
Configurar la Visibilidad Inicial:
- Asegúrate de que todos los modelos de ropa estén en la misma posición y orientados correctamente.
- Desactiva todos los modelos excepto el que quieras que se muestre primero.

4. Paso 4: Probar el Filtro
Vista Previa en Lens Studio:
- Usa la vista previa de Lens Studio para probar tu filtro. Toca la pantalla y verifica que los modelos de ropa cambian correctamente.

## Instrucciones de Uso
- Abrir la Aplicación: Cuando los usuarios abran el filtro en Snapchat, verán el avatar con la primera prenda de ropa visible.
- Cambiar Ropa: Los usuarios pueden tocar la pantalla para cambiar entre las diferentes prendas disponibles.
- Interactividad: Cada tap en la pantalla alternará la ropa del avatar, proporcionando una experiencia interactiva y divertida.

## Recursos Necesarios
- Hardware: Computadora con capacidad para ejecutar Lens Studio.
- Software: Lens Studio, software de modelado 3D (opcional, si estás creando tus propios modelos).
- Assets: Modelos 3D de las prendas de ropa.


## Instalación

1. **Clonar el Repositorio**

   Clona este repositorio en tu PC.
   git clone https://github.com/Sireth6/TryOnCloth

Abre la carpeta "Lens Studio" y después la carpeta "TryOnCloth2"
Encontrarás una archivo llamado "TryOnCloth2"
Importar Modelos y Texturas

Coloca tus modelos 3D y texturas en la carpeta assets.
En Lens Studio, importa estos archivos desde la carpeta assets.

## Actualización
Se intentó agregar un botón con la leyenda "Shop Now" con un script, el cual su función sería abrir la página web de la tienda de ropa que estuviera promocionando las prendas, pero hubo intentos fallidos, al investigar más afondo se encontró que el propio software todavía no tiene esa función. Mientras tanto se agregó un enlace escrito de la tienda de ropa, la otra opción sería agregar un "Swipe Up" en una historia con ese filtro para abrir la página web.

Resumen
Este proyecto de Lens Studio permite a los usuarios cambiar la ropa de un avatar tocando la pantalla. Siguiendo los pasos anteriores, puedes configurar y desarrollar esta funcionalidad en tu propio filtro de Snapchat.

