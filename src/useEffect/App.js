"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// import HookCounter from './HookCounter_7';
// import MouseContainer from './components/MouseContainer';
const IntervalCounterHooks_1 = __importDefault(require("./components/IntervalCounterHooks"));
const App = () => {
    return (react_1.default.createElement("div", { className: 'App' },
        react_1.default.createElement(IntervalCounterHooks_1.default, null)));
};
exports.default = App;
