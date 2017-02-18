
import GeneralError from 'errors/GeneralError';

export default class VuexError extends GeneralError {
    constructor(message = "", lineNumber = null) {
        super("VuexError", "VUEX_ERROR", message, lineNumber);
    }
}
