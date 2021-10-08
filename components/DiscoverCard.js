import Image from "next/image";

function DiscoverCard({ img, title, description }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-[24.5rem] w-[24.5rem] lg:h-[29.6rem] lg:w-[29.6rem]">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-xl mt-3">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default DiscoverCard;
