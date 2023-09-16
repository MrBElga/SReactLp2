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
  const produtoIn={
    nomeProduto: "",
    descricao: "",
    preco: "",
    quantidade: "",
    tipoProduto: "",
    numeroIdentificacao: "",
    custoUnitario: "",
    precoVenda: "",
    nomeFornecedor: "",
  }
  const [produto, setProduto] = useState(produtoIn);
  const [produtosCadastrados, setProdutosCadastrados] = useState([]);
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
      //se todos os campos preenchidos manda os dados para o backends    
      setProdutosCadastrados([...produtosCadastrados, produto]);
      console.log(produto)
      setProduto(produtoIn);
      setValidated(false);
      console.log(produtosCadastrados);
    }
    else{
      setValidated(true);
    }
    e.stopPropagation();
    e.preventDefault();
  }
  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={manipularSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Nome do Produto:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Informe o nome do produto"
                  id="nomeProduto"
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
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Descrição:" className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Informe a descrição do produto"
                  id="descricao"
                  value={produto.descricao}
                  onChange={manipularMudancas}
                  name="descricao"
                />
              </FloatingLabel>
              <Form.Control.Feedback type="invalid">
                Informe a descrição do produto!
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <FloatingLabel label="Preço:" className="mb-3">
                <Form.Control
                  type="number"
                  step="0.01"
                  placeholder="Informe o preço do produto"
                  id="preco"
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
          <Col>
            <Form.Group>
              <FloatingLabel label="Quantidade em Estoque:" className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Informe a quantidade em estoque"
                  id="quantidade"
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
          <Col>
            <Form.Group>
              <FloatingLabel label="Tipo de Produto:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Informe o tipo de produto"
                  id="tipoProduto"
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
          <Col>
            <Form.Group>
              <FloatingLabel label="Número de Identificação:" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Informe o número de identificação"
                  id="numeroIdentificacao"
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
          <Col>
            <Form.Group>
              <FloatingLabel label="Custo Unitário:" className="mb-3">
                <Form.Control
                  type="number"
                  step="0.01"
                  placeholder="Informe o custo unitário"
                  id="custoUnitario"
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
          <Col>
            <Form.Group>
              <FloatingLabel label="Preço de Venda:" className="mb-3">
                <Form.Control
                  type="number"
                  step="0.01"
                  placeholder="Informe o preço de venda"
                  id="precoVenda"
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
                  id="nomeFornecedor"
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
          <Col md={6} offset={5} className="d-flex justify-content-end">
            <Button type="submit" variant={"primary"}>
              Cadastrar
            </Button>
          </Col>
          <Col md={6} offset={5}>
            <Button type="button" variant={"secondary"}>
              Voltar
            </Button>
          </Col>
        </Row>
      </Form>
      
    </Container>
  );
}
