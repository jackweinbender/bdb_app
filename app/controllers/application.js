import Controller from '@ember/controller';
import sections  from '../data/sections';
import { hebrew, aramaic }  from '../data/letters';

export default Controller.extend({
    sections: sections,
    hebrew: hebrew,
    aramaic: aramaic
});
