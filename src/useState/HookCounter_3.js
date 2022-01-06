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
    const initialCount = 0;
    const [count, setCount] = react_1.useState(initialCount);
    // 使用 previous state,通过 function 的方式传入 value 再返回变化后的新 value
    const increment5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount((prevCount) => prevCount + 1);
        }
    };
    return (react_1.default.createElement("div", null,
        "Count: ",
        count,
        react_1.default.createElement("button", { onClick: () => {
                setCount(initialCount);
            } }, "Reset"),
        react_1.default.createElement("button", { onClick: () => {
                setCount((prevCount) => prevCount + 1);
            } },
            ' ',
            "+ 1",
            ' '),
        react_1.default.createElement("button", { onClick: () => {
                setCount((prevCount) => prevCount - 1);
            } },
            ' ',
            "- 1",
            ' '),
        react_1.default.createElement("button", { onClick: increment5 }, " + 5 ")));
}
exports.default = HookCounter;
