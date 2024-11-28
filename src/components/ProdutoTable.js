import React from "react";
import { Table, Button, Space } from "antd";
import axios from "axios";

const ProdutoTable = ({ produtos, onProdutoEditado, onProdutoDeletado }) => {
  const handleDelete = (id) => {
    axios
      .delete(`https://localhost:7254/api/produto/${id}`)
      .then(() => {
        onProdutoDeletado(id);
      })
      .catch((error) => console.error("Erro ao deletar produto:", error));
  };

  const handleEdit = (produto) => {
    const novoNome = prompt("Digite o novo nome do produto:", produto.nome);
    const novoPrecoCusto = prompt(
      "Digite o novo preço de custo:",
      produto.precoCusto
    );
    const novoPrecoVenda = prompt(
      "Digite o novo preço de venda:",
      produto.precoVenda
    );
    const novaQuantidade = prompt(
      "Digite a nova quantidade:",
      produto.quantidade
    );

   
    if (novoNome && novoPrecoCusto && novoPrecoVenda && novaQuantidade) {
      const produtoAtualizado = {
        ...produto,
        nome: novoNome,
        precoCusto: parseFloat(novoPrecoCusto),
        precoVenda: parseFloat(novoPrecoVenda),
        quantidade: parseInt(novaQuantidade),
      };

      axios
        .put(`https://localhost:7254/api/produto/${produto.id}`, produtoAtualizado)
        .then(() => {
          onProdutoEditado(produtoAtualizado);
        })
        .catch((error) => console.error("Erro ao editar produto:", error));
    }
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Nome", dataIndex: "nome", key: "nome" },
    { title: "Preço Custo", dataIndex: "precoCusto", key: "precoCusto" },
    { title: "Preço Venda", dataIndex: "precoVenda", key: "precoVenda" },
    { title: "Quantidade", dataIndex: "quantidade", key: "quantidade" },
    {
      title: "Ações",
      key: "acoes",
      render: (text, produto) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(produto)}>Editar</Button>
          <Button onClick={() => handleDelete(produto.id)} danger>
            Deletar
          </Button>
        </Space>
      ),
    },
  ];

  return <Table dataSource={produtos} columns={columns} rowKey="id" />;
};

export default ProdutoTable;
