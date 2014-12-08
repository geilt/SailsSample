/**
 * Template Model (NOT FOR USE)
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs    :: http://sailsjs.org/#!documentation/models
 * @note    : GLOBALS: process, sails, models, Promise
 */
/**
 * Required Files / Dependencies
 */

/**
 * Model Attributes
 */
module.exports = {
    tableName: 'mytable',
    schema: true,
    migrate: 'safe',
    attributes: {
        deletedBy: {
            model: 'User'
        },
        createdBy: {
            model: 'User'
        },
        updatedBy: {
            model: 'User'
        },
        deletedAt: 'datetime',
        toJSON: function() {
            var obj = this.toObject();
            return obj;
        }
    },
    beforeValidate: function(values, cb) {
        cb();
    },
    afterValidate: function(values, cb) {
        cb();
    },
    beforeCreate: function(values, cb) {
        cb();
    },
    afterCreate: function(record, cb) {
        cb();
    },
    beforeUpdate: function(values, cb){
        cb();
    },
    afterUpdate: function(record){

    },
    beforeDestroy: function(criteria, cb){
        cb();
    },
    afterDestroy: function(cb){
        cb();
    },
    /**
     * Model Functions
     */
    myFunc: function(args){
        return Template.find(args);
    },
    /**
     * Advanced CRUD Model Functions
     */
    adv: {
        findOne: function(args){
            return Template.findOne(args)
                .populate('connectedtable')
                .then( function(item) {
                    return [item, Template.findOne({})];
                })
                .spread( function(item, item2) {
                    item = item.concat(item2);
                    return item;
                })
                /**
                 * Error Catches Operational Error Types (Not System or Major Errors)
                 */
                .error( function(err){
                    return console.log(err);
                })
                /**
                 * Catch catches all error types
                 */
                .catch( function(err){
                    return console.log(err);
                });
        },
        find: function(args){
            return Template.find(args);
        },
        create: function(record){
            return Template.create(record);
        },
        update: function(where, user){
            return Template.update(where, record);
        },
        destroy: function(where){
            return Template.destroy(where);
        }
    },
    /**
     * Private Model Functions
     */
    _myPrivateFunc: function(password, cb){
        return true;
    },
    
};