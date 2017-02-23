var trabajador = [ { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
 { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
  { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
   { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
    { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];
function Lista(){
  var cadena = "";
  for (var  i = 0;i<trabajador.length;i++) {
    cadena = cadena + "<ul><li>" + "Nombre : " + trabajador[i].nombre +"</li><li>Apellido: "+ trabajador[i].apellido+
    "</li><li>Rol: "+ trabajador[i].rol + "</li><li>Cumpleaños: "+ trabajador[i].cumpleanios+"</li></ul>";
  }
  document.getElementById('listado').innerHTML = cadena;
}
