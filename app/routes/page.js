import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        if(params.page == 'title'){
            this.transitionTo('index')
        }
        return this.get('store').findRecord('page', params.page)
    },
    actions: {
        go_to(page_id){
            this.transitionTo('page', page_id)
        }
    }
});
