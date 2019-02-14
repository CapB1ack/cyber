import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {CyberSecurity} from './CyberSecurity';
import './sass/main.scss';

const str = ReactDOMServer.renderToStaticMarkup(<CyberSecurity/>);
console.log(str);

ReactDOM.render(<CyberSecurity />, document.getElementById('root'));

