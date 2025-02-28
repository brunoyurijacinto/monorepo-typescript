import { createServer } from "http"
import express, { Express } from "express"
import { testHandler } from "./testHandler"
import helmet from "helmet"
const port = 5100
const expressApp: Express = express()
expressApp.use(helmet())
expressApp.use(express.json())
expressApp.get("/test", testHandler)
expressApp.use(express.static("static"))
expressApp.use(express.static("node_modules/bootstrap/dist"))
const server = createServer(expressApp)

server.listen(port, () => console.log(`HTTP Server listening on port ${port})`))
