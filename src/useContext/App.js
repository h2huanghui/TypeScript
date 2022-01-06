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
exports.ChannelContext = exports.UserContext = void 0;
const react_1 = __importStar(require("react"));
const ComponentC_1 = __importDefault(require("./ComponentC"));
//创建 context
exports.UserContext = react_1.createContext('');
exports.ChannelContext = react_1.createContext('');
const App = () => {
    return (react_1.default.createElement("div", { className: 'App' },
        react_1.default.createElement(exports.UserContext.Provider, { value: 'h2' },
            react_1.default.createElement(exports.ChannelContext.Provider, { value: 'code volution' },
                react_1.default.createElement(ComponentC_1.default, null)))));
};
exports.default = App;
