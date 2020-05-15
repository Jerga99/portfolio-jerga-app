
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';
import { Editor } from 'slate-simple-editor';
import { toast } from 'react-toastify';
import { useGetBlog } from 'actions/blogs';
import { useRouter } from 'next/router';

const BlogUpdateEditor = ({user, loading}) => {
  const router = useRouter();
  const { data } = useGetBlog(router.query.id);
  debugger

  return (
    <BaseLayout user={user} loading={loading}>
      <BasePage>
        { data && data.content &&
          <Editor
            header="Update Your Blog..."
            initialContent={data.content}
            onSave={() => {}}
          />
        }
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(BlogUpdateEditor)('admin');
