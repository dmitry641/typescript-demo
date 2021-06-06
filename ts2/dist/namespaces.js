"use strict";
/// <reference path="form-namespace.ts"/>
var FormNS;
(function (FormNS) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = "inline";
            this.state = "active";
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state,
            };
        }
    }
    FormNS.form5 = new MyForm("qwe@qwe.qwe");
})(FormNS || (FormNS = {}));
console.log(FormNS.form5);
//# sourceMappingURL=namespaces.js.map