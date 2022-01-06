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
function DataFetchingOne() {
    const [loading, setLoading] = react_1.useState(true);
    const [error, setError] = react_1.useState('');
    const [post, setPost] = react_1.useState({});
    react_1.useEffect(() => {
        axios_1.default
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
            setLoading(false);
            setPost(res.data);
            setError('');
        })
            .catch(() => {
            setLoading(false);
            setPost({});
            setError('something went wrong');
        });
    }, []);
    return (react_1.default.createElement("div", null,
        loading ? 'Loading...' : post.title,
        error ? error : null));
}
exports.default = DataFetchingOne;
