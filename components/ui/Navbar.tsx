
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2 font-bold text-lg text-black">
            <div className="w-4 h-4 bg-green-600 rounded-sm"></div>
            AgriMarket AI
        </div>
        <div className="flex gap-6 text-sm">
         <a href="#" className="hover:text-green-600">Home</a>
         <a href="#" className="hover:text-green-600">About</a>
         <a href="#" className="hover:text-green-600">Market info</a>
         <a href="#" className="hover:text-green-600">Login</a>
        </div>
        <div className="flex gap-2">
            <button className="bg-green-600! text-white px-3 py-1 rounded text-sm hover:bg-green-700!">
                Register as Farmer
            </button>
            <button className="border border-green-600 text-green-700 px-3 py-1 rounded text-sm hover:bg-green-50!">
                Register as Buyer
            </button>
        </div>
    </nav>
  )
}

export default Navbar
