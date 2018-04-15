import * as path from 'path'

import { App } from './App'

const envPath = path.join(__dirname, '../config/prod.env')
const app = new App({ envPath })

app.start()
