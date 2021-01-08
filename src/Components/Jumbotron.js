import React from "react";
import {Jumbotron as Jumbo, Container} from "react-bootstrap";
import styled from "styled-components";
import Champ from '../Photo/22.jpg'

const Styles = styled.div`
.jumbo{
   background: url(${Champ}) no-repeat fixed bottom;
   background-size: cover;
   color: #efefef;
   height: 400px;
   position: relative;
   z-index: -2
   }
  .overlay{
   background-color:#000;
   opacity: 0.6;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   position: absolute;
   z-index: -1;
   }`;

const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className='jumbo'>
            <div className='overlay'></div>
            <Container>
                <h1>What is street workout?</h1>
                <p>
                    Street workout is a creative form of exercise combining elements of gymnastics and parkour.
                    The workout is suitable for almost anyone and can be done nearly anywhere.
                    You can train using your own body weight or different structures.
                    The key elements in Street Workout are handstands, pushups, dips, pullups,
                    hanging, and combinations of these.
                    Street Workout is a fun and interesting exercise trend that combines the muscle-building power of
                    calisthenics with the endurance-building power of athletics.
                    Instead of going to the gym to lift heavy weights,
                    Street Workout works on the principle of body weight training,
                    using your own weight for resistance.
                </p>
            </Container>
        </Jumbo>
    </Styles>

)
export default Jumbotron;