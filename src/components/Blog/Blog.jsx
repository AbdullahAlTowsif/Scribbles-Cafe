import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog)
    return (
        <div>
            <h1 className="text-4xl">Blogs</h1>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;