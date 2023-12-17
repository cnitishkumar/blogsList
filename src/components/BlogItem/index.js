import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {publishedDate, title, description} = blogDetails

  return (
    <>
      <li className="blogs-list">
        <div className="blog-header-container">
          <h1 className="title">{title}</h1>
          <p className="date">{publishedDate}</p>
        </div>
        <p className="description">{description}</p>
      </li>
      <hr />
    </>
  )
}

export default BlogItem
