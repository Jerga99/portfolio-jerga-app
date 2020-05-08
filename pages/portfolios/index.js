
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import Link from 'next/link';
import { useGetData } from '@/actions';

const Portfolios = () => {
  const { data, error, loading } = useGetData('/api/v1/posts');

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
        { loading &&
          <p>Loading data...</p>
        }
        { data &&
          <ul>
            {renderPosts(data)}
          </ul>
        }
        { error &&
          <div className="alert alert-danger">{error.message}</div>
        }
      </BasePage>
    </BaseLayout>
  )
}

export default Portfolios;
