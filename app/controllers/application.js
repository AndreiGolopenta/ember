import Ember from 'ember';

const {
    Controller,
    computed: { alias }
} = Ember;

export default Controller.extend({
    users: alias('model.users'),
});
