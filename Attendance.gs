function obtenerSedesPromotor(
  usuarioId
){

  const data =
    getPromotorSedesSheet()
    .getDataRange()
    .getValues();

  let sedes = [];

  for(let i=1;i<data.length;i++){

    if(data[i][0] == usuarioId){

      sedes.push(
        data[i][1]
      );

    }

  }

  return sedes;

}

function obtenerTodasLasSedes(){

  const data =
    getSedesSheet()
    .getDataRange()
    .getValues();

  let sedes = [];

  for(let i=1;i<data.length;i++){

    sedes.push(
      data[i][1]
    );

  }

  return sedes;

}

function registrarMarcacion(datos){

  getMarcacionesSheet()
    .appendRow([
      obtenerFechaHora(),
      datos.usuarioId,
      datos.nombre,
      datos.rol,
      datos.sede,
      datos.tipo,
      datos.latitud,
      datos.longitud,
      datos.distancia,
      datos.precision,
      datos.fotoURL
    ]);

  return true;

}