  
const Sidebar = {
    props: ["model"],
    render(h) {
       return SidebarView({
            h,
            keywords: this.model.getKeywords(),
            addTerm: x => this.model.addKeyword(x),
            removeTerm: x => this.model.removeKeyword(x)
          });
     }
}