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
        <span className="text-white font-semibold my-4 text-lg">Who benefits:</span>
        <p>Governments:</p>
        <ul className="space-y-1">
          <li>Can either use SCADS or get a license for the Algorithm and use it to fund themselves. </li>
          <li>Add SCADS to the treasury</li>
          <li>Hold SCADS mint TWINE</li>
          <li>
            This guarantees growth in value within the treasury, not only guaranteeing the amount (currently all
            governments can guarantee the funds . but all fail guaranteeing the value)
          </li>
        </ul>
        <p>
          Formula SCADS HELD = POH trigger + TWINE mint + base price growth + demand pressure = SCADS total stable +
          added value from TWINE = purchase power to value maintained without losses.
        </p>
        <div className="relative w-[91%] lg:w-[512px] h-80 mx-auto my-12">
          <Image src="/images/formula.png" alt="formula depiction" fill className="rounded-2xl" />
        </div>
        <p>The same principle applies to any institutions or fund or company and individuals.</p>
        <span className="my-4 text-white font-semibold">Transactions & Settlement</span>
        <p>
          Based on POH every user can send payments P2P around the world paying only the GAS fees. In case user's opt to
          use and exchange . the exchange fees apply.
        </p>
      </article>
    </main>
  )
}

export default UseCasesPage
