
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';

const BlogEditor = ({user, loading}) => {
  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage header="Blog Editor">
        <h1>Some text</h1>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(BlogEditor)('admin');
