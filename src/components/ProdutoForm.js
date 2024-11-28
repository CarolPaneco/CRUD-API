import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import axios from "axios";

const ProdutoForm = ({ onProdutoAdicionado }) => {
  const [nome, setNome] = useState("");
  const [precoCusto, setPrecoCusto] = useState("");
  const [precoVenda, setPrecoVenda] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const handleSubmit = () => {
    
    if (!nome || !precoCusto || !precoVenda || !quantidade) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const produto = {
      nome,
      precoCusto: parseFloat(precoCusto),
      precoVenda: parseFloat(precoVenda),
      quantidade: parseInt(quantidade),
    };

 
    if (isNaN(produto.precoCusto) || isNaN(produto.precoVenda) || isNaN(produto.quantidade)) {
      alert("Certifique-se de que todos os campos numéricos estão corretos.");
      return;
    }

    axios
      .post("https://localhost:7254/api/produto", produto) 
      .then((response) => {
        window.location.reload(); 
        console.log("Produto adicionado:", response.data);
        onProdutoAdicionado(response.data); 
        setNome("");
        setPrecoCusto("");
        setPrecoVenda("");
        setQuantidade("");
      })
      .catch((error) => {
        console.error("Erro ao adicionar produto:", error);
        alert("Houve um erro ao adicionar o produto.");
      });
  };

  return (
    <Form layout="vertical">
      <Form.Item label="Nome">
        <Input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do Produto"
        />
      </Form.Item>
      <Form.Item label="Preço de Custo">
        <Input
          value={precoCusto}
          onChange={(e) => setPrecoCusto(e.target.value)}
          placeholder="Preço de Custo"
          type="number"
        />
      </Form.Item>
      <Form.Item label="Preço de Venda">
        <Input
          value={precoVenda}
          onChange={(e) => setPrecoVenda(e.target.value)}
          placeholder="Preço de Venda"
          type="number"
        />
      </Form.Item>
      <Form.Item label="Quantidade">
        <Input
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
          placeholder="Quantidade"
          type="number"
        />
      </Form.Item>
      <Button type="primary" onClick={handleSubmit}>
        Adicionar Produto
      </Button>
    </Form>
  );
};

export default ProdutoForm;
