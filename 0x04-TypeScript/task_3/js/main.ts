import { RowID, RowElement } from './interface';
import * as CRUP from './js/crud';

const row: RowElement = { firstName: "Guillaume", lastName: "Salver" };
const newRowID: RowID = CRUD.insertRow(row);

const updateRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`// Update row ${newRowID} ${JSON.stringify(updatedRow}`);

CRUD.deleteRow(newRowID);
console.log(`// Delete row id ${newRowID}`);
