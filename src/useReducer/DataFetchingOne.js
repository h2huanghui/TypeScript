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
const react_1 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
const initialState = {
    loading: true,
    error: '',
    post: {},
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload,
            };
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'something went wrong',
                post: {},
            };
        default:
            return state;
    }
};
function DataFetchingTwo() {
    const [state, dispatch] = react_1.useReducer(reducer, initialState);
    react_1.useEffect(() => {
        axios_1.default
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
            dispatch({
                type: 'FETCH_SUCCESS',
                payload: res.data,
            });
        })
            .catch(() => {
            dispatch({
                type: 'FETCH_ERROR',
            });
        });
    }, []);
    return (react_1.default.createElement("div", null,
        state.loading
            ? 'Loading...'
            : // @ts-ignore
                state.post.title,
        state.error ? state.error : null));
}
exports.default = DataFetchingTwo;
