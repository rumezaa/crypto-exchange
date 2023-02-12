const CryptoWallet = ({ cryptoWallet, showWallet, setShowWallet }) => {
  const WalletItem = ({ coin_data }) => {
    return (
      <div className="bg-red-500 text-white font-bold text-lg rounded p-4 text-center flex flex-row justify-between">
        <h2>{coin_data.symbol}</h2>
        <h2>x{coin_data.stock}</h2>
      </div>
    );
  };

  return (
    <div
      className={`${
        (showWallet && "flex") || "hidden"
      } fixed w-screen h-screen justify-center items-center inset-0 z-100 bg-black bg-opacity-70`}
    >
      <div className="rounded w-1/3 h-1/3 bg-gradient-to-r from-indigo-700 to-indigo-500 flex flex-col px-3">
        <div
          className="font-light text-white text-xl"
          onClick={() => setShowWallet(false)}
        >
          x
        </div>

        <div
          className={`flex flex-col items-center ${
            (cryptoWallet.length === 0 && "justify-between") ||
            "justify-start gap-3"
          } w-full h-full pb-3`}
        >
          <div className="text-center w-full font-bold text-white">
            Crypto Wallet
          </div>

          {cryptoWallet.length > 0 ? (
            <div className="h-4/5 w-full">
              <div className="grid grid-cols-4 w-full gap-2 items-center justify-center overflow-y-auto">
                {cryptoWallet.map((coin) => (
                  <WalletItem coin_data={coin} key={coin.symbol}/>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-full gap-2 items-center text-center h-full justify-between">
              <h2 className="text-white font-light text-center mt-10">
                Buy coins for them to appear in your wallet
              </h2>
              <div onClick={() => setShowWallet(false)} className="text-white font-bold w-4/5 py-2 rounded-md bg-gradient-to-r from-yellow-500 to-yellow-200">
                okay
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CryptoWallet;
