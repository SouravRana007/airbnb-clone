import Image from "next/image";
function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 rounde-xl space-x-4 cursor-pointer hover:bg-gray-100  hover:scale-105 transition transform duration-200 ease-out h">
      {/* left card image */}
      <div className="relative h-16 w-16">
        <Image
          alt=""
          src={img}
          layout="fill "
          className="rounded-lg "
          width={400}
          height={400}
        />
      </div>
      {/* right card contains details */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
