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
function RunEffectsOnlyOnce() {
    const [x, setX] = react_1.useState(0);
    const [y, setY] = react_1.useState(0);
    const logMousePos = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    };
    //useEffect 方法的第二个参数传入一个空数组，有效的避免了多次调用的问题
    react_1.useEffect(() => {
        console.log('addEventListener');
        document.addEventListener('mousemove', logMousePos);
        // 没有正确卸载子组件导致的。mousemove 事件依然被监听着和执行。并且可能会导致内存泄露。
        return () => {
            document.removeEventListener('mousemove', logMousePos);
        };
    }, []);
    return (react_1.default.createElement("div", null,
        "Y - ",
        y,
        ", X - ",
        x));
}
exports.default = RunEffectsOnlyOnce;
