const SPREADSHEET_ID =
'1X5PM5EFiY_x7lXvQskGZW-sh9h7ugUhAA_ywzgzLkhM';

const DRIVE_FOLDER_ID =
'1TDVzq4_bmg0-W1YHv6R7UCao-73fQon0';

const MAX_SEDES_PROMOTOR = 4;
const RADIO_DEFAULT = 200;

function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index');
}

function getDB() {
  return SpreadsheetApp
    .openById(SPREADSHEET_ID);
}

function getUsuariosSheet() {
  return getDB()
    .getSheetByName('Usuarios');
}

function getSedesSheet() {
  return getDB()
    .getSheetByName('Sedes');
}

function getPromotorSedesSheet() {
  return getDB()
    .getSheetByName('PromotorSedes');
}

function getMarcacionesSheet() {
  return getDB()
    .getSheetByName('Marcaciones');
}

function getAuditoriaSheet() {
  return getDB()
    .getSheetByName('Auditoria');
}

function getFolderFotos() {
  return DriveApp
    .getFolderById(DRIVE_FOLDER_ID);
}

function generarID(prefijo) {

  return prefijo +
    new Date().getTime();

}

function obtenerFechaHora() {

  return Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    'dd/MM/yyyy HH:mm:ss'
  );

}
