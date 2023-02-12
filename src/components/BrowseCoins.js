
const BrowseCoins = ({ setView, arr, addCoins }) => {
  const CoinItem = ({ coin_data }) => {
    return (
      <div
        className="bg-red-500 text-white text-xl font-extrabold text-center rounded-md flex flex-row items-center justify-center py-3 rounded"
        onClick={() => setView(coin_data)}
      >
        <h2>{coin_data.symbol}</h2>
      </div>
    );
  };
  return (
    <div className="bg-indigo-700 h-full w-3/5 px-2 py-5 flex flex-col gap-10">
      <div className="flex flex-col w-full gap-6 items-center text-center">
        <h2 className="text-5xl text-white font-black text-center">
          Browse hundreds of coins, add your own unique crypto.
        </h2>

        <div className="flex flex-col w-full text-center text-white items-center gap-2">
          <h2>create your own coin</h2>
          <div onClick={() => addCoins(true)} className="text-white font-bold w-2/5 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-200">
            Add Custom Coin
          </div>
        </div>
      </div>

      <div className="h-full w-full bg-white bg-opacity-30 px-5">
      <h2 className="font-extrabold text-white text-lg tracking-wider my-4">Browse Popular Coins</h2>
        <div className="h-2/3 overflow-y-auto">
        <div className="w-full grid grid-cols-4 gap-4 items-center">
          {arr.map((coin) => (
            <CoinItem coin_data={coin} key={coin.symbol} />
          ))}
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default BrowseCoins;
