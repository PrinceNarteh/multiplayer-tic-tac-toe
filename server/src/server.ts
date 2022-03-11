import {createServer} from 'http'
import socket from './socket'
const PORT = process.env.PORT || 4000

const httpServer = createServer()
socket(httpServer)

httpServer.listen(PORT, () => {
    console.log(`🚀 server running on port ${PORT}`)
})