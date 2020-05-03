import DS from 'ember-data';
import Ember from 'ember';
const { computed } = Ember;
const { Model, attr, hasMany } = DS;

export default Model.extend({
    posts: hasMany('post', { async: false }),
    firstName: attr('string'),
    lastName: attr('string'),
    email: attr('string'),
    points: attr('number'),
    online: attr('boolean'),
    compare: attr('boolean'),
    favorite: attr('boolean'),

    fullName: computed('firstName', 'lastName', {
        get() {
            const firstName = this.get('firstName');
            const lastName = this.get('lastName');
            return `${firstName} ${lastName}`;
        },
    }),
});
