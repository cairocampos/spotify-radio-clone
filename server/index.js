import server from './server.js'

const PORT = 3000;

server
.listen(PORT)
.on('listening', () => console.log(`Server is running at port: ${PORT}`))