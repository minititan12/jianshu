import React from 'react';
import {GlobalStyle} from './style.js';
import {IconFontStyle} from './statics/iconfont/iconfont.js';
import store from './store';
import {Provider} from 'react-redux';
import Header from './common/header';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail'; 
import Login from './pages/login';
import Write from './pages/write';

function App() {
  return (
    <>
      <IconFontStyle/>
      <GlobalStyle/>
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <Route path="/jianshu" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/write" exact component={Write}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
