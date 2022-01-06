"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HookCounter_4_1 = __importDefault(require("./HookCounter_4"));
// import UseStateWithArray from './UseStateWithArray';
// import DataFetchingOne from './DataFetchingOne';
const App = () => {
    return (react_1.default.createElement("div", { className: 'App' },
        react_1.default.createElement(HookCounter_4_1.default, null)));
};
exports.default = App;
