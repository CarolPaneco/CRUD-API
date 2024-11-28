import React, { useState } from 'react';
import { adicionarProduto } from './ProdutoService'; 

const AdicionarProduto = () => {
    const [nome, setNome] = useState('');
    const [precoCusto, setPrecoCusto] = useState('');
    const [precoVenda, setPrecoVenda] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        
        const produto = {
            nome,
            precoCusto: parseFloat(precoCusto),
            precoVenda: parseFloat(precoVenda),
            quantidade: parseInt(quantidade),
        };

        try {
            
            const resposta = await adicionarProduto(produto);
            console.log('Produto adicionado:', resposta);
            alert('Produto adicionado com sucesso!');
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
            alert('Erro ao adicionar produto');
        }
    };

    return (
        <div>
            <h2>Adicionar Produto</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Preço de Custo"
                    value={precoCusto}
                    onChange={(e) => setPrecoCusto(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Preço de Venda"
                    value={precoVenda}
                    onChange={(e) => setPrecoVenda(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Quantidade"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    required
                />
                <button type="submit">Adicionar Produto</button>
            </form>
        </div>
    );
};

export default AdicionarProduto;
