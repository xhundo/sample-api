"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let app = (0, express_1.default)();
let PORT = 3000;
app.get('/', (req, res) => {
    res.send('hello, welcome to EXPRESS!');
});
app.get('/world', (req, res) => {
    res.send('hello world!');
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
