
export default function InputForm() {
    return (
        <form className="w-full md:w-96">
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path>
                    </svg>
                </div>
                <input type="search" className="block w-full p-3 ps-10 text-sm text-gray-900 border focus:outline-none border-gray-300 rounded-3xl dark:placeholder-gray-400 dark:text-white" placeholder="Search Locations, Areas..." />
            </div>
        </form>
    )
}