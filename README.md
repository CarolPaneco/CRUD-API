# CRUD API

CRUD API é um sistema de gerenciamento de produtos, com funcionalidades completas para **criar**, **ler**, **atualizar** e **deletar** produtos de um banco de dados. Este projeto utiliza uma **API Backend** desenvolvida com **ASP.NET Core** e um **Frontend** moderno em **React**.

## Funcionalidades

- **Adicionar Produto**: Criação de novos produtos com informações como nome, preço de custo, preço de venda e quantidade.
- **Visualizar Produtos**: Exibição de todos os produtos cadastrados.
- **Editar Produto**: Atualização das informações de um produto existente.
- **Excluir Produto**: Remoção de um produto do banco de dados.

## Tecnologias Utilizadas

### Backend (API)
- **ASP.NET Core**: Framework para a criação da API RESTful.
- **SQL Server**: Banco de dados para armazenar as informações dos produtos.
- **Entity Framework Core**: ORM (Object-Relational Mapper) para interagir com o banco de dados.

### Frontend
- **React**: Biblioteca JavaScript para construção da interface de usuário.
- **Ant Design**: Framework de componentes de UI para React, utilizado para estilização.
- **Axios**: Biblioteca para fazer requisições HTTP entre o frontend e o backend.

## Como Rodar o Projeto

### Backend (API)
1. Abra o projeto **API** no **Visual Studio 2022**.
2. Certifique-se de que o banco de dados está configurado corretamente no **SQL Server**.
3. Execute o projeto no Visual Studio (pressione `Ctrl + F5` para iniciar sem o debugger).
4. A API estará rodando localmente em `https://localhost:7254`.

### Frontend (React)
1. Abra o projeto **Frontend** no **Visual Studio Code**.
2. Certifique-se de ter o **Node.js** instalado.
3. Instale as dependências do projeto:
   ```bash
   npm install
