[[GitHub Profile](https://img.shields.io/badge/GitHub-mqteooo317-black?style=for-the-badge&logo=github)](https://github.com/mqteooo317) [[GitHub Repo](https://img.shields.io/badge/Repo-real--time--chat--mateocollar-blue?style=for-the-badge&logo=github)](https://github.com/mqteooo317/real-time-chat-mateocollar) [[License](https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=for-the-badge)](https://opensource.org/licenses/Apache-2.0) [[Discord](https://img.shields.io/badge/Discord-XalTeam-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/BsaeV5tZWc)

A small sample project made by Jonas Mateo Collar showing how to use Socket.io and WebSockets. Built for novices and Jr devs from the XalTeam community and anyone who wants to learn real-time communication in Node.js.

See official [tutorial](https://socket.io/docs/v4/tutorial/introduction) of socket.io

# Technologies

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-4.x-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ESM-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

# Local Deploy

1. **Clone the repo**
```bash
git clone https://github.com/mqteooo317/real-time-chat-mateocollar.git
cd real-time-chat-mateocollar
```
2. *Install dependencies*
```bash
npm install
```
3. *Run the server*
```bash
npm run dev
```   
4. *Open in browser*
```bash
http://localhost:3000
```

---

## How it works

This project runs HTTP and WebSockets on the same port:

1. **User opens `localhost:3000`** → Express serves the `index.html` file. This is normal HTTP.
2. **The HTML loads and connects via WebSocket** → `io.on('connection')` triggers on the server for that user.
3. **User sends a message** → The frontend emits a `chat message` event through the WebSocket.
4. **Server receives it** → `socket.on('chat message')` catches the event.
5. **Server broadcasts to everyone** → `io.emit('chat message')` sends the message to all connected clients instantly.
6. **Connection recovery** → If a user loses internet for < 3s, `connectionStateRecovery` resends any messages they missed when they reconnect.

Key difference: HTTP is request/response. WebSockets keep a live connection so the server can push data to you without you asking first.

---

# Author

Jonas Mateo Collar

---

# License

Apache 2.0 - See the https://opensource.org/licenses/Apache-2.0 file for details.

---
