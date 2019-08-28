'use strict';

const promiseOrNot = require('@fizzygalacticus/promise-or-not');
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

    return promiseOrNot(fn, printSuccess, printError)(...params);
};
