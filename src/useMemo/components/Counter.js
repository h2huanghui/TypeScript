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
function Counter() {
    const [counterOne, setCounterOne] = react_1.useState(0);
    const [counterTwo, setCounterTwo] = react_1.useState(0);
    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    };
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    };
    // 每次state更新时，组件会rerender,isEven会被执行。需要优化，告诉React不要有不必要的计算，特别是这种计算复杂的
    // const isEven = () => {
    //   let i = 0;
    //   while (i < 100000000) i += 1;
    //   return counterOne % 2 === 0;
    // };
    const isEven = react_1.useMemo(() => {
        let i = 0;
        while (i < 100000000)
            i += 1;
        return counterOne % 2 === 0;
    }, [counterOne]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("button", { onClick: incrementOne },
            "Count One = ",
            counterOne),
        react_1.default.createElement("span", null, isEven ? 'even' : 'odd'),
        react_1.default.createElement("br", null),
        react_1.default.createElement("button", { onClick: incrementTwo },
            "Count Two = ",
            counterTwo)));
}
exports.default = Counter;
