const getGmailAliasList = () => {
//  var aliases = GmailApp.getAliases();
//  aliases.push(Session.getActiveUser().getEmail());
//  return aliases;

  return [Session.getActiveUser().getEmail(),...GmailApp.getAliases()];
};

export default getGmailAliasList;