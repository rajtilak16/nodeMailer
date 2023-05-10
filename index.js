const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport')

const transport = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: 'yourAPIkey'
    }
}))
 
transport.sendMail({
    from: '<email>',
    to: '<email>',
    subject: 'Hello ✔',
    text: 'Hello world ✔ from nodejs',
    html: '<b>Hello world ✔</b> from nodejs'
}).then(
    console.log("Email Sent")
).catch(err =>  {
    console.log(err)
}
)
 