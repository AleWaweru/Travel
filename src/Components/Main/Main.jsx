import React,{useEffect} from "react";
import "./main.css";


import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img from'../../Assets/img (1).jpg'
import img2 from'../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpg'
import img7 from '../../Assets/img(7).jpg'
import img8 from '../../Assets/img(8).jpg'
import img9 from '../../Assets/img(9).jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "The epitome of romance, The undescribeable theme of love.Bora Bora gives you the chance to explore nature and enjoy adventure. ",
  },
  {
      id: 2,
      imgSrc: img2,
      destTitle: "Lagos",
      location: "Nigeria",
      grade: "Cultural Relax",
      fees: "$900",
      description:
        "The epitome of romance, The undescribeable theme of love.Lagos gives you the chance to explore nature and enjoy adventure. ",
    },
    {
      id: 3,
      imgSrc: img3,
      destTitle: "Manilla",
      location: "Philipines",
      grade: "Cultural Relax",
      fees: "$700",
      description:
        "The epitome of romance, The undescribeable theme of love.Manilla gives you the chance to explore nature and enjoy adventure. ",
    },
    {
      id: 4,
      imgSrc: img4,
      destTitle: "Istanbul",
      location: "Turkey",
      grade: "Cultural Relax",
      fees: "$1800",
      description:
        "The epitome of romance, The undescribeable theme of love.Istanbul gives you the chance to explore nature and enjoy adventure. ",
    },
    {
      id: 5,
      imgSrc: img5,
      destTitle: "Jerusalem",
      location: "Israel",
      grade: "Cultural Relax",
      fees: "$1500",
      description:
        "The epitome of romance, The undescribeable theme of love.Jerusalem gives you the chance to explore nature and enjoy adventure. ",
    },
    {
      id: 6,
      imgSrc: img6,
      destTitle: "Cape Town",
      location: "South Africa",
      grade: "Cultural Relax",
      fees: "$1000",
      description:
        "The epitome of romance, The undescribeable theme of love.Cape Town gives you the chance to explore nature and enjoy adventure. ",
    },
    {
      id: 7,
      imgSrc: img7,
      destTitle: "Cairo",
      location: "Egypt",
      grade: "Cultural Relax",
      fees: "$1200",
      description:
        "The epitome of romance, The undescribeable theme of love.Cairo gives you the chance to explore nature and enjoy adventure. ",
    },
    {
      id: 8,
      imgSrc: img8,
      destTitle: "Daresalam",
      location: "Tanzania",
      grade: "Cultural Relax",
      fees: "$900",
      description:
        "The epitome of romance, The undescribeable theme of love.Daresalam gives you the chance to explore nature and enjoy adventure. ",
    },
    {
      id: 9,
      imgSrc: img9,
      destTitle: "Malindi",
      location: "Kenya",
      grade: "Cultural Relax",
      fees: "$1000",
      description:
        "The epitome of romance, The undescribeable theme of love.Malindi gives you the chance to explore nature and enjoy adventure. ",
    },
];

const Main = () => {

  useEffect(() =>{
    Aos.init({duration:2000})
}, []);


  
  return (
   <section className="main container section">

    <div className="secTitle">
        <h3 className="title">
            Most Visited Destinations
        </h3>
    </div>
     <div className="secContent grid">
        {
            Data.map(({id, imgSrc, destTitle, location,grade, fees, description})=>{
                return(
                    <div key={id}  data-aos="fade-up" className='singleDestination'>
                        <div className="imageDiv">
                            <img src={imgSrc} alt={destTitle} />
                        </div>

                        <div className="cardInfo">
                            <h4 className="destTitle">{destTitle}</h4>
                            <span className="continent flex">
                                <HiOutlineLocationMarker className="icon"/>
                                <span className="name">
                                    {location}
                                </span>
                            </span>
                            <div className="fees flex">
                                <div className="grade">
                                    <span>{grade}<small>+1</small></span>
                                </div>

                                <div className="price">
                                    <h5>{fees}</h5>
                                </div>
                            </div>

                            <div className="desc">
                                <p>{description}</p>

                            </div>

                            <div className='btn flex'>
                                DETAILS 
                                <HiOutlineClipboardCheck 
                                className='icon'/>

                            </div>


                        </div>


                    </div>
                )
            })
        }

     </div>

   </section>
  );
}
export default Main;
