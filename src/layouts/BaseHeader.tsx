import { Link } from 'react-router-dom'
const BaseHeader = () => {
  return (
    <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/other">Other</Link>
      </li>
      <li>
        <Link to="/list">List</Link>
      </li>
      <li>
        <Link to="/reactTableList">ReactTableList</Link>
      </li>
      <li>
        <Link to="/toastGrid">ToastGrid</Link>
      </li>
      <li>
        <Link to="/reactDataGrid">ReactDataGrid</Link>
      </li>
      <li>
        <Link to="/ejGrid">EjGrid</Link>
      </li>
      <li>
        <Link to="/form">Form</Link>
      </li>
    </ul>
  )
}

export default BaseHeader
