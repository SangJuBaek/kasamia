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
    </ul>
  )
}

export default BaseHeader
