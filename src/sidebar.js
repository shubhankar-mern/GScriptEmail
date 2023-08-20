import getGmailAliasList from "./alias";

const showSidebar = () => {
 const template = HtmlService.createTemplateFromFile('index');
 template.aliases = getGmailAliasList();
 const html = template.evaluate().setTitle('Mailman');
 SpreadsheetApp.getUi().showSidebar(html);
};

export default showSidebar;