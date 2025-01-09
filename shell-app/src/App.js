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
                <p>Select an app from the links above.</p>
            </div>
        </Router>
    );
};

export default App;

