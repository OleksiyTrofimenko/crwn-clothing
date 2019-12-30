import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';

const HatsPage = (props) => <h1>HatsPage {console.log(props)}</h1>
const TopicsPage = (props) => <h1>TopicsPage {console.log(props)}</h1>
const TopicDetailsPage = (props) => <h1>TopicDetailsPage {console.log(props)}</h1>

function App() {
  return (
    <div className="App">
      <Link to='/'> Home </Link>
      <Link to='/hats'> Hats </Link>
      <Link to='/topics'> Topics </Link>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route exact path='/topics' component={TopicsPage} />
        <Route path='/topics/:topicId' component={TopicDetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
