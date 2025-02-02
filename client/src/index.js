import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
//Promise 형태로 store 하기 위한 라이브러리
import promiseMiddleware from 'redux-promise';
//function 형태로 store 하기 위한 라이브러리
import ReduxThunk from 'redux-thunk';
import rootReducer from './_reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Loading from './components/views/Loading/Loading';

//redux-persist
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

//Store 만들 때 미들웨어도 추가
const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);
const store = createStoreWithMiddleware(rootReducer, composeWithDevTools());

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <BrowserRouter>
        <Header />
        <App />
        <Footer />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
