import React, { useState } from 'react'
import ds from "./nav.module.css"
import ds1 from "./trail.module.css"
import ds2 from "./name.module.css"
import pic from "../images/v.jpeg"
import dsd from "./dot.module.css"
import dsf from "./followers.module.css"
import pic1 from "../images/p1.jpg"
import pic2 from "../images/p2.jpg"
import pic3 from "../images/p3.jpg"
import pic4 from "../images/p4.jpg"
import pic5 from "../images/p5.jpg"
import pic6 from "../images/p6.jpg"
import dsfol from "./following.module.css"

const Menu = () => {

  const [modal, setModal] = useState(false)

  const [modal1, setModal1] = useState(false)

  const [modal2, setModal2] = useState(false)

  const [modal3, setModal3] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  const toggleModal1 = () => {
    setModal1(!modal1)
  }

  const toggleModal2 = () => {
    setModal2(!modal2)
  }

  const toggleModal3 = () => {
    setModal3(!modal3)
  }

  return (
    <section id={ds.main}>

      <div className={ds.right}>
        <ul>
          <li onClick={toggleModal}>virat.kohli</li>
          <li><button> following </button></li>
          <li><button> message </button></li>
          <li><button> add </button></li>
          <li onClick={toggleModal1}>dot</li>
        </ul>
      </div>

      <div className={ds.left}>
        <ul>
          <li>1,492 posts</li>
          <li onClick={toggleModal2}>230M <span>followers</span></li>
          <li onClick={toggleModal3}>262 <span>following</span></li>
        </ul>
      </div>

      <div className={ds.bio}>
        <p>virat kohli</p>
        <p>Carpediem!</p>
        <p><a href="">one8.com</a></p>
      </div>


      {modal && (
        <div className={ds1.modal}>
          <div className={ds1.overlay} onClick={toggleModal}>
            <div className={ds1.modalcontent}>


              <section id={ds2.name}>

                <article>

                  <div className={ds2.image}>

                    <img src={pic} alt="" />

                    <h5>virat.kohli</h5>

                  </div>

                  <div className={ds2.acc}>

                    <h3>Account information</h3>

                    <p>To help keep our community authentic, we’re showing information about accounts that reach a lot of people or advertise on Instagram. </p>

                    <a href="">See why this information is important.</a>

                  </div>

                  <div className={ds2.info}>

                    <div>
                      <p>date joined</p>
                      <span>june 2015</span>
                    </div>

                    <div>
                      <p>account based in</p>
                      <span>india</span>
                    </div>

                    <div>
                      <p>former usernames</p>
                      <span>0</span>
                    </div>

                    <div>
                      <p>accounts with shared followers</p>
                      <span>1</span>
                    </div>

                  </div>

                  <p onClick={toggleModal}>cancel</p>

                </article>

              </section>

            </div>
          </div>
        </div>
      )}


      {modal1 && (
        <div className={ds1.modal}>
          <div className={ds1.overlay} onClick={toggleModal1}>
            <div className={ds1.modalcontent}>
              <section id={dsd.dotsec}>
                <article>

                  <div>
                    <p>block</p>
                  </div>
                  <div>
                    <p>restrict</p>
                  </div>
                  <div>
                    <p>report</p>
                  </div>
                  <div>
                    <p>embed</p>
                  </div>
                  <div>
                    <p>about this account</p>
                  </div>
                  <div>
                    <p>cancel</p>
                  </div>

                </article>
              </section>
            </div>
          </div>
        </div>
      )}


      {modal2 && (
        <div className={ds1.modal}>
          <div className={ds1.overlay} onClick={toggleModal2}>
            <div className={ds1.modalcontent}>
              <section id={dsf.foll}>
                <article>

                  <div className={dsf.head}>
                    <p>followers</p>
                  </div>

                  <span>Only virat.kohli can see all followers.</span>

                  <div className={dsf.div}>
                    <img src={pic1} alt="" />
                    <p>kaushal jacker</p>
                    <button>follow</button>
                  </div>

                  <div className={dsf.div}>
                    <img src={pic2} alt="" />
                    <p>swaranjal singh</p>
                    <button>follow</button>
                  </div>

                  <div className={dsf.div}>
                    <img src={pic3} alt="" />
                    <p>rohit sharma</p>
                    <button>follow</button>
                  </div>

                  <div className={dsf.div}>
                    <img src={pic4} alt="" />
                    <p>anushka sharma</p>
                    <button>follow</button>
                  </div>

                  <div className={dsf.div}>
                    <img src={pic5} alt="" />
                    <p>roshan singh</p>
                    <button>follow</button>
                  </div>

                </article>
              </section>
            </div>
          </div>
        </div>
      )}


      {modal3 && (
        <div className={ds1.modal}>
          <div className={ds1.overlay} onClick={toggleModal3}>
            <div className={ds1.modalcontent}>
              <section id={dsfol.foll}>
                <article>

                  <div className={dsfol.head}>
                    <p>following</p>
                  </div>

                  <div className={dsfol.sub}>
                    <p>people</p>
                    <p>hashtags</p>
                  </div>

                  <div className={dsfol.div}>
                    <img src={pic1} alt="" />
                    <p>kaushal jacker</p>
                    <button>following</button>
                  </div>

                  <div className={dsfol.div}>
                    <img src={pic2} alt="" />
                    <p>swaranjal singh</p>
                    <button>following</button>
                  </div>

                  <div className={dsfol.div}>
                    <img src={pic3} alt="" />
                    <p>rohit sharma</p>
                    <button>following</button>
                  </div>

                  <div className={dsfol.div}>
                    <img src={pic4} alt="" />
                    <p>archana yadav</p>
                    <button>following</button>
                  </div>

                  <div className={dsfol.div}>
                    <img src={pic5} alt="" />
                    <p>roshan singh</p>
                    <button>following</button>
                  </div>

                  <div className={dsfol.div}>
                    <img src={pic6} alt="" />
                    <p>anjali singh</p>
                    <button>following</button>
                  </div>

                </article>
              </section>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

export default Menu