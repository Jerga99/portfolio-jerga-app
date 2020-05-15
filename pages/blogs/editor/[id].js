
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';
import { Editor } from 'slate-simple-editor';
import { toast } from 'react-toastify';

const BlogUpdateEditor = ({user, loading}) => {

  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        <Editor
          header="Update Your Blog..."
          onSave={() => {}}
        />
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(BlogUpdateEditor)('admin');
