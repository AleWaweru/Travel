import React,{useEffect} from "react";
import "./footer.css";
import {MdOutlineTravelExplore} from 'react-icons/md'
import { FiSend } from "react-icons/fi";
import{AiOutlineTwitter} from "react-icons/ai"
import{AiOutlineYoutube} from "react-icons/ai"
import{AiFillInstagram} from "react-icons/ai"
import{FaTripadvisor} from "react-icons/fa"
import{FiChevronRight} from "react-icons/fi"

import video2 from "../../Assets/video (2).mp4";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(() =>{
    Aos.init({duration:2000})
}, []);

  return (
    <section   className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
        </div>

        <div className="secContent container">
          <div data-aos="fade-up" className="contactDiv flex">
            <div className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Travel with us</h2>
            </div>

            <div data-aos="fade-up" className="inputDiv flex">
              <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
            
            <button className="btn flex" type="submit">
              SEND
              <FiSend className="icon" />
            </button>
          </div>
      </div>
      <div className="footerCard flex">
        <div className="footerIntro flex">
            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <MdOutlineTravelExplore className='icon'/> 
                Travel.
                </a>
            </div><br></br>
            <div data-aos="fade-up" className="footerParagraph">
                Make sure to have fun, Dont grow old saving,have fun while young.
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className='icon'/>
              <AiOutlineYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>

            </div>
        </div>
        <div className="footerLinks grid">
        <div data-aos="fade-up" className="linkGroup">
          <span className="groupTitle">
            OUR AGENCY
          </span>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Services
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Insurance
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Agency
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Tourism
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Payment
          </li>

        </div>
        {/*group Two */}

        <div data-aos="fade-up" className="linkGroup">
          <span className="groupTitle">
            OUR PARTNERS
          </span>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Booking
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Rental Cars
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Hotel Reservation
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Camping
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Destination Consultancy
          </li>
        </div>

             {/*group Three */}

             <div data-aos="fade-up" className="linkGroup">
          <span className="groupTitle">
            LAST MINUTE
          </span>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
           London
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Texas
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Cairo
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Malindi
          </li>
          <li className="footerList flex">
            <FiChevronRight className='icon'/>
            Kilimanjaro
          </li>
        </div>


      </div> 
      <div className="footerDiv flex">
        <small>BEST TRAVEL WEBSITE </small><hr/>
        <small> COPYRIGHT RESERVED- @WAWERU2023. </small>

      </div>
      </div>
     

      </div>
    </section>
  );
}
export default Footer;
