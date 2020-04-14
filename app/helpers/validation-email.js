import Ember from 'ember';
import emailCheck from '../utils/validation-email';

function check(elementClass, value) {
    if (value.length && emailCheck(value)) {
        return elementClass;
    } else {
        return `${elementClass} ${elementClass}--show`;
    }
}

export function validationEmail([value, element]) {
    switch (element) {
        case 'input': {
            const elementClass = 'user-edit__formControl__input';
            return check(elementClass, value);
        }
        case 'label': {
            const elementClass = 'user-edit__formControl__label';
            return check(elementClass, value);
        }
        default: {
            const elementClass = 'user-edit__formControl__error';
            if (value.length) {
                if (emailCheck(value)) {
                    return elementClass;
                }
                return `${elementClass} ${elementClass}--show`;
            } else {
                return `${elementClass} ${elementClass}--hide`;
            }
        }
    }
}

export default Ember.Helper.helper(validationEmail);
