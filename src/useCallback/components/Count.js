"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Count(props) {
    console.log(`Rendering ${props.text}`);
    return (react_1.default.createElement("div", null,
        props.text,
        " - ",
        props.count));
}
exports.default = react_1.default.memo(Count);
