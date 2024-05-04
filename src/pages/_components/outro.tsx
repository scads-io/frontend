import SwapModal from "components/swap/swap-modal";
import { SparklesCore } from "components/ui/sparkles";
import Image from "next/image";

const Outro = () => {
  return (
    <section className="mt-32 flex flex-col items-center">
      <Image src="/images/logo.svg" alt="logo" width={80} height={80} />
      <h2 className="mx-auto mt-8 bg-gradient-to-br from-white to-neutral-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent lg:max-w-[700px] 2xl:text-7xl">
        The change is here
      </h2>
      <div className="relative h-8 w-[280px] md:w-[40rem]">
        <div className="absolute inset-x-20 left-1/2 top-0 h-[2px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent blur-sm" />
        <div className="absolute inset-x-20 left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        <div className="absolute inset-x-60 left-1/2 top-0 h-[5px] w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-600 to-transparent blur-sm" />
        <div className="absolute inset-x-60 left-1/2 top-0 h-px w-1/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-600 to-transparent" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="size-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 h-full w-full bg-dark-blue [mask-image:radial-gradient(200px_200px_at_top,transparent_20%,white)]" />
      </div>
      <div className="mt-12">
        <SwapModal />
      </div>
    </section>
  );
};

export default Outro;
