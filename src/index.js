import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UseStateDemo from './pages/HookDemo/UseStateDemo/UseStateDemo';
import UseEffectDemo from './pages/HookDemo/UseEffectDemo/UseEffectDemo';
import UseCallbackDemo from './pages/HookDemo/UseCallbackDemo/UseCallbackDemo';
import UseMemoDemo from './pages/HookDemo/UseMemoDemo/UseMemoDemo';
import UseRefDemo from './pages/HookDemo/UseRefDemo/UseRefDemo';
import { store } from './redux/configstore';
import { Provider } from 'react-redux';
import DemoNumber from './pages/HookDemo/UseReduxDemo/DemoNumber/DemoNumber';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App />}>
        <Route path='usestate' element={<UseStateDemo />}></Route>
        <Route path='useeffect' element={<UseEffectDemo />}></Route>
        <Route path='usecallback' element={<UseCallbackDemo />}></Route>
        <Route path='usememo' element={<UseMemoDemo />}></Route>
        <Route path='useref' element={<UseRefDemo />}></Route>
        <Route path='useredux' element={<DemoNumber />}></Route>

      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
