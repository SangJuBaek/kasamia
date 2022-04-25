import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { RootState, useAppDispatch } from 'store'
import { useSelector } from 'react-redux'
import { setListData } from 'store/list'
import { useEffect } from 'react'

interface Row {
  id: number,
  lastName: string,
  firstName: string | null,
  age?: number
}

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

function EjGrid() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch(setListData(testRows))
    }, 3000)
  }, [dispatch])
  const rows: any[] = useSelector((state: RootState) => state.listData.listData)
  return (
    <div>
      <GridComponent dataSource={rows}>
        <ColumnsDirective>
          <ColumnDirective field='id' headerText='ID' width='100' textAlign="Right"/>
          <ColumnDirective field='lastName' headerText='Last Name' width='100'/>
          <ColumnDirective field='firstName' headerText='First Name' width='100' textAlign="Right"/>
          <ColumnDirective field='age' headerText='Age' width='100' textAlign="Right"/>
        </ColumnsDirective>
      </GridComponent>
    </div>
  )
}

export default EjGrid
