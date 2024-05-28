import Image from 'next/image'
import Home from '../app/Components/Pages/Home/page'
import Features from '../app/Components/Pages/Features/page'
import Discover from '../app/Components/Pages/Discover/page'
import MoreFeatures from '../app/Components/Pages/MoreFeatures/page'
import {motion} from 'framer-motion'
import Guide from '../app/Components/Pages/Guide/page'
import Gallery from '../app/Components/Pages/Gallery/page'
import FAQ from '../app/Components/Pages/FAQ/page'

export default function Page() {



  
  return (
    <div>
      <Home/>
      <Features/>
      <Discover/>
      <MoreFeatures/>
      <Guide/>
      <Gallery/>
      <FAQ/>

    </div>
  )
}
