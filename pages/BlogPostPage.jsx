import { useParams } from 'react-router-dom';
import BlogPostDetail from '../components/BlogPostDetail';

const DUMMY_POSTS = [
  {
    id: '1',
    title: 'How to Learn React',
    content: '<p>Start with the official docs.</p><a href="https://reactjs.org" target="_blank">React Docs</a>',
    author: 'Jane Doe',
    date: '2023-01-01'
  }
];

export default function BlogPostPage() {
  const { id } = useParams();
  const post = DUMMY_POSTS.find(p => p.id === id);

  return (
    <BlogPostDetail
      title={post?.title}
      content={post?.content}
      author={post?.author}
      date={post?.date}
    />
  );
}
