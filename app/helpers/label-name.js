import Ember from 'ember';

export function labelName([value]) {
    switch (value) {
        case 'firstName': {
            return 'First Name';
        }
        case 'lastName': {
            return 'Last Name';
        }
        case 'number': {
            return 'Points';
        }
        default: {
            return `${value[0].toUpperCase()}${value.slice(1)}`;
        }
    }
}

export default Ember.Helper.helper(labelName);
