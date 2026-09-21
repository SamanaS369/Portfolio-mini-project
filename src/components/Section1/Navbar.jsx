import { SunMoon } from 'lucide-react';

const Navbar = () => {
  return (
    <div>
      <div className="flex p-4 bg-amber-50 rounded-2xl w-3/5 mx-auto">

        {/* logo */}
        <div className="w-1/4">
          <h4>Portfolio</h4>
        </div>

        {/* menu */}
        <div className="flex gap-6">
          <a href="/" className="text-gray-700 hover:text-amber-500">Home</a>
          <a href="/" className="text-gray-700 hover:text-amber-500">About</a>
          <a href="/" className="text-gray-700 hover:text-amber-500">Experience</a>
          <a href="/" className="text-gray-700 hover:text-amber-500">Language</a>
          <a href="/" className="text-gray-700 hover:text-amber-500">Work</a>
          <a href="/" className="text-gray-700 hover:text-amber-500">Contact</a>
        </div>

        {/*icon*/}
        <div className="ml-auto">
  <SunMoon
    className="text-gray-500 hover:text-black cursor-pointer"
  />
  </div>

      </div>
    </div>
  )
}

export default Navbar