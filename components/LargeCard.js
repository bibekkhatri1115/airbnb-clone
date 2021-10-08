import Image from "next/image";

function LargeCard({ img, title, description, buttonText, theme }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96  min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3
          className={`text-4xl mb-3 w-64 ${
            theme == "dark" ? "text-white" : ""
          }`}
        >
          {title}
        </h3>
        <p className={`w-96 ${theme == "dark" ? "text-white" : ""}`}>
          {description}
        </p>

        <button
          className={`text-sm  px-4 py-2 rounded-lg mt-5 ${
            theme == "dark"
              ? "bg-white text-gray-900"
              : "text-white bg-gray-900"
          }`}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
