"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountContext = void 0;
const react_1 = __importStar(require("react"));
const A_1 = __importDefault(require("./components/A"));
const B_1 = __importDefault(require("./components/B"));
const C_1 = __importDefault(require("./components/C"));
exports.CountContext = react_1.createContext({});
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
};
const App = () => {
    const [count, dispatch] = react_1.useReducer(reducer, initialState);
    return (react_1.default.createElement(exports.CountContext.Provider, { value: {
            countState: count,
            countDispatch: dispatch,
        } },
        react_1.default.createElement("div", { className: 'App' },
            "Count - ",
            count,
            react_1.default.createElement(A_1.default, null),
            react_1.default.createElement(B_1.default, null),
            react_1.default.createElement(C_1.default, null))));
};
exports.default = App;
