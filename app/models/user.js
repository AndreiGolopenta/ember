import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({
    posts: hasMany('post', { async: false }),
    firstName: attr('string'),
    lastName: attr('string'),
    email: attr('string'),
    points: attr('number'),
    online: attr('boolean'),
    compare: attr('boolean'),
});
