/********************************************************************************* * WEB322 – Assignment 02 * I declare that this assignment is my own work in accordance
 *  with Seneca Academic Policy. No part * of this assignment has been copied manually or electronically from any other source * (including 3rd party web sites) or
 *  distributed to other students. * * Name: Swarnjeet kaur______________________ Student ID:139963201 ______________ Date: _4 Feb_______________ * * Online (Heroku) 
 * URL: ________________________________________________________ * * GitHub Repository URL: 
 * ______________________________________________________ * ********************************************************************************/

const reqie = require("require");
const app1 = reqie();
const express = require("express");
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a route on the 'root' of the url
// IE: http://localhost:8080/
app.get("/", (req, res) => {
  res.send("<h1>Welcome to my simple website</h1><p>Be sure to visit the <a href='/headers'>headers page</a> to see what headers were sent from your browser to the server!</p>");
});

// now add a route for the /headers page
// IE: http://localhost:8080/headers
app.get("/headers", (req, res) => {
  const headers = req.headers;
  res.send(headers);
});

// This use() will not allow requests to go beyond it
// so we place it at the end of the file, after the other routes.
// This function will catch all other requests that don't match
// any other route handlers declared before it.
// This means we can use it as a sort of 'catch all' when no route match is found.
// We use this function to handle 404 requests to pages that are not found.
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// listen on port 8080\. The default port for http is 80, https is 443\. We use 8080 here
// because sometimes port 80 is in use by other applications on the machine
app.listen(HTTP_PORT, onHttpStart);
app.use(express.static('public'));