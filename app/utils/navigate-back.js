import Ember from 'ember';

const { get } = Ember;

export default function navigateBack() {
    const service = get(this, 'service');
    const id = service.getId();
    const goBack = get(this, 'goBack');
    goBack(id);
}
