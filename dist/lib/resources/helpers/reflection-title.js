"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Handlebars = __importStar(require("handlebars"));
const utils_1 = require("../../utils");
function default_1(theme) {
    Handlebars.registerHelper("reflectionTitle", function (shouldEscape = true) {
        const title = [""];
        if (this.model &&
            this.model.kindString &&
            this.url !== this.project.url) {
            title.push(`${this.model.kindString}: `);
        }
        if (this.url === this.project.url) {
            title.push((0, utils_1.camelToSnakeCase)(theme.indexTitle) || this.project.name);
        }
        else {
            title.push(shouldEscape
                ? (0, utils_1.escapeChars)((0, utils_1.camelToSnakeCase)(this.model.name))
                : (0, utils_1.camelToSnakeCase)(this.model.name));
            if (this.model.typeParameters) {
                const typeParameters = this.model.typeParameters
                    .map((typeParameter) => typeParameter.name)
                    .join(", ");
                title.push(`<${(0, utils_1.camelToSnakeCase)(typeParameters)}${shouldEscape ? "\\>" : ">"}`);
            }
        }
        return title.join("");
    });
}
exports.default = default_1;
