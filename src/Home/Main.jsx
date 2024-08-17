import React from 'react'
import { Col, Container, Row } from 'reactstrap'

export default function Main() {
  return (
    <div>
      <div className="main">
        <Container>
          <Row>
            <Col md='6'>
              <div className="imag">
                <img className='img-fluid' src="./images/Asus-Laptop-PNG-Transparent-Picture.png" />
              </div>
            </Col>
            <Col md='6'>
              <div className="text">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <h5>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
                  accusantium quo optio voluptates iusto officia iste fuga sit soluta quod
                  repellendus maxime amet, labore tenetur saepe reprehenderit aliquam
                  officiis aliquid debitis eaque veritatis cum! Dolore impedit expedita
                  voluptatibus velit debitis?
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
