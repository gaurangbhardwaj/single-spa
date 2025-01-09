import { createApp } from 'vue';
import App from './App.vue';

const appMountindId = '#mf-vue-app';
let vueApp = null;

export function mount(props) {
    vueApp = createApp(App);
    vueApp.mount(appMountindId);
    console.log("Vue App Mounted", {props});
}

export function unmount() {
    if (vueApp) {
        vueApp.unmount();
        vueApp = null;
        console.log("Vue App Unmounted");
    }
}

// Run locally if single-spa is not controlling the app
if (!window.singleSpaNavigate) {
    mount();
}
