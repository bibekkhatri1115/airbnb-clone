import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

function TransparentHeader() {
  return (
    <header className="top-0 z-50 flex justify-around w-full absolute p-5 md:px-10">
      {/* Left */}
      <div className="relative flex  h-10 cursor-pointer w-40 ">
        <Image
          src="/img/airbnb_white_logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="min-w-[20rem]"
        />
      </div>

      {/* Middle */}
      <div className="w-[45rem] flex justify-center">
        <div>
          <div className="flex text-white space-x-5 justify-center pb-5">
            <div className="cursor-pointer">Places to stay</div>
            <div className="cursor-pointer">Experiences</div>
            <div className="cursor-pointer">Online Experiences</div>
          </div>
          <div className="flex bg-white rounded-full w-max">
            <div className=" hover:after:hidden after:border-right border-gray-400 after:h-[20%] border-right">
              <div className="pr-12  hover:bg-gray-200 cursor-pointer px-8 py-3 rounded-full">
                <div className="text-xs font-bold text-gray-900">Location</div>
                <p className="text-sm text-gray-500">Where are you going?</p>
              </div>
            </div>
            <div className="hover:after:hidden after:border-right border-gray-400 after:h-[20%] border-right">
              <div className="pr-12  hover:bg-gray-200 cursor-pointer px-8 py-3 rounded-full">
                <div className="text-xs font-bold text-gray-900">Check in</div>
                <p className="text-sm text-gray-500">Add dates</p>
              </div>
            </div>

            <div className="hover:after:hidden hover:border-0 after:border-right border-gray-400 after:h-[20%] border-right">
              <div className="pr-12  hover:bg-gray-200 cursor-pointer px-8 py-3 rounded-full">
                <div className="text-xs font-bold text-gray-900">Checkout</div>
                <p className="text-sm text-gray-500">Add dates</p>
              </div>
            </div>

            <div className="hover:border-0  border-gray-400 after:h-[20%] ">
              <div className="pr-20  hover:bg-gray-200 cursor-pointer px-8 py-3 rounded-full">
                <div className="text-xs font-bold text-gray-900">Guests</div>
                <p className="text-sm text-gray-500">Add guests</p>
              </div>
            </div>
            <div className="relative">
              <SearchIcon
                className="hidden md:inline-flex h-10 bg-red-500
          text-white rounded-full
            p-2 cursor-pointer md:mx-2 my-auto min-w-min absolute right-0 top-[0.55rem]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none 
          flex-grow text-sm text-white placeholder-gray-400"
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400 
          text-white rounded-full
            p-2 cursor-pointer md:mx-2 min-w-min "
        />
      </div> */}

      {/* Right */}
      <div className="flex space-x-4 justify-end text-white">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6" />

        <div className="flex items-center h-10 space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default TransparentHeader;
