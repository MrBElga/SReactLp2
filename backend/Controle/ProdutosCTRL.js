import Produtos from "../Modelo/Produtos.js";
import conectar from "../Persistencia/Conexao.js";

export default class ProdutosCTRL {
    async gravar(requisicao, resposta) {
        try {
            const {
                nome,
                descricao,
                preco,
                estoque,
                fornecedorId 
            } = requisicao.body;

            const produto = new Produtos(nome, descricao, preco, estoque, fornecedorId);
            await produto.gravar();
            resposta.status(201).json(produto);
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao gravar produto", error: error.message });
        }
    }

    async atualizar(requisicao, resposta) {
        try {
            const {
                codigo,
                nome,
                descricao,
                preco,
                estoque,
                fornecedorId 
            } = requisicao.body;

            const produto = new Produtos(nome, descricao, preco, estoque, fornecedorId);
            produto.codigo = codigo;

            await produto.atualizar();
            resposta.status(200).json(produto);
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao atualizar produto", error: error.message });
        }
    }

    async excluir(requisicao, resposta) {
        try {
            const { codigo } = requisicao.body;
            const produto = new Produtos();
            produto.codigo = codigo;

            await produto.excluir();
            resposta.status(204).send();
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao excluir produto", error: error.message });
        }
    }

    async consultar(requisicao, resposta) {
        try {
            const produtos = await Produtos.consultar();
            resposta.status(200).json(produtos);
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao consultar produtos", error: error.message });
        }
    }

    async consultarID(requisicao, resposta) {
        try {
            const { id } = requisicao.params;
            const produto = new Produtos();
            produto.codigo = id;

            const produtoConsultado = await produto.consultarID();
            resposta.status(200).json(produtoConsultado);
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao consultar produto por ID", error: error.message });
        }
    }
}
