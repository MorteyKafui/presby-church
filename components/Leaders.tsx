import Image from "next/image";

const Leaders = () => {
  return (
    <section className="bg-gradient-to-tr from-blue-950 from-40% to-red-900 py-16 my-10">
      <h2 className="text-white">Head Pastors</h2>
      <div className="max-w-6xl mx-auto container">
        <p className="text-white text-center text-lg mb-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          voluptatum pariatur, eos qui laudantium quo.
        </p>
        <div className="flex flex-col md:flex-row  justify-between gap-5 text-white">
          <div className="flex flex-col gap-4 items-center">
            <Image
              src="/images/ps-1.jpg"
              width={250}
              height={250}
              alt="pastors"
              className="rounded-lg"
            />
            <h4 className="tracking-wide">RT.REV.DR. NANA</h4>
            <p className="italic text-gray-100">Header Pastor</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Image
              src="/images/ps-1.jpg"
              width={250}
              height={250}
              alt="pastors"
              className="rounded-lg"
            />
            <h4 className="tracking-wide">RT.REV.DR. NANA</h4>
            <p className="italic text-gray-100">Header Pastor</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Image
              src="/images/ps-1.jpg"
              width={250}
              height={250}
              alt="pastors"
              className="rounded-lg"
            />
            <h4 className="tracking-wide">RT.REV.DR. NANA</h4>
            <p className="italic text-gray-100">Header Pastor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaders;
