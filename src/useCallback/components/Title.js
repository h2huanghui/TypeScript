"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Title() {
    console.log('Rendering Title');
    return react_1.default.createElement("h2", null, "useCallback");
}
exports.default = react_1.default.memo(Title);
