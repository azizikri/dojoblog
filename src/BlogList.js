import PropTypes from 'prop-types';

const BlogList = ({ blogs, title, handleDelete }) => {

    BlogList.propTypes = PropTypes.any;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(({ title, author, id }) => (
                <div className="blog-preview" key={id}>
                    <h2>{title}</h2>
                    <p>written by {author}</p>
                    <button onClick={() => handleDelete(id)}>Delete Blog</button>
                </div>
            ))}
        </div>
    );

}

export default BlogList;