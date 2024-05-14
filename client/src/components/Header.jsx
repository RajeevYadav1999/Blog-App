import {Navbar} from "flowbite-react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    // <div>Header</div>
    <Navbar className="border-b-2">
    <Link to = "/" className="self-center text-sm whitespace-nowrap">
      <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
        Rajeev's
      </span>
      Blog
    </Link>

    </Navbar>
  )
}

export default Header