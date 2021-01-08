import React from "react";
import {Slider} from "./Slider";
import History from '../Photo/history.jpg'
import Champ1 from '../Photo/1.jpg'
import Champ2 from '../Photo/2.jpg'
import Champ3 from '../Photo/3.jpg'
import {Container,Row,Col,Card,Button} from "react-bootstrap";
import Jumbotron from "./Jumbotron";
import {Link} from "react-router-dom";


export class Home extends React.Component{
    render() {
        return(
            <>
                <Slider/>
                <Container style={{paddingTop: '2rem',paddingBottom: '2rem'}}>
                    <Row>
                        <Col>
                            <Card style={{width: '18rem'}}>
                                <Card.Img src={Champ2} alt='img' variant='top'/>
                                <Card.Body>
                                    <Card.Title>WORLD FREESTYLE CHAMPIONSHIP 2019</Card.Title>
                                    <Card.Text>
                                        1. Daniels Laizans (LATVIA) – 79,5p
                                        2. Daniel Hristov (BULGARIA) – 77p
                                        3. Kirill Karabut (UKRAINE) – 74p</Card.Text>
                                    <Button variant='warning'>
                                        <Link to='/champ' style={{ textDecoration: 'none',color:'white' }}> Load more </Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '18rem'}}>
                                <Card.Img src={Champ1} style={{height:'190px'}} variant='top'/>
                                <Card.Body>
                                    <Card.Title>WORLD FREESTYLE CHAMPIONSHIP 2018</Card.Title>
                                    <Card.Text>
                                        1. Gohan San (FRANCE) – 96<br/>
                                        2. Allendes Orellana (CHILE) – 95<br/>
                                        3. Eroteev Stefan (BULGARIA) – 88</Card.Text>
                                    <Button variant='warning'>
                                        <a style={{ textDecoration: 'none',color:'white' }} href='https://wswcf.org/competitions_archive/world-freestyle-championship-2018'>Load more</a>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '18rem'}}>
                                <Card.Img src={Champ3} variant='top'/>
                                <Card.Body>
                                    <Card.Title>WORLD FREESTYLE CHAMPIONSHIP 2017</Card.Title>
                                    <Card.Text>
                                        1.Daniels Laizans (Latvia) 52
                                        2.Viktor Kamenov (Bulgaria) 51
                                        3.Engku Mohd (Malaysia) 49
                                    </Card.Text>
                                    <Button variant='warning'>
                                        <a style={{ textDecoration: 'none',color:'white' }} href='https://wswcf.org/competitions_archive/world-freestyle-championship-2017'>Load more</a>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Jumbotron/>
                <Container style={{marginTop: '30px', marginBottom: '30px'}}>
                    <Row>
                        <Col md={6} >
                            <img src={History} height={300}/>
                        </Col>
                        <Col md={6}>
                            <h2>History Street Workout</h2>
                            <p>
                                At the beginning of the 21st century, classic exercises were modified and combined
                                with elements from other sports. The starting point of the whole was New York.
                                Through the sports parks there, people could do their workout without fitness studios.
                                Sport or workout parks consist mostly of different pull-up bars, bars and hammocks,
                                so that training is mainly with one's own body weight.

                                Different groups developed their own style by combining classical calisthenics with
                                exercises from gymnastics, break dance, hip hop and freerunning, or to develop
                                new movements themselves. These groups presented videos of the novel form of calisthenics
                                on the internet and thus triggered a regular boom, especially in Eastern Europe.

                                In 2011 the first World Championship for Calisthenics / Street Workout in Riga was held.
                                The WSWCF is the World Street Workout and Calisthenics Federation. Since then,
                                a world championship has been held every year.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </>

        )
    }
}