import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { RootState, useAppDispatch } from 'store'
import { useSelector } from 'react-redux'
import { setListData } from 'store/list'
import { useEffect } from 'react'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID' },
  { field: 'firstName', headerName: 'First name' },
  { field: 'lastName', headerName: 'Last name' },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number'
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

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


const List = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch(setListData(testRows))
    }, 3000)
  }, [dispatch])
  const rows: any[] = useSelector((state: RootState) => state.listData.listData)
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  )
}

export default List
