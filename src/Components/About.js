import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import AboutImg from '../Photo/about.jpg'

export const About = () => {
    return(
       <Container style={{marginTop:'40px', marginBottom: '40px'}}>
            <Row>
                <Col md={5}>
                    <img src={AboutImg} height={350} alt='Workout way'/>
                </Col>
                <Col md={7}>
                    <h1>My workout way</h1>
                    <p>
                        Hi, my names is Malik. I've have been doing street workout for the past four years.
                        Even if you’re not quite sure what calisthenics is, you’ll have definitely seen it in action.
                        The ripped guy at your gym who's able to lift his whole upper-body above a pull-up bar
                        – that’s a muscle-up and he’s practising calisthenics.
                        The guy you saw on YouTube who’s turned himself into a human flag
                        by holding his body parallel to the ground, he’s doing calisthenics too,
                        and that guy you’ve seen doing dips in the park, yep, he's doing calisthenics too.
                        “Calisthenics is a form of fitness which utilises gravity and bodyweight leverage to challenge your fitness level.
                        </p>
                </Col>
            </Row>
       </Container>
    )
}