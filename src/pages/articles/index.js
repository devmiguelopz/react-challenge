import { ArticleItem } from '../../components/article-item'

import './style.css'

const data = [
  {
    userId: 1,
    title: 'Nota 1',
    body: 'texto nota 1'
  },
  {
    userId: 1,
    title: 'Nota 2',
    body: 'texto nota 2'
  },
  {
    userId: 2,
    title: 'Nota 3',
    body: 'texto nota 3'
  },
  {
    userId: 3,
    title: 'Nota 4',
    body: 'texto nota 4'
  }
]

export const ArticlesPage = () => (
  <section>
    <h2>Articles</h2>
    <div className="header-table">
      <ul>
        <li>Title</li>
        <li>User Id</li>
        <li>Body</li>
      </ul>
    </div>
    <ul className="articles-list">
      {data.map((article, i) => (
        <li key={i}>
          <ArticleItem
            title={article.title}
            userId={article.userId}
            body={article.body}
          />
        </li>
      ))}
    </ul>
  </section>
)
