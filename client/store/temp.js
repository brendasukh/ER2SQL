/**
 * ACTION TYPES
 */
const ADD_TABLE = 'ADD_TABLE';
const ADD_FIELD = 'ADD_FIELD';

/**
 * INITIAL STATE
 */
// temp = [{tableName: table1, fields: {all fields}}, {tableName: table2, fields: {all fields}}]
const temp = []

/**
 * ACTION CREATORS
 */
const addTable = table => ({type: ADD_TABLE, table});
const addField = (curTable, field) => ({type: ADD_FIELD, curTable, field})

/**
 * THUNK CREATORS
 */
export const addTableToTemp = (table) =>
  dispatch =>
    dispatch(addTable(table));

export const addFieldToTable = (curTable, name, attributes) => 
  dispatch =>
    dispatch(addField(curTable, name, attributes));

/**
 * REDUCER
 */
export default function (state = temp, action) {
  switch (action.type) {
    case ADD_TABLE: 
      return [...state, action.table];
    case ADD_FIELD:
      let table = state.filter(each => each.tableName === action.curTable)[0];
      let otherTables = state.filter(each => each.tableName !== action.curTable);
      table.fields[action.name] = action.attributes;
      return [...otherTables, table];
    default:
      return state
  }
}