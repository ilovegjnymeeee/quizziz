import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Settings from './pages/Settings';
import Dashboard from './components/Dashboard';
import AuthModal from './components/AuthModal';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <AuthModal />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/upload" component={Upload} />
          <Route path="/settings" component={Settings} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;