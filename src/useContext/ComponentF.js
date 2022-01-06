"use strict";
// import React from 'react';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { UserContext } from './App';
// function ComponentF() {
//   return (
//     <div>
//       {/* 消费Context */}
//       <UserContext.Consumer>
//         {(user) => <div>User context value {user}</div>}
//       </UserContext.Consumer>
//     </div>
//   );
// }
// export default ComponentF;
const react_1 = __importDefault(require("react"));
const App_1 = require("./App");
function ComponentF() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(App_1.UserContext.Consumer, null, (user) => (react_1.default.createElement(App_1.ChannelContext.Consumer, null, (channel) => (react_1.default.createElement("div", null,
            "User context value ",
            user,
            ", channel value ",
            channel)))))));
}
exports.default = ComponentF;
