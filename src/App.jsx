import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogPostList from './BlogPostList.jsx'
import BlogPostPage from '../pages/BlogPostPage.jsx'
import './App.css'

// Sample blog data
const blogPosts = [
  {
    id: '1',
    title: 'How to Build a Blog Viewer in React',
    content: `<p>This is a <strong>sample blog post</strong> to demonstrate the <a href='https://react.dev'>React</a> BlogPostDetail component. You can include <em>HTML</em> elements, lists, and more!</p><ul><li>Responsive design</li><li>Accessibility</li><li>Modern UI</li></ul>`,
    author: 'Jane Doe',
    date: '2023-01-01',
  },
  {
    id: '2',
    title: 'Second Blog Post',
    content: `<p>This is another blog post. <a href='https://vitejs.dev'>Vite</a> makes development fast!</p>`,
    author: 'John Smith',
    date: '2024-05-10',
  },
]

function App() {
  return (
    <>
      <header className="header">
        <h1 className="headerTitle">Flexi Blog</h1>
        <p className="headerSubtitle">A modern, responsive blog built with React & Vite</p>
      </header>
      <main style={{ background: '#f5f6fa', minHeight: '100vh', padding: 0 }}>
        <Router>
          <Routes>
            <Route path='/' element={<BlogPostList posts={blogPosts} cardMode={true} />} />
            <Route path='/post/:id' element={<BlogPostPage posts={blogPosts} cardMode={false} />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
