import BlogPost from "./blogPost"

function ListadoBlogs({blogs}) {
  return (
    <>
    <h2 className="heading">Blog</h2>
    <div className="blog">
        {blogs.map(blog => (
        <BlogPost
        key={blog.id}
        blog={blog.attributes}
        />
        ))}
    </div>
      
    </>
  )
}

export default ListadoBlogs
