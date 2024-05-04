const Taxes = () => {
  return (
    <div className="flex justify-between text-sm text-white">
      <p>
        <span className="text-neutral-300">Gas:</span> 0.05%
      </p>
      <p>
        <span className="text-neutral-300">Slippage:</span> (DEX's)
      </p>
      <p>
        <span className="text-neutral-300">Seignorage:</span> 3%
      </p>
    </div>
  );
};

export default Taxes;
