"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setupTest_1 = require("./setupTest");
describe('setupTest function', () => {
    test('that it returns the correct text', () => {
        expect((0, setupTest_1.setupTest)()).toEqual('Typescript is setup! Lets go!');
    });
});
