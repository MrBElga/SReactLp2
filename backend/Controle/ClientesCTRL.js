import Clientes from "../Modelo/Clientes.js";
import conectar from "../Persistencia/Conexao.js";

export default class ClientesCTRL {
    async gravar(requisicao, resposta) {
        const conexao = conectar();
        const { cpf, nome, endereco, numero, bairro, cidade, uf, cep, email } = requisicao.body;
        const cliente = new Clientes(cpf, nome, endereco, numero, bairro, cidade, uf, cep, email);
        await cliente.gravar();
        resposta.status(201).json(cliente);
    }

    async atualizar(requisicao, resposta) {
        const conexao = await conectar();
        const { codigo, cpf, nome, endereco, numero, bairro, cidade, uf, cep, email } = requisicao.body;
        const cliente = new Clientes(cpf, nome, endereco, numero, bairro, cidade, uf, cep, email, codigo);
        await cliente.atualizar();
        resposta.status(200).json(cliente);
    }

    async excluir(requisicao, resposta) {
        const conexao = await conectar();
        const { codigo } = requisicao.body;
        const cliente = new Clientes();
        cliente.codigo = codigo;
        await cliente.excluir();
        resposta.status(204).send();
    }

    async consultar(requisicao, resposta) {
        const conexao = await conectar();
        const clientesDAO = new ClientesDAO();
        const clientes = await clientesDAO.consultar();
        resposta.status(200).json(clientes);
    }

    async consultarID(requisicao, resposta) {
        const conexao = await conectar();
        const { id } = requisicao.params;
        const cliente = new Clientes();
        cliente.codigo = id;
        const clienteConsultado = await cliente.consultarID();
        resposta.status(200).json(clienteConsultado);
    }
}
