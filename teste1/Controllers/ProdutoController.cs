using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Collections.Generic;
using teste1.Models;

[Route("api/[controller]")]
[ApiController]
public class ProdutoController : ControllerBase
{
    private string connectionString = "Server=localhost;Database=ProdutosDB;Trusted_Connection=True;";

    // GET: api/produto
    [HttpGet]
    public IActionResult GetProdutos()
    {
        var produtos = new List<Produto>();

        using (var connection = new SqlConnection(connectionString))
        {
            connection.Open();
            var command = new SqlCommand("SELECT * FROM Produtos", connection);
            var reader = command.ExecuteReader();

            while (reader.Read())
            {
                produtos.Add(new Produto
                {
                    Id = (int)reader["Id"],
                    Nome = reader["Nome"].ToString(),
                    PrecoCusto = (decimal)reader["PrecoCusto"],
                    PrecoVenda = (decimal)reader["PrecoVenda"],
                    Quantidade = (int)reader["Quantidade"]
                });
            }
        }

        return Ok(produtos);
    }

    // POST: api/produto
    [HttpPost]
    public IActionResult PostProduto([FromBody] Produto produto)
    {
        using (var connection = new SqlConnection(connectionString))
        {
            connection.Open();
            var command = new SqlCommand(
                "INSERT INTO Produtos (Nome, PrecoCusto, PrecoVenda, Quantidade) VALUES (@Nome, @PrecoCusto, @PrecoVenda, @Quantidade)", connection);

            command.Parameters.AddWithValue("@Nome", produto.Nome);
            command.Parameters.AddWithValue("@PrecoCusto", produto.PrecoCusto);
            command.Parameters.AddWithValue("@PrecoVenda", produto.PrecoVenda);
            command.Parameters.AddWithValue("@Quantidade", produto.Quantidade);

            var rowsAffected = command.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                return CreatedAtAction(nameof(GetProdutos), new { id = produto.Id }, produto);
            }
        }

        return BadRequest();
    }

    // PUT: api/produto/{id}
    [HttpPut("{id}")]
    public IActionResult PutProduto(int id, [FromBody] Produto produto)
    {
        using (var connection = new SqlConnection(connectionString))
        {
            connection.Open();
            var command = new SqlCommand(
                "UPDATE Produtos SET Nome = @Nome, PrecoCusto = @PrecoCusto, PrecoVenda = @PrecoVenda, Quantidade = @Quantidade WHERE Id = @Id", connection);

            command.Parameters.AddWithValue("@Id", id);
            command.Parameters.AddWithValue("@Nome", produto.Nome);
            command.Parameters.AddWithValue("@PrecoCusto", produto.PrecoCusto);
            command.Parameters.AddWithValue("@PrecoVenda", produto.PrecoVenda);
            command.Parameters.AddWithValue("@Quantidade", produto.Quantidade);

            var rowsAffected = command.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                return NoContent();
            }
        }

        return NotFound();
    }

    // DELETE: api/produto/{id}
    [HttpDelete("{id}")]
    public IActionResult DeleteProduto(int id)
    {
        using (var connection = new SqlConnection(connectionString))
        {
            connection.Open();
            var command = new SqlCommand("DELETE FROM Produtos WHERE Id = @Id", connection);
            command.Parameters.AddWithValue("@Id", id);

            var rowsAffected = command.ExecuteNonQuery();
            if (rowsAffected > 0)
            {
                return NoContent();
            }
        }

        return NotFound();
    }


}
