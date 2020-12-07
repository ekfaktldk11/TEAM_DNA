class Post {
    constructor(
        id,
        title,
        orgLang,
        trsLang,
        targetItem,
        transComplete,
        apply
    ){
        this.id = id;
        this.title = title;
        this.targetItem = targetItem;
        this.orgLang = orgLang;
        this.trsLang = trsLang;
        this.transComplete = transComplete;
        this.apply = apply;
    }
}

export default Post;