const morto = require("../models/Morto")

async function registrarMorto(nome, tamanho, causa, idade) {
    try {
        const novoMorto = new morto({ nome, tamanho, causa, idade });
        return await novoMorto.save();
    } catch (erro) {
        console.error("Erro ao registrar morto:", erro);
        throw erro;
    }
}

async function listarMortos() {
    try {
        return await morto.find();
    } catch (erro) {
        console.error("Erro ao listar mortos:", erro);
        throw erro;
    }
}

async function atualizarMorto(id, nome, tamanho, causa, idade) {
    try {
        const novoMortinho = await morto.findByIdAndUpdate(
            id,
            { nome, tamanho, causa, idade },
            { new: true, runValidators: true }
        );
        return novoMortinho;
    } catch (erro) {
        console.error("Erro ao editar esse morto:", erro);
        throw erro;
    }
}

async function deletarMorto(id) {
    try {
        const mortoDeletado = await morto.findByIdAndDelete(id);
        return mortoDeletado;
    } catch (erro) {
        console.error("Erro ao excluir esse  morto:", erro);
        throw erro;
    }
}

module.exports = {
    registrarMorto,
    listarMortos,
    atualizarMorto,
    deletarMorto,
}