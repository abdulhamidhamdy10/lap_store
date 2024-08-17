import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Header() {
    return (
        <div>
            <div className="">
                <Container fluid>
                    <Row>
                        <Col md='12' className=' header-apple mr-auto ml-auto text-center'>
                            <h1 data-wow-delay="0.4s" className="wow bounceInDown">
                                MacBook Air
                            </h1>
                            <h4 data-wow-delay="0.2s" className=" span3 wow bounceInRight">
                                Strikingly thin and fast so you can work, play, or create anywhere. suscipit
                                mollitia.
                            </h4>
                            <a href="#">
                                
                                <h2 data-wow-delay="0.2s" className="span3 wow bounceInLeft">
                                    more &gt;
                                </h2>
                            </a>
                        </Col>
                    </Row>
                </Container>

            </div>

        </div>
    )
}
