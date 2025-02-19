const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de ejemplo
app.get('/api', (req, res) => {
  res.json({ message: 'Hola desde el backend. Ahora Siiii con /api!' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Hola desde el backend. Ahora Siiii con /!' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});