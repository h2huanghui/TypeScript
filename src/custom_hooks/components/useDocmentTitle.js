"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useDocumentTitle(count) {
    react_1.useEffect(() => {
        document.title = `Count - ${count}`;
    }, [count]);
}
exports.default = useDocumentTitle;
