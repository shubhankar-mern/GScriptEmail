const sendEmail = (data) =>{
const { from, to, subject, body } = data;

try {
    GmailApp.sendEmail(to, subject, body, {
        from
    })
} catch (f) {
    try {
        MailApp.sendEmail(to, subject, body, {
            from
        })
    } catch (error) {
        return `Error: ${e.toString()}`
    }
    
}
return `Email sent to ${to}`;
}


export default sendEmail;