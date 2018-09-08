import Controller from '@ember/controller';
import { computed } from '@ember/object';
import sections  from '../data/sections';
import { hebrew, aramaic }  from '../data/letters';
import roots from '../data/roots';

export default Controller.extend({
    sections: sections,
    letters: hebrew,
    current_letter: 1,
    current_root: 1,
    current_section: 'BDB',
    roots: computed('current_letter', function(){
        let l = this.get('current_letter')
        return roots[l]
    }),
    actions: {
        set_section(section_id){
            let new_section = sections.find( s => s.id == section_id)
            let new_letters = hebrew
            this.set('current_section', new_section.display )
            if( new_section.id == 'aramaic' ){
                new_letters = aramaic
            }
            this.set('letters', new_letters)
            this.set('current_letter', new_letters[0].id)
        },
        set_letter(letter_id){
            this.set('current_letter', letter_id)
        },
        set_letter_by_page(page_id){
            let new_letter = null
            if (page_id > 0 && page_id < 1118){
                let rs = Object.values(roots).reduce((a,n) => { return a.concat(n) }, [])
                
                new_letter = rs.reduce( (acc, r) => {
                    if (r.page <= page_id) { return r }
                    else { return acc }
                }, { page: 1, letter: 1 })
                
                this.send('set_letter', new_letter.letter)
            }
        }
    }
});
