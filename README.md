# Formulário de Preenchimento do Google sheets através do Scripts

### Problema 

- Foi solicitado para realizar uma outra maneira de entrada de dados para uma planilha de acompanhamento da área onde atuo em relação a estrutura de rede.
- A necessidade veio por conta do tempo de preenchimento da planilha e validação dos campos.

### Solução
- Como a planilha era no Google Sheets, foi realizado uma pesquisa em relação a soluções mais práticas, tanto de macros quanto de apps e scripts fornecido pela Google.
- Por conta do GS (Google Scripts) utilizar JavaScript definimos dar continuidade no formulário através de HTML e JS para entrada de dados e incremento na planilha.

## :rocket: Instalação
1. Abra sua planilha do Google.
No menu superior, clique em "Extensões" -> "Apps Script".
2. Cole o código fornecido no arquivo Código.gs na janela do Google Apps Script.
3. Clique no simbolo de "+" e crie um arquivo "Form" na opção de HTML, copie o código do Form.html e cole no arquivo criado.
4. Salve o projeto clicando no ícone de disquete ou pressionando Ctrl + S.
5. Clique em implantar -> Nova implantação -> Clique na engrenagem -> App da Web -> Preencha os campos de sua escolha.
6. Após criar a implantação, no menu lateral da esquerda terá um ícone de relógio que você definirá suas Triggers ( Acionadores ), para assim que carregar a planilha no Google Sheets abrir o o formulário de preenchimento.
7. Acionadores -> Adicionar acionador -> Função "onOpen" -> Selecione a implantação que foi criada -> Origem do evento "Planilha"  -> Tipo de Evento ao Abrir

## :wrench: Funcionalidades 
### Form.html
- Coleta de Dados: A função `submitForm` recolhe os dados dos campos do formulário HTML e organiza esses dados em um objeto JavaScript (formData).
- Envio de Dados: Usa a API `google.script.run` para enviar o objeto formData para uma função no Google Apps Script (submitData), onde esses dados podem ser processados (por exemplo, inseridos em uma planilha).

### Código.gs
- `doGet()`: Gera e retorna uma página HTML quando solicitado, geralmente usado para web apps.
- `onOpen`: Mostra um formulário HTML como um diálogo modal toda vez que a planilha é aberta.
- `submitData`: Recebe dados do formulário e os adiciona como uma nova linha na planilha ativa.

### Tecnologias usadas
- Javascript
- HTML com Bootstrap
- Google Scripts

## :handshake: Colaboradores
<table>
  <th>
    <td align="center">
      <a href="http://github.com/BrunoAndradeDinis">
        <img src="https://avatars.githubusercontent.com/u/55500337?v=4" width="100px;" alt="Foto de Bruno de Andrade no GitHub"/><br>
        <sub>
          <b>Bruno de Andrade</b>
        </sub>
      </a>
    </td>
  </th>
  <th>
    <td align="center">
      <a href="http://github.com/Azrael-webdesign">
        <img src="https://avatars.githubusercontent.com/u/135350232?v=4" width="100px;" alt="Foto de Bruno de Andrade no GitHub"/><br>
        <sub>
          <b>Azrael-webdesign</b>
        </sub>
      </a>
    </td>
    </th>
</table>

  