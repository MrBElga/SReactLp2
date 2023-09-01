import Fornecedor from "../Modelo/Fornecedor.js";
import conectar from "../Persistencia/Conexao.js";

export default class FornecedorCTRL {
  async gravar(requisicao, resposta) {
    try {
      const {
        cpf,
        nome,
        telefone,
        celular,
        endereco,
        numero,
        bairro,
        cidade,
        uf,
        cep,
        email,
      } = requisicao.body;

      const fornecedor = new Fornecedor(
        cpf,
        nome,
        telefone,
        celular,
        endereco,
        numero,
        bairro,
        cidade,
        uf,
        cep,
        email
      );
      await fornecedor.gravar();
      resposta.status(201).json(fornecedor);
    } catch (error) {
      resposta
        .status(500)
        .json({ mensagem: "Erro ao gravar fornecedor", error: error.message });
    }
  }

  async atualizar(requisicao, resposta) {
    try {
      const {
        codigo,
        cpf,
        nome,
        telefone,
        celular,
        endereco,
        numero,
        bairro,
        cidade,
        uf,
        cep,
        email,
      } = requisicao.body;

      const fornecedor = new Fornecedor(
        cpf,
        nome,
        telefone,
        celular,
        endereco,
        numero,
        bairro,
        cidade,
        uf,
        cep,
        email
      );
      fornecedor.codigo = codigo;

      await fornecedor.atualizar();
      resposta.status(200).json(fornecedor);
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro ao atualizar fornecedor",
        error: error.message,
      });
    }
  }

  async excluir(requisicao, resposta) {
    try {
      const { codigo } = requisicao.body;
      const fornecedor = new Fornecedor();
      fornecedor.codigo = codigo;

      await fornecedor.excluir();
      resposta.status(204).send();
    } catch (error) {
      resposta
        .status(500)
        .json({ mensagem: "Erro ao excluir fornecedor", error: error.message });
    }
  }

  async consultar(requisicao, resposta) {
    try {
      const fornecedores = await Fornecedor.consultar();
      resposta.status(200).json(fornecedores);
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro ao consultar fornecedores",
        error: error.message,
      });
    }
  }

  async consultarID(requisicao, resposta) {
    try {
      const { id } = requisicao.params;
      const fornecedor = new Fornecedor();
      fornecedor.codigo = id;

      const fornecedorConsultado = await fornecedor.consultarID();
      resposta.status(200).json(fornecedorConsultado);
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro ao consultar fornecedor por ID",
        error: error.message,
      });
    }
  }
}
