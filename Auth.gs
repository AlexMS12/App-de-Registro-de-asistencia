function login(usuario,password){

  const data =
    getUsuariosSheet()
    .getDataRange()
    .getValues();

  for(let i = 1; i < data.length; i++){

    const id = data[i][0];
    const nombre = data[i][1];
    const usuarioBD = data[i][2];
    const passwordBD = data[i][3];
    const rol = data[i][4];
    const estado = data[i][5];

    if(
      usuarioBD == usuario &&
      passwordBD == password &&
      estado == "Activo"
    ){

      return {
        success:true,
        id:id,
        nombre:nombre,
        rol:rol
      };

    }

  }

  return {
    success:false
  };

}