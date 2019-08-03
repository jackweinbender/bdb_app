import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    buildURL: function(record, suffix) {
        var s = this._super(record, suffix);
        return s + ".json";
    }
});
