import http from 'http'
const PORT = process.env.PORT || 4000

const httpServer = http.createServer()

httpServer.listen(PORT, () => {
    console.log(`🚀 server running on port ${PORT}`)
})