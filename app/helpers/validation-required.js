import Ember from 'ember';

export function validationRequired([value]) {
    if (value.length === 0 || value === 0) {
        return 'user-edit__formControl__error user-edit__formControl__error--show';
    }
    return 'user-edit__formControl__error';
}

export default Ember.Helper.helper(validationRequired);
