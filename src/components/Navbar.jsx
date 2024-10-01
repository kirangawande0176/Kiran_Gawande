import '../index.css'
import BG from '../assets/bg.jpg'
import KIRANGAWANDE from '../assets/KIRANGAWANDE.jpg'
import Netflix from '../assets/SS/Netflix.png'
import CalculatorImage from '../assets/SS/Calculator-Project.png'
import DiceGame from '../assets/SS/Dice-Game.png'
import Dropbox from '../assets/SS/Dropbox_Website.jpg'
import LandRover from '../assets/SS/LandRover-Website.png'
import git from '../assets/Icons/github.png'
import gmail from '../assets/Icons/google.png'
import instagram from '../assets/Icons/instagram.png'
import LinkedIn from '../assets/Icons/linkedin.png'
import whatsapp from '../assets/Icons/whatsapp.png'
import youtube from '../assets/Icons/youtube.png'



export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar px-5 px-3 mb-3 fixed-top"
        id="navbar-example2"
      >
        <a
          className="navbar-brand"
          href="#"
        >
          <h3 href="#scrollspyHeading1"> <span id='main_name1'>KIRAN</span> <span id='main_name2'>GAWANDE</span> </h3>
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#scrollspyHeading1"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#scrollspyHeading2"
            >
              About
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="#scrollspyHeading3"
            >
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="#scrollspyHeading4"
            >
              Contact
            </a>
          </li>


        </ul>
      </nav>
      <div
        className="scrollspy-example bg-body-tertiary p-3 rounded-2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        tabIndex="0"
      >

        {/* Home  */}

        <div className='container-fluid' id='home-div'>
          <h4 id="scrollspyHeading1">
            <h1 id='heading-text' >HEY, I'M KIRAN GAWANDE</h1>
            <h5 className='pt-5 w-75 m-auto'>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</h5>

            <a className="nav-link mt-5 m-auto p-1" id='scroll-link' href="#scrollspyHeading3" > Projects </a>
          </h4>



        </div>

        <div>

          <h4 className='main-box' id="scrollspyHeading2">
            <span className='subheading-text'>About</span>

            <div className='row'>
              <div className="col  bg-info">
                <h5>Get to know me!</h5>
                <p>
                  I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.

                  I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming

                  I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.

                  <a id='scroll-link2' className="nav-link p-1 m-auto  " href="#scrollspyHeading4" >
                    Contact  </a>
                </p>
              </div>
              <div className="col  bg-warning" >
                <h5>My Skills</h5>

                <div className='d-flex flex-nowrap mt-3 w-75 m-auto '>
                  <span className='skills-btn px-3 rounded-3 mx-2'>1</span>
                  <span className='skills-btn px-3 rounded-3 mx-2'>2</span>
                  <span className='skills-btn px-3 rounded-3 mx-2'>3</span>
                  <span className='skills-btn px-3 rounded-3 mx-2'>4</span>
                  <span className='skills-btn px-3 rounded-3 mx-2'>5</span>
                  <span className='skills-btn px-3 rounded-3 mx-2'>6</span>
                  <span className='skills-btn px-3 rounded-3 mx-2'>7</span>
                  <span className='skills-btn px-3 rounded-3 mx-2'>8</span>

                </div>

                {/* modals start work experience  */}


                <div>

                  {/* <div>
                    <button
                      className="btn btn-primary"
                      data-bs-target="#staticBackdrop"
                      data-bs-toggle="modal"
                      type="button"
                    >
                      Front End Web Developer
                    </button>
                    <div
                      aria-hidden="true"
                      aria-labelledby="staticBackdropLabel"
                      className="modal fade modal fademodal-dialog modal-dialog-centered modal-dialog-scrollable"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      id="staticBackdrop"
                      tabIndex="-1"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="staticBackdropLabel"
                            >
                              Oneroof Technologies Mulund
                            </h1>
                            <button
                              aria-label="Close"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              type="button"
                            />
                          </div>
                          <div className="modal-body">
                            <span>  June 2024 - October 2024  </span>
                            <p> <h3 className='fw-bold'> Front End Web Developer Intern </h3>
                              I have 3 Months of intern Experience in Front End Web Developer and having Good
                              knowledge of HTML, CSS, Bootstrap, JavaScript And React js. I have completed many
                              tasks using this Technology.   </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                              type="button"
                            >
                              Close
                            </button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}




                </div>


              </div>
            </div>
          </h4>

        </div>

        <div>
          <h4 className='main-box' id="scrollspyHeading3">
            <span className='subheading-text'>Projects</span>


            <div
              className="carousel slide mb-5 mt-2 "
              data-bs-ride="carousel"
              id="carouselExampleInterval"
            >
              <div className="carousel-inner">
                <div
                  className="carousel-item active"
                  data-bs-interval="3000"
                >
                  <img
                    alt="..."
                    className="d-block w-100"
                    src={Dropbox}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>
                      First slide label
                    </h5>
                    <p>
                      Some representative placeholder content for the first slide.
                    </p>
                  </div>
                </div>
                <div
                  className="carousel-item active"
                  data-bs-interval="3000"
                >
                  <img
                    alt="..."
                    className="d-block w-100"
                    src={DiceGame}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>
                      First slide label
                    </h5>
                    <p>
                      Some representative placeholder content for the first slide.
                    </p>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  data-bs-interval="2000"
                >
                  <img
                    alt="..."
                    className="d-block w-100"
                    src={LandRover}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>
                      First slide label
                    </h5>
                    <p>
                      Some representative placeholder content for the first slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    alt="..."
                    className="d-block w-100"
                    src={Netflix}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>
                      First slide label
                    </h5>
                    <p>
                      Some representative placeholder content for the first slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    alt="..."
                    className="d-block w-100"
                    src={CalculatorImage}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>
                      First slide label
                    </h5>
                    <p>
                      Some representative placeholder content for the first slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                data-bs-slide="prev"
                data-bs-target="#carouselExampleInterval"
                type="button"
              >
                <span
                  aria-hidden="true"
                  className="carousel-control-prev-icon"
                />
                <span className="visually-hidden">
                  Previous
                </span>
              </button>
              <button
                className="carousel-control-next"
                data-bs-slide="next"
                data-bs-target="#carouselExampleInterval"
                type="button"
              >
                <span
                  aria-hidden="true"
                  className="carousel-control-next-icon"
                />
                <span className="visually-hidden">
                  Next
                </span>
              </button>
            </div>


          </h4>

        </div>

        <div>

          <h4 className='bottom-box ' id="scrollspyHeading4">
            <div className="row">
              <div className="col">
                <span>KIRAN GAWANDE</span>
                <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
              </div>
              <div className="col">
                <span className='fw-bold text-black'>SOCIAL</span>
                <div className='mt-3'>
                  <a className='social-icons' href="https://www.github.com/kirangawande0176" target="_blank" rel="noopener noreferrer"> <img src={git} alt="git-hub" /> </a>
                  <a className='social-icons' href="https://www.linkedin.com/in/kiran-gawande-b3a965199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"> <img src={LinkedIn} alt="git-hub" /> </a>
                  <a className='social-icons' href="#" target="_blank" rel="noopener noreferrer"> <img src={instagram} alt="git-hub" /> </a>
                  <a className='social-icons' href="#" target="_blank" rel="noopener noreferrer"> <img src={whatsapp} alt="git-hub" /> </a>
                  <a className='social-icons' href="#" target="_blank" rel="noopener noreferrer"> <img src={youtube} alt="git-hub" /> </a>


                </div>
              </div>
            </div>
          </h4>

        </div>
      </div>
    </div>

  )
}




