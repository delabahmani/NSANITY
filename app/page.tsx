import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <span>
        <Image
          src={"/images/hero3.webp"}
          alt=""
          priority
          height={1920}
          width={1080}
          quality={100}
          className="mx-auto w-[70%] "
        />
      </span>
    </div>
  );
}
