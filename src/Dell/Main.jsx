import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Main() {
    return (
        <div className="main-dell">
            <Container>
                <Row>
                    <Col md='6'>
                        <div className="one">
                            <img className='img-fluid' src="./images/dell/dell_studio_xps_8000_bw_highres.jpg" />
                            <h1>THE BEST</h1>
                            <h4>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                                Id quam explicabo placeat esse reprehenderit, <br />
                                libero quidem repellat ducimus quaerat eos.
                            </h4>
                        </div>
                    </Col>
                    <Col md='6'>
                        <div className="two">
                            <img className='img-fluid' src="./images/dell/61d6d7e7ac117f8a7d5f9412aefd87d8-hi.jpg" />
                            <h1>THE BEST</h1>
                            <h4>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                                Id quam explicabo placeat esse reprehenderit, <br />
                                libero quidem repellat ducimus quaerat eos.
                            </h4>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>

    )
}
