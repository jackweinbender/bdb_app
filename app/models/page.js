import DS from 'ember-data';

export default DS.Model.extend({
    section:    DS.attr('string'),
    emory_page: DS.attr('number'),
    next:       DS.attr('string'),
    prev:       DS.attr('string')
});
