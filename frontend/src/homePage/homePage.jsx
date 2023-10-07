import React, { useState } from "react";
import { Container, Row, Col, Carousel, Button, Modal } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import kirito from "../templates/Image/Character/KiritoEsp.png";
import Asuna from "../templates/Image/Character/AsunaEsp.png";
import "./homepage.css";

const HomePage = () => {
  const [showModal, ShowModal] = useState(false);

  const abrirModal = () => {
    ShowModal(true);
  };

  const FecharModal = () => {
    ShowModal(false);
  };
  return (
    <Pagina>
      <div className="homepage">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={kirito} alt="kirito" />
            <Carousel.Caption>
              <h3>Kirito</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Asuna} alt="Asuna" />
            <Carousel.Caption>
              <h3>Asuna</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Container className="mt-5">
          <Row>
            <Col md={6}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1oOBjyOKu2o?si=3oq8hoqTBIwq66aR"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                muted
                autoplay
              ></iframe>
            </Col>
            <Col md={6}>
              <h2>Sword Art Online</h2>
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
                presos em um mundo de realidade virtual chamado Sword Art
                Online, onde devem vencer o jogo para escapar. A série também
                explora vários outros mundos virtuais e aventuras emocionantes
                de Kirito e seus amigos.
              </p>
              <Button variant="primary" onClick={abrirModal}>
                Saiba Mais
              </Button>
            </Col>
          </Row>
        </Container>
        <Modal
          show={showModal}
          onHide={FecharModal}
          className="custom-modal-bg"
          id="custom-modal"
          dialogClassName="custom-modal"
          backdrop="static"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title className="modal-title" id="modal-title">
            <strong>Sobre Sword Art Online </strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>"Sword Art Online" é um emocionante jogo de RPG
              que mergulha 10.000 jovens em um mundo virtual repleto de
              aventuras e perigos. Eles ficam presos neste Massive Multiplayer
              Online Role-Playing Game (MMORPG) através de um capacete que
              estimula todos os seus sentidos.</strong>
            </p>
            <p>
            <strong> A história gira em torno de Kirito, o protagonista, que forma
              laços com diversos aliados ao longo de sua jornada dentro do jogo.
              Um dos personagens mais destacados é Asuna, uma habilidosa
              espadachim que se torna uma grande amiga de Kirito. Juntos, eles
              enfrentam desafios para tentar escapar do jogo e evitar que seus
              corpos reais sofram as consequências fatais do confinamento
              virtual.</strong>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={FecharModal}
              className="modal-button"
              id="modal-button"
            >
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Pagina>
  );
};

export default HomePage;
