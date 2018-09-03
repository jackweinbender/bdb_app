import DS from 'ember-data';

export default DS.Model.extend({
    top:    DS.attr('number'),
    bottom: DS.attr('number'),
    left:   DS.attr('number'),
    right:  DS.attr('number')
});
