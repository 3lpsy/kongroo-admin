
export default class GeneralError {
    constructor(name = null, code = null, message = "", lineNumber = null) {
        this.name = name || "GeneralError";
        this.code = code || "GEN_ERROR";
        this.message = message;
        this.lineNumber = 'UNKOWN';
    }

    toString() {
        return `Uncaught ${this.name} (${this.code}): ${this.message} at line ${this.lineNumber}`
    }
}
