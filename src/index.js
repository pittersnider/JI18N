'use strict';

var parse = function(schema, key, parent = '$') {

    if (!schema) {
        throw new Error('An object is required to format JSON I18N.');
    }

    if (typeof key != 'string') {
        throw new Error('The key should be a string to format JSON I18N');
    }

    if (typeof parent != 'string') {
        throw new Error('The parent key should be a string to format JSON I18N');
    }

    var keys = Object.keys(schema);

    for (var index = 0; index < keys.length; index++) {

        if (keys[index] === parent) {
            return schema[keys[index]][key];
        } else {

            if (typeof schema[keys[index]] === 'object') {
                schema[keys[index]] = parse(schema[keys[index]], key, parent);
            }

        }

    }

    return schema;

};

module.exports = parse;
