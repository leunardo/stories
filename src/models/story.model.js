
export default class Story {
    brief = '';
    photo = '';
    title = '';
    tags = [];
    friendlyUrl = '';
    fullStory = '';
    /** @type {Date} */
    date = null;

    /** 
     * @param {Partial<Story>}  init
    * */
    constructor(init) {
        Object.assign(this, init);
    }
}

