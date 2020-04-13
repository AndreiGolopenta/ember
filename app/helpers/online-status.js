import Ember from 'ember';

export function onlineStatus([value]) {
    if (value) {
        return 'Online';
    } else {
        return 'Offline';
    }
}

export default Ember.Helper.helper(onlineStatus);
