
import { useEffect, useState } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import Link from 'next/link';

const Portfolios = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const res = await fetch('/api/v1/posts');
      const data = await res.json();
      setPosts(data);
    }

    getPosts();
  }, [])

  const renderPosts = (posts) => {
    return posts.map(post =>
      <li key={post.id} style={{'fontSize': '20px'}}>
        <Link as={`/portfolios/${post.id}`} href="/portfolios/[id]">
          <a>
            {post.title}
          </a>
        </Link>
      </li>
    )
  }

  return (
    <BaseLayout>
      <BasePage>
        <h1>I am Portfolio Page</h1>
        <ul>
          {renderPosts(posts)}
        </ul>
      </BasePage>
    </BaseLayout>
  )
}

export default Portfolios;
