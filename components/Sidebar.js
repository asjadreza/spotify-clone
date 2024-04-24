import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    HeartIcon,
    RssIcon,
} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div className='text-gray-500 p-5 text-sm border-r
    border-gray-900'>
        <div className='space-y-4'>
            <button className='flex items-center space-x-2
            hover:text-white'>
                <HomeIcon className="w-6 h-6" />
                <span>Home</span>
            </button>
            <button className='flex items-center space-x-2
            hover:text-white'>
                <SearchIcon className="w-6 h-6" />
                <span>Search</span>
            </button>
            <button className='flex items-center space-x-2
            hover:text-white'>
                <LibraryIcon className="w-6 h-6" />
                <span>Your Library</span>
            </button>
            <hr className='border-t-[0.1px] border-gray-900' />
            
            <button className='flex items-center space-x-2
            hover:text-white'>
                <PlusCircleIcon className="w-6 h-6" />
                <span>Create Playlist</span>
            </button>
            <button className='flex items-center space-x-2
            hover:text-white'>
                <HeartIcon className="w-6 h-6" />
                <span>Liked Songs</span>
            </button>
            <button className='flex items-center space-x-2
            hover:text-white'>
                <RssIcon className="w-6 h-6" />
                <span>Your Episodes</span>
            </button>
            <hr className='border-t-[0.1px] border-gray-900' />

            {/* playlist */}
            <p className='cursor-pointer hover:text-white'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white'>Playlist name...</p>
            <p className='cursor-pointer hover:text-white'>Playlist name...</p>
        </div>
    </div>
  )
}

export default Sidebar