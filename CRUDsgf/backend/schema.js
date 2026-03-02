import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config({ path: "./src/.env" });

const sql = postgres({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

async function criarTabelaFuncionario() {
  try {
    await sql`
    INSERT INTO funcionario (nome, cargo, status, 
    data_nascimento, telefone, senha) VALUES
    ('Seidel',
    'Administrador',
    'Ativo',
    '01/07/2003',
    '17996448979',
    'teta8979')`;
    
    
    /*
    
    
    
    `
      CREATE TABLE IF NOT EXISTS funcionario (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(150) NOT NULL,
        cargo VARCHAR(100) NOT NULL,
        status VARCHAR(30) NOT NULL,
        data_nascimento DATE NOT NULL,
        telefone VARCHAR(20) NOT NULL
      );
    `;*/

    console.log("Tabela 'funcionario' criada com sucesso.");
  } catch (error) {
    console.error("Erro ao criar tabela:", error);
  } finally {
    await sql.end();
  }
}

criarTabelaFuncionario();
