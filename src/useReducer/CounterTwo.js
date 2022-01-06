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
const initialState = {
    firstCounter: 0,
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                firstCounter: state.firstCounter + 1,
            };
        case 'decrement':
            return {
                firstCounter: state.firstCounter - 1,
            };
        case 'reset':
            return initialState;
        default:
            return state;
    }
};
function CounterTwo() {
    const [count, dispatch] = react_1.useReducer(reducer, initialState);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null,
            "Count - ",
            count.firstCounter),
        react_1.default.createElement("button", { onClick: () => dispatch({ type: 'increment' }) }, "Increment"),
        react_1.default.createElement("button", { onClick: () => dispatch({ type: 'decrement' }) }, "Decrement"),
        react_1.default.createElement("button", { onClick: () => dispatch({ type: 'reset' }) }, "Reset")));
}
exports.default = CounterTwo;
