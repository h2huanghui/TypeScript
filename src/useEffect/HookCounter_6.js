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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
function HookCounter() {
    const [count, setCount] = react_1.useState(0);
    const [name, setName] = react_1.useState('');
    //useEffect 的第二个参数 [count]，这个参数是一个数组，元素是要被观察的 state 或 props，只有指定的这个变量发生变化时，才会触发 useEffect 中的第一个参数匿名函数的执行。这有利于性能的保证
    react_1.useEffect(() => {
        console.log('useEffect - update title');
        document.title = `You clicked ${count} times`;
    }, [count]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("input", { type: 'text', value: name, onChange: (e) => {
                setName(e.target.value);
            } }),
        react_1.default.createElement("button", { onClick: () => {
                setCount((prevCount) => prevCount + 1);
            } },
            "Clicked ",
            count,
            " times")));
}
exports.default = HookCounter;
