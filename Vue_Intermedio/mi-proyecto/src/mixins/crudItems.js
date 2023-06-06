export const crudItemsMixin = {
    data() {
        return {
            items: [],
            newItem: '',
            itemFilter: '',
        }
    },
    methods: {
        addItem() {
            this.items.unshift({title: this.newItem});
            this.newItem= '';
        },
        eliminateItem(index) {
            this.items.splice(index, 1);
        }
    },
    computed: {
        filteredItems() {
            return this.items.filter(item => {
            return item.title.includes(this.itemFilter)
            })
        }
    },
}