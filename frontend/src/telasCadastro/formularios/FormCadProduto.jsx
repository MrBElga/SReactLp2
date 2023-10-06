import React, { useState } from "react";
import "./form.css"
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";

export default function FormCadProduto(props) {
  const estadoInicialProduto = props.produtoParaEdicao;
  
  const [produto, setProduto] = useState(estadoInicialProduto);
  const [validated, setValidated] = useState(false);

  function manipularMudancas(e) {
    const componente = e.currentTarget;
    setProduto({
      ...produto,
      [componente.name]: componente.value,
    });
  }

  function manipularSubmit(e){
    const form = e.currentTarget;
    if(form.checkValidity()){
      if (!props.modoEdicao) {
        props.setProdutosCadastrados([...props.produtosCadastrados, produto]);
        props.setExibirAlert(true);
        props.exibirFormulario(false);
      } else {
        props.setProdutosCadastrados([
          ...props.produtosCadastrados.filter(
            (itemProduto) => itemProduto.nomeProduto !== produto.nomeProduto
          ),
          produto,
        ]);
        props.setModoEdicao(false);
        props.setProdutoParaEdicao(estadoInicialProduto);
        props.setExibirAlert(true);
        props.exibirFormulario(false);
      }
      setProduto(estadoInicialProduto);
      setValidated(false);
   
    }
    else{
      setValidated(true);
    }
    e.stopPropagation();
    e.preventDefault();
  }

  return (
    <Container className="container">
      <Form noValidate validated={validated} onSubmit={manipularSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group>
              <FloatingLabel label="Nome do Produto:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Informe o nome do produto"
                  name="nomeProduto"
                  value={produto.nomeProduto}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o nome do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <FloatingLabel label="Descrição:" className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Informe a descrição do produto"
                  name="descricao"
                  value={produto.descricao}
                  onChange={manipularMudancas}
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe a descrição do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group>
              <FloatingLabel label="Preço:" className="mb-3">
                <Form.Control
                  type="number"
                  step="0.01"
                  placeholder="Informe o preço do produto"
                  name="preco"
                  value={produto.preco}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o preço do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <FloatingLabel label="Quantidade em Estoque:" className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Informe a quantidade em estoque"
                  name="quantidade"
                  value={produto.quantidade}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe a quantidade em estoque!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group>
              <FloatingLabel label="Tipo de Produto:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Informe o tipo de produto"
                  name="tipoProduto"
                  value={produto.tipoProduto}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o tipo de produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <FloatingLabel label="Número de Identificação:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Informe o número de identificação"
                  name="numeroIdentificacao"
                  value={produto.numeroIdentificacao}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o número de identificação!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group>
              <FloatingLabel label="Custo Unitário:" className="mb-3">
                <Form.Control
                  type="number"
                  step="0.01"
                  placeholder="Informe o custo unitário"
                  name="custoUnitario"
                  value={produto.custoUnitario}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o custo unitário!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <FloatingLabel label="Preço de Venda:" className="mb-3">
                <Form.Control
                  type="number"
                  step="0.01"
                  placeholder="Informe o preço de venda"
                  name="precoVenda"
                  value={produto.precoVenda}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o preço de venda!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Nome do Fornecedor:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Informe o nome do fornecedor"
                  name="nomeFornecedor"
                  value={produto.nomeFornecedor}
                  onChange={manipularMudancas}
                  required
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe o nome do fornecedor!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="d-flex justify-content-end">
            <Button type="submit" variant={"primary"}>
              {props.modoEdicao ? "Alterar" : "Cadastrar"}
            </Button>
      
            <Button
              type="button"
              variant={"secondary"}
              onClick={() => {
                props.exibirFormulario(false);
              }}
            >
              Voltar
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
