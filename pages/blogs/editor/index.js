
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';
import { Editor } from 'slate-simple-editor';

const BlogEditor = ({user, loading}) => {

  const saveBlog = (data) => {
    console.log(data);
  }

  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <Editor onSave={saveBlog}/>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(BlogEditor)('admin');
