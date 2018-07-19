import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import CreateCategory from './components/CreateCategory';
import Categories from './components/Categories';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';
import Articles from './components/Articles';


const App = (props) => {
  return (
    <BrowserRouter>
    <div>
      <Switch>
          <Route exact path='/' component={CreateCategory} />
          <Route exact path='/categories' component={Categories} />
          <Route exact path='/create_article' component={CreateArticle} />
          <Route exact path='/articles' component={Articles} />
          <Route exact path='/edit_article' component={EditArticle} />
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App;
