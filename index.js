const express = require('express');
const dotenv = require('dotenv');
const WebSocket = require('ws');
const https = require('https');
const fs = require('fs');

//Sources
const resource = dotenv.config({path:'.env'})
const PORT = resource.parsed.PORT

//Read certificates SSL
const privateKey = fs.readFileSync('key.pem', 'utf8');
const certificate = fs.readFileSync('cert.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };


const app = express();
app.use(express.json());

const server = https.createServer(credentials,app);
server.listen(PORT, () => {
    runn = {msg:"Servidor corriendo",port:PORT}
    console.log(runn);
});

const wss = new WebSocket.Server({ server });server

//Statement path's about API
app.get('/', (req, res) => {
    console.log("New client");
    client = {data:'OK'}
    res.send(client);
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'No data.' });
})

//LAUNCH WEBSOCKET
wss.on('connection', (ws) => {
    n = 0
    ws.on('message', (message) => {
        console.log('received: %s', message);
        ws.send(n)
        n++
    });

    ws.on('close',()=>{
        console.log('Client closed sesion');
    });

    ws.send('Sesion inited');
    console.log("New client");
});
