import fs from 'fs'
import path from 'path'

const pathDir =  path.join(process.cwd(), 'posts');

const getPath = () => pathDir
export const files = fs.readdirSync(pathDir)