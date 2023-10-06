import React from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import Pagina from '../templates/Pagina'
import kirito from '../templates/Image/Character/KiritoEsp.png'
import Asuna from '../templates/Image/Character/AsunaEsp.png'
import './homepage.css'; 

const HomePage = () => {
  return (
    <Pagina>
      <div className="homepage">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src= {kirito}
              alt="kirito"
            />
            <Carousel.Caption>
              <h3>Kirito</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Asuna}
              alt="Asuna"
            />
            <Carousel.Caption>
              <h3>Asuna</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Container className="mt-5">
          <Row>
            <Col md={6}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1oOBjyOKu2o?si=3oq8hoqTBIwq66aR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  autoplay allowfullscreen></iframe>
            </Col>
            <Col md={6}>
              <h2>Sword Art Online: Ordinal Scale</h2>
              <p>
                Sword Art Online é uma série de light novel escrita por Reki
                Kawahara e ilustrada por abec. O enredo da série ocorre em um
                futuro próximo e se concentra em vários mundos de realidade
                virtual de MMORPG.
              </p>

            </Col>
          </Row>
        </Container>

        <Container className="mt-5">
          <Row>
            <Col>
              <h2>Sobre Sword Art Online</h2>
              <p>
                Sword Art Online é uma série de light novel escrita por Reki
                Kawahara e ilustrada por abec. O enredo da série ocorre em um
                futuro próximo e se concentra em vários mundos de realidade
                virtual de MMORPG. A história segue Kirito e outros jogadores
                presos em um mundo de realidade virtual chamado Sword Art Online,
                onde devem vencer o jogo para escapar. A série também explora
                vários outros mundos virtuais e aventuras emocionantes de Kirito
                e seus amigos.
              </p>
              <Button variant="primary">Saiba Mais</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </Pagina>
  );
};

export default HomePage;
