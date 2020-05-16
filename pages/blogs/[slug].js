
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';

const BlogDetail = () => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        <h1>I am Blog Detail</h1>
      </BasePage>
    </BaseLayout>
  )
}

export default BlogDetail;
