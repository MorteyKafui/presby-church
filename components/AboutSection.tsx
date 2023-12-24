import Image from "next/image";
import Leaders from "./Leaders";

const AboutSection = () => {
  return (
    <>
      <section id="#about" className="my-10">
        <h2>About Presby Church</h2>
        <article className="flex justify-between items-center gap-5">
          <div className="text-gray-500 md:text-lg w-[90%]">
            <p className="text-center md:text-left">
              The Basel Mission sent another team of three missionaries: Andreas
              Riis, 28years, Peter Petersen Jaeger, 24 years, and a doctor,
              Christian Friedrich Heinze, 28years. Unfortunately Dr. Heinze and
              P.P. Jaeger failed to survive after three months, leaving Andreas
              Riis alone. Riis later moved to Akropong in order to be away from
              the problems of the coast; malaria fever, negative examples of the
              Europeans along the coast, and to preach the gospel to a people
              who were not yet greatly affected by the contact with the
              Europeans. He was joined in November 1837 at Akropong by two more
              missionaries, Johannes Murdter and Andreas Stanger who came
              together with Anna Wolters, the bride of Riis. Stanger died in
              December 1837 while Murdter survived until November 1838. The time
              in Akropong was not altogether very successful causing Andreas and
              Anna Riis to leave Akropong in 1840 for Europe.
            </p>
          </div>
          <div>
            <Image
              src="/images/about-img.jpg"
              width={700}
              height={600}
              alt="pc about image"
              className="rounded-lg shadow-2xl w-full ml-16 hidden lg:block"
            />
          </div>
        </article>
      </section>
    </>
  );
};

export default AboutSection;
