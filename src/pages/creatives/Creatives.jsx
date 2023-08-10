import "./creatives.css"
import Footer from '../../components/Footer'
import SectionHead from '../../components/SectionHead'
import{FaCrown} from 'react-icons/fa'
import Podcast from '../../components/Podcast'


const Cmain = () => {
  return (
    <>
    <section id='contact'>
    <div className="container Contact__container">
       <SectionHead icon={<FaCrown/>} title="Creatives"/>
       </div>
       <div className="container__creative">
        <div className="web__continer">
    <p className="container__Pargraph">
      <h3>Poem Title</h3>
      GeeksforGeeks: A Computer Science portal for geeks. 
        It contains well written, well thought and well explained
        computer science, programming articles and quizzes. 
        It provides a variety of services for you to learn, so thrive
        and also have fun! Free Tutorials, Millions of Articles, Live, 
        Online and Classroom Courses ,Frequent Coding Competitions,
        Webinars by Industry Experts, Internship opportunities, and Job
        Opportunities. Knowledge is power!
        <div class="bottom">
          <a href="https://youtu.be/t5rBx86Noa0">Read more</a>
          </div>
    </p>

    <p className="container__Right">
      <h3>Poem Title</h3>
        GeeksforGeeks: A Computer Science portal for geeks. 
        It contains well written, well thought and well explained
        computer science, programming articles and quizzes. 
        It provides a variety of services for you to learn, so thrive
        and also have fun! Free Tutorials, Millions of Articles, Live, 
        Online and Classroom Courses ,Frequent Coding Competitions,
        Webinars by Industry Experts, Internship opportunities, and Job
        Opportunities. Knowledge is power!
        <div class="bottom">
          <a href="https://youtu.be/t5rBx86Noa0">Read more</a>
          </div>
    </p>

    <p className="container__bottom-Pargraph">
      <h3>Poem Title</h3>
      GeeksforGeeks: A Computer Science portal for geeks. 
        It contains well written, well thought and well explained
        computer science, programming articles and quizzes. 
        It provides a variety of services for you to learn, so thrive
        and also have fun! Free Tutorials, Millions of Articles, Live, 
        Online and Classroom Courses ,Frequent Coding Competitions,
        Webinars by Industry Experts, Internship opportunities, and Job
        Opportunities. Knowledge is power!
        <div class="bottom">
          <a href="https://youtu.be/t5rBx86Noa0">Read more</a>
          </div>
    </p>
    </div>
    </div>
    { <Podcast /> }
       </section>
      
       <Footer />
       </>      
      
   
  )
}

export default Cmain