"use strict";
const btn = document.querySelector("#btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    console.log("click");
});
function test(str, _) {
    console.log(str);
    console.log(arguments);
}
test("qwe", 123);
//# sourceMappingURL=app.js.map