class Table extends HTMLElement{
    data: Array<object>;

    constructor() {
        super();
        this.data = [];
    }

    populateTableFromData = (data: Array<object>) => {
        console.log(data);
        return JSON.stringify(data);
    }

    generateUI = () => {
        return this.populateTableFromData(this.data);
    }
}

export { Table };

customElements.define('pi-table', Table);