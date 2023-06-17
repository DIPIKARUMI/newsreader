import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import NewsComp from './components/NewsComp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/business"  element={<NewsComp key="business"pageSize={5} country="in" category="business" />} />
            <Route exact path="/entertainment"  element={<NewsComp key="entertainment"pageSize={5} country="in" category="entertainment" />} />
            <Route exact path="/general"  element={<NewsComp key="general" pageSize={5} country="in" category="general" />} />
            <Route exact path="/health"  element={<NewsComp key="health"pageSize={5} country="in" category="health" />} />
            <Route exact path="/science"  element={<NewsComp key="science" pageSize={5} country="in" category="science" />} />
            <Route exact path="/sports" element={<NewsComp key="sports" pageSize={5} country="in" category="sports" />} />
            <Route exact path="/technology"  element={<NewsComp key="technology" pageSize={5} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
