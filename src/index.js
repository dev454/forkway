import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import rootReducer from "./redux/reducers";

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSTION__ && window.__REDUX_DEVTOOLS_EXTENSTION__()
);
const initialData = [
  {
    id: 203483921,
    name: "Yoav Sharon",
    unusualHours: "1:00",
    manualHours: "1:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483922,
    name: "Yoav Sharon",
    unusualHours: "2:00",
    manualHours: "2:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483923,
    name: "Yoav Sharon",
    unusualHours: "3:00",
    manualHours: "3:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483924,
    name: "Yoav Sharon",
    unusualHours: "5:00",
    manualHours: "5:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483925,
    name: "Yoav Sharon",
    unusualHours: "4:00",
    manualHours: "4:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483924,
    name: "Yoav Sharon",
    unusualHours: "4:00",
    manualHours: "4:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483924,
    name: "Yoav Sharon",
    unusualHours: "4:00",
    manualHours: "4:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483924,
    name: "Yoav Sharon",
    unusualHours: "4:00",
    manualHours: "4:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483924,
    name: "Yoav Sharon",
    unusualHours: "4:00",
    manualHours: "4:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483924,
    name: "Yoav Sharon",
    unusualHours: "4:00",
    manualHours: "4:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483924,
    name: "Yoav Sharon",
    unusualHours: "4:00",
    manualHours: "4:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483924,
    name: "Yoav Sharon",
    unusualHours: "4:00",
    manualHours: "4:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483924,
    name: "Yoav Sharon",
    unusualHours: "4:00",
    manualHours: "4:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483924,
    name: "Yoav Sharon",
    unusualHours: "4:00",
    manualHours: "4:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483924,
    name: "Yoav Sharon",
    unusualHours: "4:00",
    manualHours: "4:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483924,
    name: "Yoav Sharon",
    unusualHours: "4:00",
    manualHours: "4:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483924,
    name: "Yoav Sharon",
    unusualHours: "4:00",
    manualHours: "4:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483924,
    name: "Yoav Sharon",
    unusualHours: "4:00",
    manualHours: "4:00",
    hours: "155:00",
    totalHours: "159:00",
  },
  {
    id: 203483924,
    name: "Yoav Sharon",
    unusualHours: "4:00",
    manualHours: "4:00",
    hours: "155:00",
    totalHours: "159:00",
  },
];

const store = createStore(rootReducer, { items: initialData }, enhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
