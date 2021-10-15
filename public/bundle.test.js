const rewire = require("rewire")
const bundle = rewire("./bundle")
const App = bundle.__get__("App")
// @ponicode
describe("App", () => {
    test("0", () => {
        let callFunction = () => {
            App()
        }
    
        expect(callFunction).not.toThrow()
    })
})
