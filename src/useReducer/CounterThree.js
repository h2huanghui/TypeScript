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
const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
};
function CounterThree() {
    const [count, dispatch] = react_1.useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = react_1.useReducer(reducer, initialState);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null,
            "Count - ",
            count),
        react_1.default.createElement("button", { onClick: () => dispatch('increment') }, "Increment"),
        react_1.default.createElement("button", { onClick: () => dispatch('decrement') }, "Decrement"),
        react_1.default.createElement("button", { onClick: () => dispatch('reset') }, "Reset"),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", null,
            "CountTwo - ",
            countTwo),
        react_1.default.createElement("button", { onClick: () => dispatchTwo('increment') }, "Increment"),
        react_1.default.createElement("button", { onClick: () => dispatchTwo('decrement') }, "Decrement"),
        react_1.default.createElement("button", { onClick: () => dispatchTwo('reset') }, "Reset")));
}
exports.default = CounterThree;
