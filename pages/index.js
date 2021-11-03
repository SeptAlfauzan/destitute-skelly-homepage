
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Team from '../components/team'
import AboutUs from '../components/about-us'
import GamePlay from '../components/gameplay'
import ProgressContainer from '../components/progress-container'
import HomeComp from '../components/home'

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <HomeComp />
      <ProgressContainer />
      <GamePlay />      
      <AboutUs />
      <Team />
    </Layout>
  )
}
