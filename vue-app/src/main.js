import { createApp } from 'vue';
import App from './App.vue';

const appMountingId = '#mf-vue-app';
let vueApp = null;

export function mount(props) {
    return new Promise((resolve) => {
        vueApp = createApp(App);
        vueApp.mount(appMountingId);
        console.log("Vue App Mounted", {props});
        resolve();
    });
}

export function unmount() {
    return new Promise((resolve) => {
        if (vueApp) {
            vueApp.unmount();
            vueApp = null;
            console.log("Vue App Unmounted");
        }
        resolve();  // Resolve the Promise after unmounting
    });
}

// Run locally if single-spa is not controlling the app
if (!window.singleSpaNavigate) {
    mount().then(() => {
        console.log('Vue app mounted locally');
    });
}
