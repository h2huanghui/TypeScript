"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FocusInput_1 = __importDefault(require("./components/FocusInput"));
const Count_1 = __importDefault(require("./components/Count"));
const App = () => {
    return (react_1.default.createElement("div", { className: 'App' },
        react_1.default.createElement(FocusInput_1.default, null),
        react_1.default.createElement(Count_1.default, null)));
};
exports.default = App;
