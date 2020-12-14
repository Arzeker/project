const Show = {
    props:["hash"],
    data() { return {counter: 1}},
    mounted() {
        this.listener = e => this.counter = this.counter + 1;
        window.addEventListener("hashchange", () => this.listener());
    },
    destroyed() {
        window.removeEventListener("hashchange", () => this.listener());
    },
    render(h) {
        this.counter;
        return this.hash === window.location.hash? h("div", {}, this.$slots.default) : false;
    }
};