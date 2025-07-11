import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link, useParams } from 'react-router-dom';
import BlogPostList from './BlogPostList.jsx';
import BlogPostPage from '../pages/BlogPostPage.jsx';
import BlogPostForm from '../components/BlogPostForm.jsx';
import Layout from './components/Layout';
import './App.css';

const initialPosts = [
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
];

function App() {
	const [posts, setPosts] = useState(initialPosts);
	const [searchTerm, setSearchTerm] = useState('');
	const navigate = useNavigate();

	// Create new post
	const handleCreate = (data) => {
		const newPost = {
			...data,
			id: (Date.now() + Math.random()).toString(),
		};
		setPosts([newPost, ...posts]);
		navigate('/');
	};

	// Edit post
	const handleEdit = (id, data) => {
		setPosts(posts.map((post) => (post.id === id ? { ...post, ...data } : post)));
		navigate(`/post/${id}`);
	};

	// Delete post
	const handleDelete = (id) => {
		setPosts(posts.filter((post) => post.id !== id));
	};

	// Find post by id
	const findPost = (id) => posts.find((post) => post.id === id);

	const filteredPosts = posts.filter(
		(post) =>
			post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
			post.author.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<Layout>
			<header className="header">
				<h1 className="headerTitle">Flexi Blog</h1>
				<p className="headerSubtitle">A modern, responsive blog built with React & Vite</p>
				<div style={{ margin: '24px 0', textAlign: 'center' }}>
					<input
						type="search"
						placeholder="Search posts by title, content, or author..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						style={{
							width: '60%',
							padding: '12px',
							borderRadius: '8px',
							border: '1px solid #ddd',
						}}
						aria-label="Search posts"
					/>
				</div>
				<div style={{ textAlign: 'right', margin: '16px 0' }}>
					<Link
						to="/new"
						style={{
							background: '#007BFF',
							color: '#fff',
							padding: '8px 16px',
							borderRadius: '4px',
							textDecoration: 'none',
							fontWeight: 'bold',
						}}
					>
						+ Create New Post
					</Link>
				</div>
			</header>
			<main style={{ background: '#f5f6fa', minHeight: '100vh', padding: 0 }}>
				<Routes>
					<Route
						path="/"
						element={<BlogPostList posts={filteredPosts} cardMode={true} onEdit={(id) => navigate(`/edit/${id}`)} onDelete={handleDelete} />}
					/>
					<Route
						path="/post/:id"
						element={<BlogPostPage posts={posts} cardMode={false} onEdit={(id) => navigate(`/edit/${id}`)} />}
					/>
					<Route path="/new" element={<BlogPostForm onSubmit={handleCreate} />} />
					<Route path="/edit/:id" element={<EditWrapper posts={posts} onEdit={handleEdit} />} />
				</Routes>
			</main>
		</Layout>
	);
}

function EditWrapper({ posts, onEdit }) {
	const { id } = useParams();
	const post = posts.find((p) => p.id === id);
	if (!post) return <div style={{ textAlign: 'center', margin: '40px' }}>Post not found.</div>;
	return <BlogPostForm post={post} onSubmit={(data) => onEdit(id, data)} />;
}

export default App;
