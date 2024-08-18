<?php

include '/xampp/htdocs/TechnoStyle1/TechnoStyle/index.html/php/conexion.php';

$nombre = $_POST['nombre'];
$numero_de_telefono = $_POST ['numero_de_telefono'];
$correo = $_POST ['correo'];
$contrasena = $_POST ['contrasena'];

$query = "INSERT INTO usuarios(nombre, numero_de_telefono, correo, contrasena) 
VALUES('$nombre','$numero_de_telefono','$correo','$contrasena')";

$ejecutar = mysqli_query($conexion,$query);

?>