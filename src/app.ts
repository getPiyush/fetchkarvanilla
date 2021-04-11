import { Table } from './components/Table/Table';
const data = [
    {id:89723984, firstName:'Test',lastName:'Name 1', zip:'7856833'},
    {id:56456666, firstName:'Test',lastName:'Name 2', zip:'4455345'},
    {id:62347892, firstName:'Test',lastName:'Name 3', zip:'3456354'},
    {id:23472389, firstName:'Test',lastName:'Name 4', zip:'9345634'},
]

const table = new Table();
table.data = data;
table.generateUI();