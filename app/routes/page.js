import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    if (params.page == 'title') {
      this.transitionTo('home')
    }
    return this.get('store').findRecord('page', params.page)
  }
});
