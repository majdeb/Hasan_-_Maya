function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  var data = e.parameter;

  sheet.appendRow([
    data.name || '',
    data.attending || '',
    data.guests || '',
    data.note || '',
    new Date()
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
