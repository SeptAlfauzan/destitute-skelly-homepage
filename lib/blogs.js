
import matter from 'gray-matter';
import fs from 'fs'
import path from 'path' 
import { remark } from 'remark';
import html from 'remark-html';



export async function getFilenames(arg = 'posts') {
    const pathDir =  path.join(process.cwd(), arg);
    const files = fs.readdirSync(pathDir)
    
    const res = files.map(file => {
        if(!file.includes('.md')) return false
        const id = file.replace('/\.md$/', '')
        const filePath = path.join(pathDir, file)
        console.log(filePath)
        // fs.readFileSync(filePath, 'utf-8')
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const FileContentParse = matter(fileContent)
        
        return{
            id,
            filePath,
            ...FileContentParse.data,
        } 
    })
    return res
}

export async function getFilecontent(filePath = 'C:\\Users\\alfau\\Documents\\coding_projects\\nextjs\\web-grafkom\\lib\\posts\\post1.md'){
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const FileContentParse = matter(fileContent)
    const processedContent = await remark().use(html).process(FileContentParse.content)
    const contentHtml = processedContent.toString()
    return {
        contentHtml
    }
}
