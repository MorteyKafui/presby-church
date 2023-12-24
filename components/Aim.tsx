import { ScrollText } from "lucide-react";
import Image from "next/image";

const Aim = () => {
  return (
    <section id="#about" className="my-10 max-w-6xl mx-auto py-10 px-8">
      <h2>Our Goals</h2>

      <div className="flex flex-col lg:flex-row justify-between items-center  gap-10 lg:gap-20 text-gray-500 my-10 lg:my-40">
        <div>
          <span className="bg-blue-900 font-bold text-xl shadow-2xl text-white px-10 py-2">
            Vision
          </span>
          <p className="my-10 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            reiciendis possimus quae sapiente eum commodi. Laboriosam explicabo
            animi fuga at! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aliquid reiciendis possimus quae sapiente eum commodi.
            Laboriosam explicabo animi fuga at!
          </p>
        </div>

        <Image
          src="/images/aim-1.jpg"
          width={450}
          height={450}
          alt="aim image"
          className="shadow-2xl rounded-2xl"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center  gap-10 lg:gap-20 text-gray-500 my-16 lg:my-40">
        <div className="lg:order-1">
          <span className="bg-red-800 font-bold text-xl shadow-2xl text-white px-10 py-2 ">
            Mission
          </span>
          <ul className="my-10 md:text-xl text-blue-900 font-bold flex flex-col gap-8">
            <li className="flex items-center gap-5">
              <ScrollText size={30} className="text-red-800" />
              <p className="flex-1">Mobilizing the entire church for prayer</p>
            </li>
            <li className="flex items-center gap-5">
              <ScrollText size={30} className="text-red-800" />
              <p className="flex-1">
                Improving church growth through evangelism and nurture
              </p>
            </li>
            <li className="flex items-center gap-5">
              <ScrollText size={30} className="text-red-800" />
              <p className="flex-1">
                Attaining self-sufficiency through effective resource
                mobilization
              </p>
            </li>
            <li className="flex items-center gap-5">
              <ScrollText size={30} className="text-red-800" />
              <p className="flex-1">
                Promoting socio-economic development development through
                advocacy and effective delivery of social service
              </p>
            </li>
            <li className="flex items-center gap-5">
              <ScrollText size={30} className="text-red-800" />
              <p className="flex-1">Upholding the reformed tradition</p>
            </li>
          </ul>
        </div>

        <Image
          src="/images/aim-2.jpg"
          width={450}
          height={450}
          alt="aim image"
          className="shadow-2xl rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Aim;
