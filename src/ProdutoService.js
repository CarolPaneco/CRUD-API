import axios from 'axios';

// Defina a URL base da API (substitua conforme necessário)
const API_URL = 'https://localhost:7254/api/produto'; // URL para a sua API

// Função para adicionar um produto
export const adicionarProduto = async (produto) => {
    try {
        // Envia a requisição POST para adicionar o produto
        const response = await axios.post(API_URL, produto);
        return response.data; // Retorna os dados recebidos da resposta
    } catch (error) {
        console.error('Erro ao adicionar produto:', error);
        throw error; // Lança o erro caso aconteça
    }
};

// Função para obter todos os produtos
export const obterProdutos = async () => {
    try {
        // Envia a requisição GET para obter todos os produtos
        const response = await axios.get(API_URL);
        return response.data; // Retorna os dados dos produtos
    } catch (error) {
        console.error('Erro ao obter produtos:', error);
        throw error; // Lança o erro caso aconteça
    }
};
