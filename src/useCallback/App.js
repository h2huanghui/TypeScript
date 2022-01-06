"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ParentComponenet_1 = __importDefault(require("./components/ParentComponenet"));
const App = () => {
    return (react_1.default.createElement("div", { className: 'App' },
        react_1.default.createElement(ParentComponenet_1.default, null)));
};
exports.default = App;
