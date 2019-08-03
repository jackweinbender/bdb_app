import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
    section:    DS.attr('string'),
    emory_page: DS.attr('number'),
    next:       DS.attr('string'),
    prev:       DS.attr('string'),
    regions:    DS.hasMany('img-region'),
    img_pct:    DS.attr('number', { defaultValue: 60 }),
    img_crop:   DS.attr('string', { defaultValue: 'pct:9,2,82,96' }),
    img_url:    computed('img_pct', 'img_crop', 'id', function(){
        let id = this.get('id')
        let img_pct = this.get('img_pct')
        let img_crop = this.get('img_crop')
        
        let url = `http://iiif.semitics-archive.org/iiif/2/bdb_emory_page-${id}.jp2/${img_crop}/pct:${img_pct}/0/gray.jpg`

        return url
    }),
    emory_url:  computed('emory_page', function(){
        let page = this.get('emory_page')
        return `http://iiif.archivelab.org/iiif/00825376.1523.emory.edu$${page}/full/1024/0/gray.png`
    }),
    hasRegions: computed('regions', function(){
        return this.regions.length > 0
    })
});
