'use strict';

const promiseOrNot = require('@fizzygalacticus/promise-or-not');
const { getLogger } = require('@fizzygalacticus/colored-fancy-log');

module.exports = (fn = () => {}, { name = 'trythis', context, logger = getLogger({ name }) } = {}) => (...params) => {
    const printError = err => {
        if (err.message) {
            logger.error(err.message);
        } else {
            logger.error(err);
        }
    };

    const printSuccess = result => logger.success('received:', result);

    (logger.info || logger.log)('trying...');

    return promiseOrNot(fn, { context, onData: printSuccess, onError: printError })(...params);
};
