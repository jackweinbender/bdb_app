import Route from '@ember/routing/route';

export default Route.extend({
    model(_params) {
        return this.get('store').findRecord('page', 'title')}
});
