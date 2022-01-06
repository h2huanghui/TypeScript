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
const Child = react_1.forwardRef(({ onChange, children }, ref) => {
    const [val, setVal] = react_1.useState("");
    react_1.useImperativeHandle(ref, () => ({
        emptyField() {
            setVal("");
        },
    }), []);
    const handleInputChange = (ev) => {
        const { value } = ev.target;
        setVal(value);
        onChange(value);
    };
    return (react_1.default.createElement("label", null,
        children,
        ":\u00A0\u00A0",
        react_1.default.createElement("input", { value: val, onChange: handleInputChange })));
});
exports.default = Child;
