import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';


export default Component.extend({
    tagName: 'nav',
    classNames: ['page-nav'],
    gotopage: computed('model', function() {
        let m = this.get('model')
        return m.id;
    })
});
