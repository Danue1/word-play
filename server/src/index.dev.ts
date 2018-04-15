import * as path from 'path'

import { App } from './App'

const envPath = path.join(__dirname, '../config/dev.env')
const app = new App({ envPath })

app.start()
