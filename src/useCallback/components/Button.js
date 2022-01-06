"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Button(props) {
    console.log('Rendering button', props.children);
    return react_1.default.createElement("button", { onClick: props.handleClick }, props.children);
}
exports.default = react_1.default.memo(Button);
