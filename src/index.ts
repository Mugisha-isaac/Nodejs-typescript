/**
 * Required External Modules
 */
import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import { ItemsRouter } from './items/items.router'

dotenv.config()


/**
 * App Variables
 */

if (!process.env.port) process.exit(1)

const PORT: number = parseInt(process.env.port as string, 10)

const app = express()



/**
 * App configuration
 */

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use('/api/menu/item', ItemsRouter)


/**
 * Server Activation
 */

app.listen(() => {
    console.log(`Listening on port ${PORT}`)
})
