const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

// Configuración de Swagger para todas las entidades
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Star Wars API',
      version: '1.0.0',
      description: 'API para listar personajes y elementos de Star Wars',
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

// Rutas para cada entidad
app.use('/api/films', require('./src/routes/filmsRoutes'));
app.use('/api/people', require('./src/routes/peopleRoutes'));
app.use('/api/planets', require('./src/routes/planetsRoutes'));
app.use('/api/species', require('./src/routes/speciesRoutes'));
app.use('/api/starships', require('./src/routes/starshipsRoutes'));
app.use('/api/vehicles', require('./src/routes/vehiclesRoutes'));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
