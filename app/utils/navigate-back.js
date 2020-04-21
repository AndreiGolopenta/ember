import Ember from 'ember';

const { get } = Ember;

export default function navigateBack() {
    const user = get(this, 'user');
    const goBack = get(this, 'goBack');
    goBack(user);
}
