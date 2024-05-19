import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Sidebar() {

  // const handleSignOut = async () => {
  //   await signOut({ callbackUrl: '/login' });
  // };
  // const handleSignOut = () => {
  //   signOut({ callbackUrl: '/login' })
  //     .then(() => console.log('Signed out successfully'))
  //     .catch(err => console.log('Sign out error:', err));
  // };

  const handleSignOut = () => {
    signOut({ callbackUrl: '/login' })
      .then(() => {
        toast.success('Signed out successfully');
      })
      .catch(err => {
        console.log('Sign out error:', err);
        toast.error('Sign out error');
      });
  };

  const { data: session, status } = useSession();
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={handleSignOut}
          // onClick={() => signOut({callbackUrl: '/login'})}
        >
          <span>Logout</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="w-6 h-6" />
          <span>Home</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="w-6 h-6" />
          <span>Search</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="w-6 h-6" />
          <span>Your Library</span>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="w-6 h-6" />
          <span>Create Playlist</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="w-6 h-6" />
          <span>Liked Songs</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="w-6 h-6" />
          <span>Your Episodes</span>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* playlist */}
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
}

export default Sidebar;
