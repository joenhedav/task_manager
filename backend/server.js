const express = require('express')
const cors = require('cors')
const pool = require('./db')

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('hola mundo')
})

app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()')

    res.json({
      mensaje: 'conexión con postgreSQL funcionando',
      fecha: result.rows[0]
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'error al conectar con postgreSQL'
    })
  }
})

/* GET */
app.get('/api/tasks', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        name,
        activity_type AS "activityType",
        status,
        summary,
        description,
        priority,
        reporter,
        assignee,
        precondition,
        creation_date AS "creationDate",
        closing_date AS "closingDate",
        sprint
      FROM tasks
      ORDER BY id
    `)

    res.json(result.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'error al obtener las tareas'
    })
  }
})

/* POST */
app.post('/api/tasks', async (req, res) => {
  try {
    const {
      name,
      activityType,
      status,
      summary,
      description,
      priority,
      reporter,
      assignee,
      precondition,
      creationDate,
      closingDate,
      sprint
    } = req.body

    const result = await pool.query(
      `
      INSERT INTO tasks (
        name,
        activity_type,
        status,
        summary,
        description,
        priority,
        reporter,
        assignee,
        precondition,
        creation_date,
        closing_date,
        sprint
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
      RETURNING
        id,
        name,
        activity_type AS "activityType",
        status,
        summary,
        description,
        priority,
        reporter,
        assignee,
        precondition,
        creation_date AS "creationDate",
        closing_date AS "closingDate",
        sprint
      `,
      [
        name,
        activityType,
        status,
        summary,
        description,
        priority,
        reporter,
        assignee,
        precondition,
        creationDate || null,
        closingDate || null,
        sprint
      ]
    )
    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'error al crear la tarea'
    })
  }
})

/* PUT */
app.put('/api/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params

    const {
      name,
      activityType,
      status,
      summary,
      description,
      priority,
      reporter,
      assignee,
      precondition,
      creationDate,
      closingDate,
      sprint
    } = req.body

    const result = await pool.query(
      `
      UPDATE tasks
      SET
        name = $1,
        activity_type = $2,
        status = $3,
        summary = $4,
        description = $5,
        priority = $6,
        reporter = $7,
        assignee = $8,
        precondition = $9,
        creation_date = $10,
        closing_date = $11,
        sprint = $12
      WHERE id = $13
      RETURNING
        id,
        name,
        activity_type AS "activityType",
        status,
        summary,
        description,
        priority,
        reporter,
        assignee,
        precondition,
        creation_date AS "creationDate",
        closing_date AS "closingDate",
        sprint
      `,
      [
        name,
        activityType,
        status,
        summary,
        description,
        priority,
        reporter,
        assignee,
        precondition,
        creationDate || null,
        closingDate || null,
        sprint,
        id
      ]
    )
    res.json(result.rows[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'error al editar la tarea'
    })
  }
})

/* DELETE*/
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params
    await pool.query(
      'DELETE FROM tasks WHERE id = $1',
      [id]
    )
    res.status(204).send()
  } catch (error) {
    console.error(error)

    res.status(500).json({
      error: 'error al eliminar la tarea'
    })
  }
})

app.listen(PORT, () => {
  console.log(`servidor ejecutándose en http://localhost:${PORT}`)
})