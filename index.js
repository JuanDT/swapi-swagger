// app.js

const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const filmsRoutes = require('./src/routes/filmsRoutes');
const peopleRoutes = require('./src/routes/peopleRoutes');
const planetsRoutes = require('./src/routes/planetsRoutes');
const speciesRoutes = require('./src/routes/speciesRoutes');
const starshipsRoutes = require('./src/routes/starshipsRoutes');
const vehiclesRoutes = require('./src/routes/vehiclesRoutes');

const app = express();
const port = 3000;

// Configuración de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Star Wars API',
      version: '1.0.0',
      description: 'API para listar personajes de Star Wars',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Local development server',
      },
    ],
  },
  apis: [
    './src/routes/filmsRoutes.js',
    './src/routes/peopleRoutes.js',
    './src/routes/planetsRoutes.js',
    './src/routes/speciesRoutes.js',
    './src/routes/starshipsRoutes.js',
    './src/routes/vehiclesRoutes.js',
  ],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas
app.use(filmsRoutes);
app.use(peopleRoutes);
app.use(planetsRoutes);
app.use(speciesRoutes);
app.use(starshipsRoutes);
app.use(vehiclesRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
