import { Separator } from 'components/ui/separator'
import Image from 'next/image'

const UseCasesPage = () => {
  return (
    <main className="pt-40 md:max-w-[768px] max-w-[91%] lg:max-w-[1024px] xl:max-w-[1240px] 2xl:max-w-[1340px] mx-auto">
      <h1 className="mx-auto bg-gradient-to-br from-white to-neutral-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight leading-none text-transparent lg:text-[80px]">
        Use cases
      </h1>
      <article className="text-[#B4BCD0] flex flex-col gap-y-1 mt-12">
        <p>
          SCADS being a stable coin that mints and accumulates profits by passively minting TWINE, makes it the only
          stable coin that grows just by holding it whilst remaining stable.
        </p>
        <p>
          TWINE brings a linear token with guaranteed price growth based on the number of TWINE minted and has a use
          case based on exclusivity to buy SCADS when the TWINE market cap reaches 5.5 million.
        </p>
        <p>
          On top of the echo system that the algorithm manages, there is a PULSE contract that works continuously and
          organically on growing the treasury and liquidity within the system.
        </p>
        <p>
          These 3 pillars have multi use cases that categorically fix most flaws within the current financial system.
        </p>
        <span className="text-white font-semibold text-xl mt-12">Who benefits:</span>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-[60%]">
            <p className="text-white font-semibold">Governments:</p>
            <ul className="space-y-1 mt-2 list-disc pl-4">
              <li>Can either use SCADS or get a license for the Algorithm and use it to fund themselves. </li>
              <li>Add SCADS to the treasury</li>
              <li>Hold SCADS mint TWINE</li>
            </ul>
            <p className="mt-1">
              This guarantees growth in value within the treasury, not only guaranteeing the amount (currently all
              governments can guarantee the funds . but all fail guaranteeing the value)
            </p>
            <p className="mt-1">
              <span className="text-white">Formula SCADS HELD</span> = POH trigger + TWINE mint + base price growth +
              demand pressure = SCADS total stable + added value from TWINE = purchase power to value maintained without
              losses.
            </p>
            <p>The same principle applies to any institutions or fund or company and individuals.</p>
          </div>
          <div className="relative w-full md:w-9/12 lg:w-1/3 h-56 md:h-96 lg:h-80 mx-auto my-12">
            <Image src="/images/formula.png" alt="formula depiction" fill className="rounded-2xl" />
          </div>
        </div>
        <Separator className="my-12 bg-white/10" />
        <div className="flex flex-col md:flex-row-reverse justify-between bg-gradient-to-b from-white/10 to-transparent px-4 pt-6 rounded-xl">
          <div className="md:w-[45%] space-y-1">
            <span className="text-white font-semibold">Transactions & Settlement:</span>
            <p>
              Based on POH every user can send payments P2P around the world paying only the GAS fees. In case users opt
              to use an exchange, then exchange fees apply.
            </p>
          </div>
          <div className="md:w-[45%] space-y-1 mt-1 sm:mt-0">
            <span className="text-white font-semibold">Transparancy & privacy:</span>
            <p>
              Since the SCADS algorithm is totally independent and each user is responsible for his wallet, SCADS do not
              require user's data, so it cannot be bought or transacted. It is up to each user to abide with his local
              laws and regulations, declare or not his assets, all SCADS transactions are public and on the chain. The
              algorithm has no owner's or a CEO.
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}

export default UseCasesPage
