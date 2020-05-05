import { moduleFor, test } from 'ember-qunit';

moduleFor('service:pop-up', 'Unit | Service | pop up', {});

test('pop up testing', function (assert) {
    let service = this.subject();

    assert.equal(service.popUp, false, 'initial state of popUp');
    assert.equal(service.message, '', 'initial message');
    assert.equal(service.messageType, '', 'initial messageType');

    service.setPopUp();
    service.setMessageType('success');
    service.setMessage('This is a test');

    assert.equal(service.popUp, true, 'change popUp');
    assert.equal(
        service.messageType,
        'success',
        'change message type to success'
    );
    assert.equal(service.message, 'This is a test', 'change message');
});
