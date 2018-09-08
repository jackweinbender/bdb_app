import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        this.store.findAll('page')
    },
    actions: {
        toggle_section_nav() {
            this.controller.toggleProperty('isSectionNavActive');
        },
        toggle_root_nav() {
            this.controller.toggleProperty('isRootNavActive');
        }
    }
});
