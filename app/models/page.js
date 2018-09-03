import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    section:    DS.attr('string'),
    emory_page: DS.attr('number'),
    next:       DS.attr('string'),
    prev:       DS.attr('string'),
    img_url:    computed('section', 'id', function(){
        let section = this.get('section')
        let id = this.get('id')
        let url = `http://localhost:8182/iiif/2/bdb_emory_page-${id}.jp2/full/pct:60/0/gray.jpg`

        return url
    }),
    emory_url:  computed('emory_page', function(){
        let page = this.get('emory_page')
        return `http://iiif.archivelab.org/iiif/00825376.1523.emory.edu$${page}/full/1024/0/gray.png`
    })
});
