import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Blog from './components/Blog';
//import Register from './Views/Register';
import Hero from './components/Hero';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const Content = ({isLogin}) => {

  const visibility = {
    visible: '',
    hidden: 'hide'
  }
  
  const animation = {
    fadeIn: 'fade-in',
    fadeOut: 'fade-out'
  }
  
  const [visibilityClass, setVisibilityClass] = useState(visibility.hidden);
  const [animationClass, setAnimationClass] = useState(animation.fadeOut);

  useEffect(() => {
    let hiddenClassTimer = null 
    

    if(isLogin){
      setAnimationClass(animation.fadeIn);
      setVisibilityClass(visibility.visible);    
    } else {
      setAnimationClass(animation.fadeOut);
       hiddenClassTimer = setTimeout(() => {
        setVisibilityClass(visibility.hidden)
      }, 2000)
    }

    return () => {
      clearTimeout(hiddenClassTimer);
    }
  },[isLogin])

  if(isLogin){
    return <Login visible={`${visibilityClass} ${animationClass}`}/>
  } else{
    return <Hero visible={animation.fadeIn}/>
  }
  
  
}

function App() {
  const [isLogin, setIsLogin]   = useState(false);
  const handleLoginClick = () => {
    setIsLogin(!isLogin);
  }
 

  return (
    <BrowserRouter>
        <div>
          {/* <Blog /> */}
          {/* <Register /> */}
          <Header onLoginClick={handleLoginClick}/>
          <Switch>
            <Route path="/" exact>
                <Content isLogin={isLogin}/>
                <News />
            </Route>       
            <Route path="/blog/:id">
                <Blog />
            </Route>
          </Switch>  
          <Contact /> 
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
