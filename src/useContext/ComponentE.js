"use strict";
// import React from 'react';
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
// import ComponentF from './ComponentF';
// function ComponentE() {
//   return (
//     <div>
//       <ComponentF />
//     </div>
//   );
// }
// export default ComponentE;
const react_1 = __importStar(require("react"));
const ComponentF_1 = __importDefault(require("./ComponentF"));
const App_1 = require("./App");
function ComponentE() {
    const user = react_1.useContext(App_1.UserContext);
    const channel = react_1.useContext(App_1.ChannelContext);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(ComponentF_1.default, null),
        react_1.default.createElement("br", null),
        user,
        " - ",
        channel));
}
exports.default = ComponentE;
