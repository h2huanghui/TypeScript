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
const App_1 = require("../App");
function F() {
    const countContext = react_1.useContext(App_1.CountContext);
    return (react_1.default.createElement("div", null,
        "F - ",
        countContext.countState,
        react_1.default.createElement("button", { onClick: () => countContext.countDispatch('increment') }, "Increment"),
        react_1.default.createElement("button", { onClick: () => countContext.countDispatch('decrement') }, "Decrement"),
        react_1.default.createElement("button", { onClick: () => countContext.countDispatch('reset') }, "Reset")));
}
exports.default = F;
