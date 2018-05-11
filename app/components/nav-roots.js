import Component from '@ember/component';
import { computed } from '@ember/object';
import roots from 'bdb-app/data/roots';

export default Component.extend({
    letter: null,
    roots: computed('letter', function(){
        let letter = this.get('letter')
        return roots[letter]
    })
});
