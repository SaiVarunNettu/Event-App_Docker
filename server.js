const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <html>
            <head>
                <title>Docker Application</title>
            </head>
            <body>
                <h1>Hello from Docker!</h1>
                <p>
                    This application is running
                    inside a container.
                </p>
            </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});