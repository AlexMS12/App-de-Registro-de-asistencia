function crearUsuario(
  nombre,
  usuario,
  password,
  rol
){

  getUsuariosSheet()
    .appendRow([
      generarID("USR"),
      nombre,
      usuario,
      password,
      rol,
      "Activo"
    ]);

  return true;

}

function obtenerUsuarios(){

  return getUsuariosSheet()
    .getDataRange()
    .getValues();

}

function crearSede(
  nombre,
  direccion,
  latitud,
  longitud,
  radio
){

  getSedesSheet()
    .appendRow([
      generarID("SED"),
      nombre,
      direccion,
      latitud,
      longitud,
      radio,
      "Activo"
    ]);

  return true;

}

function obtenerSedes(){

  return getSedesSheet()
    .getDataRange()
    .getValues();

}

function asignarSedePromotor(
  usuarioId,
  sede
){

  const sheet =
    getPromotorSedesSheet();

  const data =
    sheet.getDataRange()
    .getValues();

  let contador = 0;

  for(let i=1;i<data.length;i++){

    if(data[i][0] == usuarioId){
      contador++;
    }

  }

  if(contador >= MAX_SEDES_PROMOTOR){

    return {
      success:false,
      mensaje:"Máximo 4 sedes"
    };

  }

  sheet.appendRow([
    usuarioId,
    sede
  ]);

  return {
    success:true
  };

}

function guardarAuditoria(
  usuario,
  accion,
  detalle
){

  getAuditoriaSheet()
    .appendRow([
      obtenerFechaHora(),
      usuario,
      accion,
      detalle
    ]);

}




