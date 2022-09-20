import { Switch, Route, NavLink } from 'react-router-dom'
import { ArticlesPage } from './pages/articles'
import { NewArticlePage } from './pages/new-article'

import './index.css'

function App () {
  return (
    <div className="app layout">
      <aside>
        <header>
        </header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" exact>Articles</NavLink>
            </li>
            <li>
              <NavLink to="/add" activeClassName="active">New Article</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <header className="page-title">
          <h1>Articles</h1>
        </header>
        <Switch>
          <Route exact path="/" component={ArticlesPage}/>
          <Route exact path="/add" component={NewArticlePage} />
        </Switch>
      </main>
    </div>
  )
}

export default App
