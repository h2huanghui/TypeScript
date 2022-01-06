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
const Title_1 = __importDefault(require("./Title"));
const Count_1 = __importDefault(require("./Count"));
const Button_1 = __importDefault(require("./Button"));
function ParentComponenet() {
    const [age, setAge] = react_1.useState(29);
    const [salary, setSalary] = react_1.useState(50000);
    // const incrementAge = () => {
    //   setAge(age + 1);
    //   //state变化， ParentComponent进行了rerender.Tile没有传入属性，React.memo判断出不需要rerender
    //   //但是Increment salary按钮上的属性incrementSalary方法，实际上被重新创建了，导致了这个Button传入的props发生了变化，因此React.memo没有组织rerender
    // };
    const incrementAge = react_1.useCallback(() => {
        setAge(age + 1);
    }, [age]);
    const incrementSalary = react_1.useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Title_1.default, null),
        react_1.default.createElement(Count_1.default, { text: 'Age', count: age }),
        react_1.default.createElement(Button_1.default, { handleClick: incrementAge }, "Increment age"),
        react_1.default.createElement(Count_1.default, { text: 'Salary', count: salary }),
        react_1.default.createElement(Button_1.default, { handleClick: incrementSalary }, "Increment salary")));
}
exports.default = ParentComponenet;
