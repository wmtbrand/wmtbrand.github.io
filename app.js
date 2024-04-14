const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // send HTML file on GET request
});

app.get('/:file.html', (req, res) => {
    //console.log(req.params);
    const filePath = __dirname + '/' + req.params.file + '.html';
    res.sendFile(filePath);
});

app.get('/:folder/:file', (req, res) => {
    //console.log(req.params);
    const filePath = __dirname + '/' + req.params.folder + '/' + req.params.file;
    //console.log(filePath);
    res.sendFile(filePath);
  });

  /*
app.post('/submit-form', (req, res) => {
    const fullName = req.body.fullName; // access form data
    const email = req.body.emailAddress;
    const message = req.body.message;
    // Add validation logic here
    console.log(`Full Name: ${fullName}\nEmail Address: ${email}\nMessage:${message}`);
    //res.send(`Username is $wbrand5`);
    //req.flash("msg","Error Occured");
    //res.locals.messages = req.flash();
    //res.redirect('/');
    res.send('alert("hello");');
});
*/

app.post('/submit', (req, res) => {
    console.log(req.body);

    const fullName   = req.body.name; // access form data
    const email      = req.body.email;
    const message    = req.body.message;
    // Add validation logic here
    console.log(`Full Name: ${fullName}\nEmail Address: ${email}\nMessage:${message}`);

    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});