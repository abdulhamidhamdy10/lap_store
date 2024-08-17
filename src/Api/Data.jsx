import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { Col, Container, Row } from 'reactstrap'
import ScrollToTop from "react-scroll-to-top";

export class Data extends Component {

    state = {
        contain_box: []
    }

    componentDidMount() {
        axios.get("/js/APi.json")
            .then((results) => {
                this.setState(
                    {
                        contain_box: results.data.recipes
                    }
                )
            })
    }
    render() {
        return (
            <div>
                <Navbar />

                <Container>
                    <Row>
                        {this.state.contain_box.map((item) =>

                            <Col md='4'>
                                <img src={item.image_url}  className='img-fluid'/>
                                <h1>{item.publisher}</h1>
                                <h4>{item.title}</h4>
                            </Col>

                        )}
                    </Row>
                </Container>
                <ScrollToTop  smooth />

            </div>
        )
    }
}

export default Data