
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from 'hoc/withAuth';
import { Row, Col, Button } from 'reactstrap';
import Masthead from 'components/shared/Masthead';
import PortDropdown from 'components/shared/Dropdown';
import Link from 'next/link';
import { useUpdateBlog, useGetUserBlogs } from 'actions/blogs';
import { toast } from 'react-toastify';

const Dashboard = ({user, loading}) => {
  const [updateBlog] = useUpdateBlog();
  const {data: blogs, mutate} = useGetUserBlogs();

  const changeBlogStatus = async (blogId, status) => {
    updateBlog(blogId, {status})
      .then(() => mutate())
      .catch(() => toast.error('Something went wrong...'));
  }

  const createOption = (blogStatus) => {
    return blogStatus === 'draft' ? {view: 'Publish Story', value: 'published'}
                                   : {view: 'Make a Draft', value: 'draft'}
  }

  const createOptions = (blog) => {
    const option = createOption(blog.status)

    return [
      { key: `${blog._id}-published`,
        text: option.view,
        handlers: {
          onClick: () => changeBlogStatus(blog._id, option.value)}
      },
      { key: `${blog._id}-delete`,
        text: 'Delete',
        handlers: {
          onClick: () => changeBlogStatus(blog._id, 'deleted')}
      }
    ]
  }

  const renderBlogs = (blogs, status) => (
    <ul className="user-blogs-list">
      { blogs && blogs.filter(blog => blog.status === status).map(blog =>
        <li key={blog._id}>
          <Link href="/blogs/editor/[id]" as={`/blogs/editor/${blog._id}`}>
            <a>{blog.title}</a>
          </Link>
          <PortDropdown items={createOptions(blog)} />
        </li>
        )
      }
    </ul>
  )

  return (
    <BaseLayout navClass="transparent" user={user} loading={loading}>
      <Masthead imagePath="/images/home-bg.jpg">
        <h1>Blogs Dashboard</h1>
        <span className="subheading">
          Let's write some nice blog today{' '}
            <Link href='/blogs/editor'>
            <Button color="primary">Create a new Blog</Button>
          </Link>
        </span>
      </Masthead>
      <BasePage className="blog-user-page">
        <Row>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Published Blogs </h2>
            {renderBlogs(blogs, 'published')}
          </Col>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Draft Blogs </h2>
            {renderBlogs(blogs, 'draft')}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default withAuth(Dashboard)('admin');
