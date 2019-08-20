'use strict';

const { getLogger } = require('@fizzygalacticus/colored-fancy-log');
const logger = getLogger({ name: 'trythis' });

const printError = err => {
    if (err.message) {
        logger.error(err.message);
    } else {
        logger.error(err);
    }
};

const printSuccess = result => logger.success('received:', result);

module.exports = (fn = () => {}) => (...params) => {
    logger.info('trying...');

    try {
        let result = fn(...params);

        if (result && typeof result.then === 'function') {
            return new Promise(async (resolve, reject) => {
                try {
                    result = await result;

                    printSuccess(result);

                    resolve(result);
                } catch (err) {
                    printError(err);

                    reject(err);
                }
            });
        } else {
            printSuccess(result);

            return result;
        }
    } catch (err) {
        printError(err);

        throw err;
    }
};
