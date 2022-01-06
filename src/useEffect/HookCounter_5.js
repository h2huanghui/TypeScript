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
    //useEffect 的第一个入参是一个匿名函数，它会在每次 render 后调用。在第一次 render 和后续的更新 render 都会被调用
    //useEffect 写在函数式组件内，这样就可以直接拿到 props 和 state 的值，不用写 this 之类的代码。
    react_1.useEffect(() => {
        document.title = `${count} times`;
    });
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("button", { onClick: () => {
                setCount((prevCount) => prevCount + 1);
            } },
            "Clicked ",
            count,
            " times")));
}
exports.default = HookCounter;
