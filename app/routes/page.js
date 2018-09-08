import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    if (params.page == 'title') {
      this.transitionTo('home')
    }
    return this.get('store').findRecord('page', params.page)
  },
  afterModel(model, _transition) {
      let new_section = model.get('section')
      let page = model.get('id')

      this.controllerFor('application').send('set_section', new_section)
      this.controllerFor('application').send('set_letter_by_page', page)
  }
});
