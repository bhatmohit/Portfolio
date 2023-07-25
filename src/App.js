import logo from './logo.svg';
import './App.css';
import './Slider.css';
import './Timeline.css';
import {useState} from 'react';
import Skills from './Skills.js';
import Contact from './Contact/Contact.js';
import Introduction from './Introduction/Introduction';
import Timeline from './Timeline/Timeline';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {fainsta} from '@fortawesome/free-regular-svg-icons'
import 'font-awesome/css/font-awesome.min.css';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
// import myimage from './My_photo.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import htmlimg from './../images/html5.png';


const sql = process.env.PUBLIC_URL + '/images/sql_background.png';
const coding = process.env.PUBLIC_URL +'/images/coding.png';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Description of Project One...',
    date: '2023-07-15',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description of Project Two...',
    date: '2023-08-05',
  },
  // Add more projects to the array
];

function App() {
  const [docName, setDocName] = useState('');
  const [docType, setDocType] = useState('');
  const [category, setCategory] = useState('');
  const [email, setEmail] = useState('');
  const [percent, setPercent] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);



  // const onChange(variable, )
  const imageUrls = [
    '/images/coding.png',
    {coding},
    {sql},
    // Add more image URLs here
  ];



  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imageUrls.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + imageUrls.length) % imageUrls.length);
  };
  


  return (
    <>
      <nav className='navbar'>
      {/* <a href='#home'>Home</a> */}
      <a href="#intro">About Me</a>
      <a href='#experience'>Experience</a>
      <a href='#skills'>Skills</a> 
      <a href='#timeline'>Projects</a> 
      <a href='#contact'>Contact</a>      
      </nav>
      <div className='main'>
        {/* <section id='home'>
          <h2>Howdy!</h2>
          

          <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="slide" style={{ backgroundImage: `url(${imageUrl})` }} />
        ))}
      </div>
      <button className="prev-button" onClick={prevSlide}>&#10094;</button>
      <button className="next-button" onClick={nextSlide}>&#10095;</button>
    </div>

        </section> */}
      <section id="intro">
        <h2>ABOUT ME</h2>
        <div className="introcontainer">
          <img src='images/my_pic.jpg'></img>
          {/* <img src={my_image}></img> */}
          <div className='intro-content'> 
          <p>Howdy! I am <strong>Mohit Bhat</strong></p>
          {/* <p>A passionate programmer and currently a graduate student at Texas A&M University. I am a Software Developer with JavaScript, React.js and SQL as my core tech stack.
             In 2020, I completed my Bachelors in Computer Engineering and worked as a Software Developer for two years. 
             Developing real-world solutions that can transform the business through optimization and performance drives my motivation.
             I love learning about new technologies, using them to solve problems, and building better and scalable products.
          </p> */}
          <p>
          A technology enthusiast and currently a graduate student at Texas A&M University, my experience includes developing web applications for financial reporting, working with CRM databases, designing SQL procedures to implement role-based access control, and using CI/CD tools to configure pipelines and automate application deployments.
<br/><br/>
Technical Forte: <br/>
<strong>Programming:</strong> Python, SQL, JavaScript, HTML, CSS, Shell Scripting <br/>
<strong>Libraries:</strong> Pandas, NumPy, Matplotlib, Scikit-learn, React.js <br/>
<strong>Tools:</strong> Jupyter, Colab, Ansible, Jenkins, Github, AWS EC2, AWS IAM, Tableau <br/>
          </p>
          <div className='introbuttons'>
            <a href='#contact'>
              <button>Let's Connect!</button>
            </a>
            <a href='https://drive.google.com/file/d/1THpBHXpjlQ9g6GSs-ucqDUa0A1-9QEtN/view?usp=sharing' target="_blank">
              <button>My Resume</button>
            </a>
          </div>
          </div>
        </div>
      </section>
      
      <section id='experience'>
      <h2>EXPERIENCE</h2>
      <div className='wrapper'>
      <div className='experiencecontainer'>
      <div className='experiencecard'>
       <img src='images/nomura.png'></img>
       <h4>Technology Analyst</h4>
       <p>
        <ul>
       <li>Built a new module to implement excel download of reports and search filters in MIS-X, a global reporting application developed using ReactJS and .NET Core, which facilitated reporting procedures by 60%</li>  
       <li>Created Access Control List for Essbase dimensions based on roles assigned to users and implemented least access privilege using PL/SQL procedures, enhancing security by 80%</li>
       <li>Solved more than 20 production issues through exploratory data analysis and data correction</li>
       <li>Enhanced MIS EMEA application to include new reports as per user requests. Used .NET to run MDX queries, fetch data and send email reports to users</li>
       <li>Analyzed patterns in existing feed files and designed shell scripts to generate new audit feeds for Essbase</li>
       <li>Automated the deployments of Hyperion Essbase application thus speeding deployments by 75%</li>  
       <li>Collaborated with around 10 stakeholders, including cross-functional teams and application owners to implement Identity Access Management for the reporting application</li>
       </ul>
       </p>
      </div>
      </div>
      </div>
      <div className='experiencecontainer'>
      {/* <br></br> */}
      <div className='experiencecard'>
       <img src='images/nomura.png'></img>
       {/* <img src={nomura}></img> */}
       <h4>Technology Analyst Intern</h4>
       <p>
        <ul>
          <li>Integrated JSON Web Token authentication in an application developed in the Expense processing department with ReactJs and .NET Core Web API</li>
          <li>Enhanced JADEN (Jenkins Ansible Deployment for Nomura) - a generic DevOps library built using Python, Jenkins and Ansible to streamline the pipelines of 80% of the applications within the Corporate Technology Services Department</li>
        </ul>
       </p>
      </div>
      </div>
      </section>
      
      <section id='skills'>
        <h2>SKILLS</h2>
      
        {/* <div className="skillscontainer" style={{justifyContent: 'space-between', width: '75vw', margin: 0}}> */}
        <div className='skillscontainer'>
        <div className='skillscard'>
          <h5>Frontend</h5>
          <p>
            <ul>
              <li><img src='images/html5.png'></img> HTML5</li>
              <li><img src='images/css3.png'></img>CSS3</li>
              <li><img src='images/JS.png'></img>JavaScript</li>
              <li><img src='images/react.png'></img>ReactJS</li>
            </ul>
          </p>
        </div>
        <div className='skillscard'>
          <h5>Databases</h5>
          <p>
            <ul>
              <li><img src='images/mariadb.png'></img>MariaDB</li>
              <li><img src='images/mysql.png'></img>MySQL</li>
              <li><img src='images/oracle.png'></img>Oracle</li>
              <li><img src='images/postgresql.png'></img>PostgreSQL</li>
            </ul>
          </p>
        </div>
        </div>
        {/* <div className="skillscontainer" style={{justifyContent: 'space-between', marginLeft: '25vw', width: '75vw'}}> */}
        <div className='skillscontainer'>
        <div className='skillscard'>
          <h5>Programming Languages</h5>
          <p>
            <ul>
              <li><img src='images/JS.png'></img>JavaScript</li>
              <li><img src='images/sql.png'></img>SQL</li>
              <li><img src='images/bash.png'></img>Bash Scripting</li>
              <li><img src='images/python.png'></img>Python</li>
              {/* <li><img src='/images/git.png'></img>Git</li> */}
            </ul>
          </p>
        </div>
        <div className='skillscard'>
          <h5>Tools and Frameworks</h5>
          <p>
            <ul>
              <li><img src='images/ansible.png'></img>Ansible</li>
              <li><img src='images/jenkins.png'></img>Jenkins</li>
              <li><img src='images/react.png'></img>ReactJS</li>
              <li><img src='images/aws.png'></img>AWS</li>
              <li><img src='images/git.png'></img>Git</li>
            </ul>
          </p>
        </div>
        
      </div>
      </section>

      <section id="timeline">
      {projects.map((project) => (
        <div key={project.id} className="timeline-item">
          <div className="timeline-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.date}</span>
          </div>
        </div>
      ))}
    </section>


      <section id='contact'>
        <h2>LET'S CONNECT!</h2>
        <div className='contactcontainer'>
          {/* <ul>
            <li><img src='images/gmail.png'></img>Gmail</li>
            <li><img src='images/linkedin.png'></img>LinkedIn</li>
            <li><img src='images/insta.png'></img>Instagram</li>
            <li><img src='images/github.png'></img>Github</li>
          </ul> */}
          <a href='mailto:bhatmohit070@gmail.com'>
            <button>
              {/* <i><FontAwesomeIcon icon={faEnvelope} /></i> */}
              <i class="fas fa-envelope-square"></i>
              Email Me
            </button>
          </a>
          <a href='https://www.linkedin.com/in/bhatmohit/' target="_blank">
            <button>
              {/* <i><FontAwesomeIcon icon={faLinkedIn} /></i> */}
              <i class="fab fa-linkedin"></i>
              LinkedIn
            </button>
          </a>
          <a href='https://github.com/bhatmohit' target="_blank">
            <button>
              {/* <i><FontAwesomeIcon icon={faGithub} /></i> */}
              <i class="fab fa-github-square"></i>
              Github
            </button>
          </a>
          <a href='https://www.instagram.com/bhatmohit0_0' target='_blank'>
            <button>
              {/* <i><FontAwesomeIcon icon={faInstagram} /></i> */}
              <i class="fab fa-instagram-square"></i>
              Instagram
            </button>
          </a>
        </div> 
      </section>
      </div>
      </>
  );
}

export default App;
