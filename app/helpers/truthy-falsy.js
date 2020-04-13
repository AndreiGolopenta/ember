import Ember from 'ember';

export function truthyFalsy([currentIndex, maxIndex]) {
    return currentIndex === maxIndex ? true : false;
}

export default Ember.Helper.helper(truthyFalsy);
