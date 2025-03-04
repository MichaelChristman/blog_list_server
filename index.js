const express = require('express')
const app = express()

let blogs = [
    {
      id: "1",
      title: "My first blog",
      author: "Michael Christman",
      url: "youtube.com",
      likes: 10
    },
    {
      id: "2",
      title: "Another blog",
      author: "Michael Christman",
      url: "youtube.com",
      likes: 15
    },
    {
        id: "3",
        title: "Third blog",
        author: "Michael Christman",
        url: "youtube.com",
        likes: 20
    }
  ]

  app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
  app.get('/api/blogs', (request, response) => {
    response.json(blogs)
  })

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})