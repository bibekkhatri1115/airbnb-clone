import { GlobeAltIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <div className="flex bg-gray-100 text-gray-600 justify-center ">
      <div className="max-w-[100rem] flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-16 py-14 border-b-2 ">
          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">ABOUT</h5>
            <p className="link">How Airbnb works</p>
            <p className="link">Newsroom</p>
            <p className="link">Investors</p>
            <p className="link">Airbnb Plus</p>
            <p className="link">Airbnb Luxe</p>
            <p className="link">HotelTonight</p>
            <p className="link">Airbnb for Work</p>
            <p className="link">Made possible by Hosts</p>
            <p className="link">Careers</p>
            <p className="link">Founders Letter</p>
          </div>
          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">COMMUNITY</h5>
            <p className="link">Diversity & Belonging</p>
            <p className="link">Against Discrimination</p>
            <p className="link">Accessibility</p>
            <p className="link">Airbnb Associates</p>
            <p className="link">Host Afghan refugees</p>
            <p className="link">Guest Referrals</p>
            <p className="link">Gift cards</p>
            <p className="link">Airbnb.org</p>
          </div>
          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">HOST</h5>
            <p className="link">Host your home</p>
            <p className="link">Host an Online Experience</p>
            <p className="link">Host an Experience</p>
            <p className="link">Responsible hosting</p>
            <p className="link">Resource Center</p>
            <p className="link">Community Center</p>
          </div>
          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">SUPPORT</h5>
            <p className="link">Our COVID-19 Response</p>
            <p className="link">Help Center</p>
            <p className="link">Cancellation options</p>
            <p className="link">Neighborhood Support</p>
            <p className="link">Trust & Safety</p>
          </div>
        </div>
        <div className="hidden px-24 py-5 text-sm text-gray-800 md:flex justify-between">
          <div className="flex">
            <div>© 2021 Airbnb, Clone</div>
            <div className="link px-2"> · Privacy</div>
            <div className="link px-2"> · Terms</div>
            <div className="link px-2"> · Sitemap</div>
          </div>
          <div className="flex">
            <div className="flex content-center ">
              <GlobeAltIcon className="h-6 cursor-pointer" />
              <div className="underline font-bold cursor-pointe">
                English (US)
              </div>
            </div>
            <div className="flex pl-5">
              <div>$</div>
              <div className="underline font-bold pl-1 cursor-pointe">USD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
