import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"

const appMountindId = "mf-react-app"

// Required for single-spa compatibility
export function mount(props) {
    const root = ReactDOM.createRoot(document.getElementById(appMountindId));
    root.render(<App />);
    console.log("React App Mounted", {props});
}

export function unmount() {
    ReactDOM.createRoot(document.getElementById(appMountindId)).unmount();
    console.log("React App Unmounted");
}

// Only render in standalone mode (useful for local development)
if (!window.singleSpaNavigate) {
    mount({});
}