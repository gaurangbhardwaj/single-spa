import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Shell App (React)</h1>
                <nav>
                    <ul>
                        <li><Link to="/react">Go to React App</Link></li>
                        <li><Link to="/vue">Go to Vue App</Link></li>
                    </ul>
                </nav>
                <div id="mf-react-app"></div>
                <div id="mf-vue-app"></div>
            </div>
        </Router>
    );
};

export default App;

