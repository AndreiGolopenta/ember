import Ember from 'ember';

function check(value, elementClass) {
    if (value.length === 0 || value === 0) {
        return `${elementClass} ${elementClass}--show`;
    }
    return elementClass;
}

export function validationRequired([value, element]) {
    switch (element) {
        case 'span': {
            const elementClass = 'user-edit__formControl__error';
            return check(value, elementClass);
        }
        case 'input': {
            const elementClass = 'user-edit__formControl__input';
            return check(value, elementClass);
        }
        case 'label': {
            const elementClass = 'user-edit__formControl__label';
            return check(value, elementClass);
        }
    }
}

export default Ember.Helper.helper(validationRequired);
