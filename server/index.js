import server from './server.js'
import { loggger } from './util.js'

const PORT = 3000;

server
.listen(PORT)
.on('listening', () => loggger.info(`Server is running at port: ${PORT}`))