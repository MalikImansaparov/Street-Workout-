import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from 'react-bootstrap'
// import Slide1 from '../Photo/11.jpg'
import Slide2 from '../Photo/chap.jpg'
// import Slide3 from '../Photo/33.jpg'
import styled from "styled-components";

const Styles = styled.div`
 background: no-repeat;
   background-size: cover;
   }
   `


export class Slider extends React.Component{
render() {
     const images = [Slide2].map((name,index) => {
        return(
            <img
                src={name}
                className='d-block w-100'
                alt=''
                key={index}/>
        )
    })

    return(
        <Styles>
            <Carousel >
                <Carousel.Item style={{'height': '650px'}}>
                    {images}
                    <Carousel.Caption >
                        <h1 >Street Workout</h1>
                        <h4> Welcome to the world of hard training</h4>
                    </Carousel.Caption >
                </Carousel.Item>
            </Carousel>
        </Styles>

    )
}}