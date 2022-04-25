import { useMemo } from 'react'
import { TableOptions, useTable } from 'react-table'
import { RootState, useAppDispatch } from 'store'
import { useSelector } from 'react-redux'
import { setListData } from 'store/list'
import { useEffect } from 'react';
import makeData from 'makeData'

const testRows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
]


const ReactTableFunc = ({ columns, data }: TableOptions<{}>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })
  return (
    <table className="rt-table" {...getTableProps()}>
      <thead className="rt-thead">
        {headerGroups.map(headerGroup => (
          <tr className="rt-tr" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th className="rt-th" {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="rt-tbody" {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr className="rt-tr" {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td className="rt-td" {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function ReactTableList () {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  )
  const dispatch = useAppDispatch()
  const data = makeData(20)
  const rows: any[] = useSelector((state: RootState) => state.listData.listData)
  useEffect(() => {
    setTimeout(() => {
      dispatch(setListData(data))
    }, 3000)
  }, [])
  return (
    <div className="ReactTable" >
      <ReactTableFunc columns={columns} data={rows} />
    </div>
  )
}

export default ReactTableList
