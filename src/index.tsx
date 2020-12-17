/** @format */

import React from 'react';
import ReactDOM from 'react-dom';

import { fetchContactListAll } from './api/contact-list';
import App from './App';
import './index.css';

//fetch 와 같은 네트워크와 통신하는 함수는 컴포넌트의 함수 재생성의 영향을 받지 않도록, 또한 테스트의 용의성을 위해 외부에서 주입시키는 방식을 채택했습니다.

ReactDOM.render(
  <React.StrictMode>
    <App fetchContactList={fetchContactListAll} />
  </React.StrictMode>,
  document.getElementById('root')
);
