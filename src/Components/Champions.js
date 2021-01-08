import React from "react";
import {Container, Table} from "react-bootstrap";

export const Champions = () => {
    return(
        <Container style={{marginTop: '50px', marginBottom: '50px'}}>
            <h1 style={{margin: '50px'}}>Top 8 winners - World Street Workout Championship</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>year</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Country</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>2011</td>
                    <td>Evgenee</td>
                    <td>Kozur</td>
                    <td>Ukraine</td>
                </tr>
                <tr>
                    <td>2012</td>
                    <td>Evgenee</td>
                    <td>Kocherga</td>
                    <td>Ukraine</td>
                </tr><tr>
                    <td>2013</td>
                    <td>Dias</td>
                    <td>Bidjiev</td>
                    <td>Kazakstan</td>
                </tr>
                <tr>
                    <td>2015</td>
                    <td>Eric</td>
                    <td>Romiro</td>
                    <td>France</td>
                </tr>
                <tr>
                    <td>2016</td>
                    <td> Hassannejad </td>
                    <td>Payam</td>
                    <td>Iran</td>
                </tr>
                <tr>
                    <td>2017</td>
                    <td>Daniel</td>
                    <td>Laizance</td>
                    <td>Latvia</td>
                </tr>
                <tr>
                    <td>2018</td>
                    <td>Gohan</td>
                    <td>San</td>
                    <td>France</td>
                </tr>
                <tr>
                    <td>2019</td>
                    <td>Daniel</td>
                    <td>Laizance</td>
                    <td>Latvia</td>
                </tr>
                </tbody>
            </Table>
        </Container>

    )
}