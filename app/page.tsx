import Button from "@/components/universal/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-[70%] mx-auto">
        <Image
          src={"/images/hero3.webp"}
          alt=""
          priority
          height={1920}
          width={1080}
          quality={100}
          className="w-full h-auto"
        />
      </div>

      <div className="bg-cream absolute right-[20%] top-[40%] tranform -translate-y-1/2 rounded-lg">
        <h1 className="font-semibold text-3xl text-center p-10">explore our <span className="text-red">nsane</span> clothes</h1>
        <span className="items-center justify-center flex mb-10">
          <Button
          text="shop products"
          textColor="text-cream"
          textSize="text-lg"
          bgColor="bg-pink"
          textWeight="font-semibold"
          width="w-[180px]"
          />
        </span>
      </div>
    </div>
  );
}
