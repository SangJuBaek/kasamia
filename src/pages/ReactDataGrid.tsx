import Grid from '@toast-ui/react-grid'
import { RootState, useAppDispatch } from 'store'
import { useSelector } from 'react-redux'
import { setListData } from 'store/list'
import { createRef, useEffect, useRef, useState } from 'react'
import DataGrid, { SelectColumn, TextEditor } from 'react-data-grid';
import type { Column, FillEvent, CopyEvent, PasteEvent } from 'react-data-grid';

interface Row {
  id: number,
  lastName: string,
  firstName: string | null,
  age?: number
}

const columns: readonly Column<Row>[] = [
  SelectColumn,
  { key: 'id', name: 'ID' },
  { key: 'lastName', name: 'Last Name', resizable: true },
  { key: 'firstName', name: 'First Name' },
  { key: 'age', name: 'Age' }
]

const testRows: Row[] = [
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

function rowKeyGetter(row: Row) {
  return row.id
}

function ReactDataGrid() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch(setListData(testRows))
    }, 3000)
  }, [dispatch])
  const rows: any[] = useSelector((state: RootState) => state.listData.listData)
  const [selectedRows, setSelectedRows] = useState<ReadonlySet<number>>(() => new Set())
  return (
    <DataGrid
      columns={columns}
      rows={rows}
      rowKeyGetter={rowKeyGetter}
      selectedRows={selectedRows}
      onSelectedRowsChange={setSelectedRows}
    />
  )
}

export default ReactDataGrid
