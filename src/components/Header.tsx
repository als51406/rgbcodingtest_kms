import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div id="headerWrap">
        <header>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><h1>덱스코원</h1></Link>
        <nav>
            <ul>
                <li><Link to="/회사소개">회사소개</Link></li>
                <li><Link to="/제품소개">제품소개</Link></li>
                <li><Link to="/채용안내">채용안내</Link></li>
                <li><Link to="/고객지원">고객지원</Link></li>
            </ul>
        </nav>
        </header>
    </div>
  )
}
