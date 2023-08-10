import{FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import Youtube from './Youtube'

const Podcast = () => {
  return (
    <section className="programs">
    <div className="container programs__container">
           <SectionHead icon={<FaCrown/>} title="PODCAST"/>
        </div>
           <Youtube/>
           </section>
  )
}

export default Podcast