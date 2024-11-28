import React, { useState, useEffect } from "react";
import axios from "axios";
import ProdutoForm from "./components/ProdutoForm";
import ProdutoTable from "./components/ProdutoTable";
import { Layout, Space } from "antd";

const { Header, Content } = Layout;

const App = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7254/api/produto")
      .then((response) => setProdutos(response.data))
      .catch((error) => console.error("Erro ao carregar produtos:", error));
  }, []);

  const handleProdutoAdicionado = (produtoAdicionado) => {
    setProdutos([...produtos, produtoAdicionado]);
  };

  const handleProdutoEditado = (produtoEditado) => {
    setProdutos(
      produtos.map((produto) =>
        produto.id === produtoEditado.id ? produtoEditado : produto
      )
    );
  };

  const handleProdutoDeletado = (id) => {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <h1 style={{ color: "white", textAlign: "center" }}>
          Cadastro de Produtos
        </h1>
      </Header>
      <Content style={{ padding: "20px" }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          <ProdutoForm onProdutoAdicionado={handleProdutoAdicionado} />
          <ProdutoTable
            produtos={produtos}
            onProdutoEditado={handleProdutoEditado}
            onProdutoDeletado={handleProdutoDeletado}
          />
        </Space>
      </Content>
    </Layout>
  );
};

export default App;
