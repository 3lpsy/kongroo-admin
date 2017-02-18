const types = {
    setMessages: 'message/actions/setMessages',
    removeMessages: 'message/actions/removeMessages',

}
export {types};

import transformer from "message/transformer";

import {types as mutations} from "message/store/mutations";

export default  {
    [types.setMessages]: (context, payload ) => {
        return new Promise((resolve, reject) => {
            let messages = transformer.getCollection(payload.messages);
            context.commit(mutations.SET_MESSAGES, {messages});
            resolve();
        });
    },
    [types.removeMessages]: (context, payload ) => {
        return new Promise((resolve, reject) => {
            let messages = payload.messages;
            if (messages) {
                context.commit(mutations.REMOVE_MESSAGES, {messages});
            }
            resolve();
        });
    }
}
