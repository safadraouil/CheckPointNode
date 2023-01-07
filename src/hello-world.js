//2

var http = require("http");
var fs = require("fs");
var url = require("url");
var generator = require("generate-password");
var nodemailer = require("nodemailer");
// Create a server
http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Hello Node!!!!</h1>");
    response.end();
  })
  .listen(3000);

//3.1

fs.writeFile("welcome.txt", "Hello Node", function (err, response) {
  if (err) {
    console.error("error1");
  } else {
    console.log("It's Ok");
  }
});

//3.2

fs.readFile("welcome.txt", function (err, response) {
  if (err) {
    console.error("error2");
  } else {
    console.log(response.toString());
  }
});

//4

var passwords = generator.generateMultiple(1, {
  length: 10,
  uppercase: false,
  strict: true,
  symbols: true,
});

console.log(passwords);

//5

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "draouilsafa@gmail.com",
    pass: "*************",
  },
});

var mailOptions = {
  from: "draouilsafa@gmail.com",
  to: "draouilsafa@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
