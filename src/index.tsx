import React from 'react';
import ReactDOM from 'react-dom';

import './datatype';
import './enum';
import './enum2';
import './function';
import './class';
import './class2'

// import App from './useState/App';
// import App from './useEffect/App';
// import App from './useContext/App';
// import App from './useReducer/App';
// import App from './useReducer_useContext/App';
// import App from './useCallback/App';
// import App from './useMemo/App';
// import App from './useRef/App';
// import App from './custom_hooks/App';
import App from './useImperativeHandle/App';

ReactDOM.render(<App />, document.querySelectorAll('.app')[0]);
