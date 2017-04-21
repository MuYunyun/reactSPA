import ReactDOM from 'react-dom';
import routes from './routes';
import './index.css';  // 实际不需要，gh-pages上展示需要

ReactDOM.render((
  routes
), document.getElementById('root'));