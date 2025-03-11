require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

mongoose.set('strictQuery',false)
const url = process.env.MONGODB_URI

mongoose.connect(url)

app.use(cors())
app.use(express.json())

// const blog = new Blog({
//     id: "1",
//     title: "My first blog",
//     author: "Michael Christman",
//     url: "youtube.com",
//     likes: 10
// })

// let blogs = [
//     {
//       id: "1",
//       title: "My first blog",
//       author: "Michael Christman",
//       url: "youtube.com",
//       likes: 10
//     },
//     {
//       id: "2",
//       title: "Another blog",
//       author: "Michael Christman",
//       url: "youtube.com",
//       likes: 15
//     },
//     {
//         id: "3",
//         title: "Third blog",
//         author: "Michael Christman",
//         url: "youtube.com",
//         likes: 20
//     }
//   ]

app.get('/', (request, response) => {
  response.send('<h1>Blog List Backend Connected</h1>')
})

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

const PORT = process.env.PORT
app.listen(PORT , () => {
  console.log(`Server running on port ${PORT}`)
})