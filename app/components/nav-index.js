import Component from '@ember/component';
import { computed } from '@ember/object';
import { hebrew, aramaic } from 'bdb-app/data/letters'

export default Component.extend({
    activeLetter: 1,
    section: null,
    letterIndex: computed('section', function(){
        let section = this.get('section')

        if(section == 'aramaic'){
            this.set('activeLetter', 101)
            return aramaic
        } else {
            this.set('activeLetter', 1)
            return hebrew
        }
    }),
    actions: {
        setLetter(letter_id){
            this.set('activeLetter', letter_id)
        }
    }
});
