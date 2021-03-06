import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTasks,
  faStopwatch,
  faAddressCard,
  faCoins,
  faUserCircle,
  faPlusCircle,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import router from "./routes";
import store from "./store";

import BaseCard from "./components/BaseCard";
import BaseButton from "./components/BaseButton";
import BaseForm from "./components/BaseForm";
import BaseInput from "./components/BaseInput";
import BaseSpinner from "./components/BaseSpinner";
import BaseDialog from "./components/BaseDialog";
import BaseLoader from "./components/BaseLoader";

const app = createApp(App);

library.add(faTasks);
library.add(faStopwatch);
library.add(faAddressCard);
library.add(faCoins);
library.add(faUserCircle);
library.add(faPlusCircle);
library.add(faCheck);
library.add(faTimes);

app.use(router);
app.use(store);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-form", BaseForm);
app.component("base-input", BaseInput);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);
app.component("base-loader", BaseLoader);

app.mount("#app");
