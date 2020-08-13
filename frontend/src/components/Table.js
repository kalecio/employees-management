import React from 'react';

const Table = ({ columns, rows, onRemoveButtonClicked }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {columns.map((column) => (
            <th scope="col" key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          return (
            <tr key={row.id}>
              <th scope="row">{index + 1}</th>
              {columns.map((column, index) =>
                {console.log(row, column);
                  return (<td key={`${row}-${column}-${index}`}>{row[column]}</td>)})}
              <td>
                <button>{'Editar'}</button>
                <button onClick={() => onRemoveButtonClicked(row.id)}>
                  {'Excluir'}
                </button>
              </td>
            </tr>
        )})}
      </tbody>
    </table>
  );
};

export default Table;
