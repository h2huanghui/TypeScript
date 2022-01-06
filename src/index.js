"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
require("./datatype");
// import App from './useState/App';
// import App from './useEffect/App';
// import App from './useContext/App';
// import App from './useReducer/App';
// import App from './useReducer_useContext/App';
// import App from './useCallback/App';
// import App from './useMemo/App';
// import App from './useRef/App';
// import App from './custom_hooks/App';
const App_1 = __importDefault(require("./useImperativeHandle/App"));
react_dom_1.default.render(react_1.default.createElement(App_1.default, null), document.querySelectorAll('.app')[0]);
