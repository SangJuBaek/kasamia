import 'tui-grid/dist/tui-grid.css'
import Grid from '@toast-ui/react-grid'
import { RootState, useAppDispatch } from 'store'
import { useSelector } from 'react-redux'
import { setListData } from 'store/list'
import { useEffect, useState } from 'react'

const testRows: any[] = [
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

const columns = [
  {name: 'id', header: 'ID'},
  {name: 'lastName', header: 'Last Name'},
  {name: 'firstName', header: 'First Name'},
  {name: 'age', header: 'Age'},
]


function ToastGrid () {
  const [listState, setListState] = useState<any[]>([])
  // const dispatch = useAppDispatch()
  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(setListData(testRows))
  //   }, 3000)
  // }, [dispatch])
  const rows: any[] = useSelector((state: RootState) => state.listData.listData)
  // const rows: any[] = []
  setTimeout(() => {
    setListState(testRows)
  }, 3000)
  return (
    <Grid
      data={listState}
      columns={columns}
      rowHeight={25}
      bodyHeight={100}
      heightResizable={true}
    />
  )
}

export default ToastGrid
