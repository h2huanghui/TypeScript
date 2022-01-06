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
const react_1 = __importStar(require("react"));
const Child_1 = __importDefault(require("./Child"));
function Parent() {
    const [name, SetName] = react_1.useState('');
    const childRef = react_1.useRef(null);
    const handleChange = (val) => {
        SetName(val);
    };
    const handleSend = () => {
        var _a;
        console.log(`your name: ${name} will be sent`);
        // fakePost(someUrl, name)
        SetName('');
        // empty Child's input field
        (_a = childRef.current) === null || _a === void 0 ? void 0 : _a.emptyField();
    };
    return (react_1.default.createElement("div", { className: 'App' },
        react_1.default.createElement(Child_1.default, { onChange: handleChange, ref: childRef },
            react_1.default.createElement("span", null, "Please Enter your name")),
        "\u00A0\u00A0",
        react_1.default.createElement("button", { onClick: handleSend }, "send")));
}
exports.default = Parent;
