import express from "express"

const app = express()

// HTTP methods / API RESTful / HTTP Codes

/**
 * Query: localhost:3333/ads?page=2 (persistencia e para coisas não sensiveis)
 * Route: localhost:3333/ads/5  (acessar o anuncio com identificador 5)
 * Body: quando vamos enviar varias informacoes em uma unica requisição (fica escondido na requisição)
 */

app.get('/games', (request, response) => {
  return response.json([])
})

app.post('/ads', (request, response) => {
  return response.status(201).json([])
})

app.get('/games/:id/ads', (request, response) => {
  const gameId = request.params.id

  return response.json([
    { id: 1, name: 'Anuncio 1'},
    { id: 2, name: 'Anuncio 2'},
    { id: 3, name: 'Anuncio 3'}
  ])
})

app.get('/ads/:id/discord', (request, response) => {
  const adId = request.params.id
  
  return response.json([])
})

app.listen(3333)