
import Layout from '../components/layout'
import Team from '../components/team'
import AboutUs from '../components/about-us'
import GamePlay from '../components/gameplay'
import ProgressContainer from '../components/progress-container'
import HomeComp from '../components/home'
import Aos from 'aos'
import { useEffect } from 'react'
import { getFilenames } from "../lib/blogs"
import ModalProgress from '../components/ModalProgress'
import Instalation from '../components/instalation'

export default function Home(props) {
  
  useEffect(()=>{
    Aos.init()
  }, [])

  if(!props.progress) return null
  if(!props.instalations) return null
  return (
    <Layout>
      <HomeComp />
      <ProgressContainer progress_data={props.progress}/>
      <GamePlay />
      <Instalation instalations_data={props.instalations}/> 
      <AboutUs />
      <Team />
    </Layout>
  )
}


export async function getStaticProps(){
  const progress = await getFilenames('posts/progress')
  const instalations = await getFilenames('posts/instalations')
  return {
      props: {
          // posts,
          progress,
          instalations,
      },
      revalidate: 1,
  }
}