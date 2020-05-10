
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import Link from 'next/link';
import { useGetPosts } from '@/actions';
import { useGetUser } from '@/actions/user';

const Portfolios = () => {
  const { data, loading, error } = useGetPosts();
  const { data: dataU, loading: loadingU } = useGetUser();

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
    <BaseLayout user={dataU} loading={loadingU}>
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
