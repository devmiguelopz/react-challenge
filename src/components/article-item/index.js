import './style.css'

export const ArticleItem = ({ title, body }) => (
  <div className="article-item">
    <span>{title}</span>
    <span>{body}</span>
  </div>
)
