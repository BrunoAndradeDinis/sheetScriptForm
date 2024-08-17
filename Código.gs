function doGet(){
  let form = HtmlService.createHtmlOutputFromFile("Form") // Criando o HTML para página externa
  return form
}

// Função que identifica quando abre a planilha para gerar o forms de preenchimento
function onOpen() {
    var ui = SpreadsheetApp.getUi(); // lib para gerar a janela de preenhcimento 
    var htmlOutput = HtmlService
      .createHtmlOutputFromFile('Form')
      .setWidth(900)
      .setHeight(1200);
    ui.showModalDialog(htmlOutput, 'Formulário de Preenchimento');
  }
  
// Pegando os dados e passando para a planilha
function submitData(formData) { 
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    // pegando os dados do formulário e colocando num array para preenchimento da planilha
    sheet.appendRow([formData.filial, formData.regional, formData.numeroTicket, formData.dtAbCh, formData.tuneis, formData.status, formData.dtFecCh, formData.thread, formData.timeResponsavel, formData.obs]); // adicionando os dados conforme os campos.
  }
  