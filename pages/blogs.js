import Layout from '../components/layout'
import { getFilenames } from "../lib/blogs"
// import fs from 'fs'
// import path from 'path' 

export default function Blogs(props){
    
    
    console.log(typeof props.posts2)
    if(!props.posts2) return;
    return(
        <Layout>
            <div className="min-h-screen flex items-center content-center justify-center">
                {props.posts2.map(data=> (
                    <div key={data.io}>
                        <div>{data.id}</div>
                        <div>{data.title}</div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

