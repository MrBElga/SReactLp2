import Categoria from "../Modelo/Categoria.js";
import CategoriaDAO from "../Persistencia/CategoriaDAO.js"; // Certifique-se de importar corretamente o CategoriaDAO
import conectar from "../Persistencia/Conexao.js";

export default class CategoriaCTRL {
    async gravar(requisicao, resposta) {
        const { nome, descricao } = requisicao.body;
        const categoria = new Categoria(nome, descricao);

        try {
            await categoria.gravar();
            resposta.status(201).json(categoria);
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao gravar categoria", error: error.message });
        }
    }

    async atualizar(requisicao, resposta) {
        const { id } = requisicao.params;
        const { nome, descricao } = requisicao.body;
        const categoria = new Categoria(nome, descricao, id);

        try {
            await categoria.atualizar();
            resposta.status(200).json(categoria);
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao atualizar categoria", error: error.message });
        }
    }

    async excluir(requisicao, resposta) {
        const { id } = requisicao.params;
        const categoria = new Categoria();
        categoria.codigo = id;

        try {
            await categoria.excluir();
            resposta.status(204).send();
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao excluir categoria", error: error.message });
        }
    }

    async consultar(requisicao, resposta) {
        try {
            const categoriaDAO = new CategoriaDAO();
            const categorias = await categoriaDAO.consultar();
            resposta.status(200).json(categorias);
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao consultar categorias", error: error.message });
        }
    }

    async consultarID(requisicao, resposta) {
        const { id } = requisicao.params;
        const categoria = new Categoria();
        categoria.codigo = id;

        try {
            const categoriaDAO = new CategoriaDAO();
            const categoriaConsultada = await categoriaDAO.consultarID(id);
            resposta.status(200).json(categoriaConsultada);
        } catch (error) {
            resposta.status(500).json({ mensagem: "Erro ao consultar categoria por ID", error: error.message });
        }
    }
}
