import express from 'express'
import 'dotenv/config'

//require("dotenv").config()

const express = require("express")
const app = express()
const pool = require("./db")

app.use(express.json())

/* CREATE */
app.post("/users", async (req, res) => {
  const { email, senha } = req.body

  try {
    const result = await pool.query(
      "INSERT INTO users (email, senha) VALUES ($1, $2) RETURNING *",
      [email, senha]
    )

    res.status(201).json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

/* READ ALL */
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users")
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

/* READ ONE */
app.get("/users/:id", async (req, res) => {
  const { id } = req.params

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE id = $1",
      [id]
    )

    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

/* UPDATE */
app.put("/users/:id", async (req, res) => {
  const { id } = req.params
  const { email, senha } = req.body

  try {
    const result = await pool.query(
      "UPDATE users SET email = $1, senha = $2 WHERE id = $3 RETURNING *",
      [email, senha, id]
    )

    res.json(result.rows[0])
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

/* DELETE */
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params

  try {
    await pool.query(
      "DELETE FROM users WHERE id = $1",
      [id]
    )

    res.json({ message: "Usuário removido" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(process.env.PORT, () => {
  console.log(`API rodando na porta ${process.env.PORT}`)
})
