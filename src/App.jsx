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

	const handleCreate = (data) => {
		const newPost = {
			...data,
			id: (Date.now() + Math.random()).toString(),
		};
		setPosts([newPost, ...posts]);
		navigate('/');
	};

	const handleEdit = (id, data) => {
		setPosts(posts.map((post) => (post.id === id ? { ...post, ...data } : post)));
		navigate(`/post/${id}`);
	};

	const handleDelete = (id) => {
		setPosts(posts.filter((post) => post.id !== id));
	};

	const findPost = (id) => posts.find((post) => post.id === id);

	const filteredPosts = posts.filter(
		(post) =>
			post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
			post.author.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<Layout>
			<header
				className="header"
				style={{
					background: '#282c34',
					color: '#fff',
					padding: '40px 20px',
					boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
					textAlign: 'center',
				}}
			>
				<h1
					className="headerTitle"
					style={{ fontSize: '3rem', fontWeight: '900', letterSpacing: '2px', marginBottom: '8px' }}
				>
					Flexi Blog
				</h1>
				<p
					className="headerSubtitle"
					style={{ fontSize: '1.25rem', fontWeight: '400', opacity: 0.85, marginBottom: '32px' }}
				>
					A modern, responsive blog built with React & Vite
				</p>
				<div style={{ margin: '24px 0' }}>
					<input
						type="search"
						placeholder="Search posts by title, content, or author..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						style={{
							width: '60%',
							maxWidth: '600px',
							padding: '14px 20px',
							borderRadius: '30px',
							border: '1px solid #ccc',
							boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
							fontSize: '1rem',
							transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
						}}
						onFocus={(e) => {
							e.target.style.borderColor = '#007BFF';
							e.target.style.boxShadow = '0 4px 12px rgba(0,123,255,0.3)';
						}}
						onBlur={(e) => {
							e.target.style.borderColor = '#ccc';
							e.target.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
						}}
						aria-label="Search posts"
					/>
				</div>
				<div style={{ textAlign: 'right', margin: '16px 0', maxWidth: '60%', marginLeft: 'auto', marginRight: 'auto' }}>
					<Link
						to="/new"
						style={{
							background: '#007BFF',
							color: '#fff',
							padding: '12px 24px',
							borderRadius: '30px',
							textDecoration: 'none',
							fontWeight: '700',
							fontSize: '1.1rem',
							boxShadow: '0 4px 12px rgba(0,123,255,0.4)',
							transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
							display: 'inline-block',
						}}
						onMouseEnter={(e) => {
							e.target.style.backgroundColor = '#0056b3';
							e.target.style.boxShadow = '0 6px 16px rgba(0,86,179,0.6)';
						}}
						onMouseLeave={(e) => {
							e.target.style.backgroundColor = '#007BFF';
							e.target.style.boxShadow = '0 4px 12px rgba(0,123,255,0.4)';
						}}
					>
						+ Create New Post
					</Link>
				</div>
			</header>
			<main style={{ background: '#f5f6fa', minHeight: '100vh', padding: '20px 40px' }}>
				<Routes>
					<Route
						path="/"
						element={
							<BlogPostList
								posts={filteredPosts}
								cardMode={true}
								onEdit={(id) => navigate(`/edit/${id}`)}
								onDelete={handleDelete}
							/>
						}
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
