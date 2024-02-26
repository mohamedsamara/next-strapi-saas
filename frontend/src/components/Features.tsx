import Link from "next/link";
import Image from "next/image";

import { getStrapiMedia } from "@/lib/utils";
import { Picture } from "./Hero";

interface FeaturesProps {
  data: {
    heading: string;
    description: string;
    feature: Feature[];
  };
}

interface Feature {
  id: string;
  title: string;
  description: string;
  showLink: boolean;
  newTab: boolean;
  url: string;
  text: string;
  media: Picture;
}

function Feature({
  title,
  description,
  showLink,
  newTab,
  url,
  text,
  media,
}: Feature) {
  const imgUrl = getStrapiMedia(media.data.attributes.url);

  return (
    <div className="flex flex-col items-center p-4">
      <Image
        src={imgUrl || ""}
        alt={media.data.attributes.alternativeText || "none provided"}
        className="w-8 h-8"
        width={600}
        height={600}
      />
      <h3 className="my-3 text-3xl font-semibold">{title}</h3>
      <div className="my-6 space-y-1 leading-tight">
        <p>{description}</p>
      </div>
      {showLink && url && text && (
        <div>
          <Link
            href={url}
            target={newTab ? "_blank" : "_self"}
            className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-white transition duration-200 ease-in-out rounded-lg bg-violet-500 hover:bg-violet-600"
          >
            {text}
          </Link>
        </div>
      )}
    </div>
  );
}

export default function Features({ data }: FeaturesProps) {
  return (
    <section className="dark:bg-black dark:text-gray-100 m:py-12 lg:py-24">
      <div className="container py-4 mx-auto space-y-2 text-center">
        <h2 className="text-5xl font-bold">{data.heading}</h2>
        <p className="dark:text-gray-400">{data.description}</p>
      </div>
      <div className="container grid justify-center gap-4 mx-auto my-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.feature.map((feature: Feature, index: number) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
