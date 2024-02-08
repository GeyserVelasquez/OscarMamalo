    <?php

    // Ruta del archivo JSON
    $rutaArchivo = 'JSON/datos.json';

    // Leer el contenido del archivo JSON
    $contenido = file_get_contents($rutaArchivo);

    // Decodificar el contenido JSON en un array asociativo
    $datos = json_decode($contenido, true);

    // Modificar la edad
    $datos['visitas'] += 1;

    $visitas = $datos['visitas'];

    // Codificar los datos actualizados de vuelta a JSON
    $datosActualizados = json_encode($datos, JSON_PRETTY_PRINT);

    // Escribir los datos actualizados en el archivo JSON
    file_put_contents($rutaArchivo, $datosActualizados);

    ?>


