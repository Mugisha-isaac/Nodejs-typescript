/**
 * Required External Modules
 */


import * as dotenv from 'dotenv'

dotenv.config()


/**
 * App Variables
 */

if (!process.env.port) process.exit(1)

const PORT: number = parseInt(process.env.port)
