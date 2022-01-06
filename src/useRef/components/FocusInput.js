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
function FocusInput() {
    //声明泛型
    const inputRef = react_1.useRef(null); //返回一个可变的ref对象
    react_1.useEffect(() => {
        //使用时需要判空
        //返回的 ref 对象在组件的整个生命周期内保持不变。
        inputRef.current && inputRef.current.focus();
    }, []);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("input", { ref: inputRef, type: 'text' })));
}
exports.default = FocusInput;
