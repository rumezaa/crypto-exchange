import Symbol from "../images/symbol.svg"

const InfoSection = ({ coin, openBuy, openSell }) => {
  
  const CoinView = ({ coin_data }) => {
    return (
      <div className="h-full flex flex-col">
        <h2 className="text-5xl font-extrabld tracking-wider px-5 my-4">
          {coin_data.name}
        </h2>
        <h2 className="uppercase font-light px-5">coin details</h2>
        <div className="flex flex-col bg-gray-100 gap-3 px-5">
          <div className="flex flex-col w-full">
            <h2 className="font-light">price</h2>
            <h2 className="font-extrabold text-3xl">
              ${(coin_data.price / 100).toFixed(2)}
            </h2>
          </div>

          <div className="overflow-y-auto h-28">
            <h2>{coin_data.description}</h2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full">
      <h2 className="font-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 mb-20 px-4">Welcome to Crypto Exchange</h2>

      {coin ? (
        <div className="flex flex-col gap-5 ">
          <CoinView coin_data={coin} />
          <div className="flex flex-col gap-2 items-center justify-center">
            <h2 className="font-light uppercase tracking-wider text-xl">exchange</h2>
            <div className="flex flex-row gap-4">
            <div className="rounded uppercase font-extrabold text-xl text-white bg-green-400 rounded p-8" onClick={() => openBuy(coin) }>buy</div>
            <div className="rounded uppercase font-extrabold text-xl text-white bg-orange-400 rounded p-8" onClick={() => openSell(coin)}>sell</div>
          </div>
          </div>

        </div>
      ) : (
        <div className="flex flex-row w-full justify-start px-5 gap-4 items-center">
        <h2 className="text-xl font-bold ">Select a coin to start trading.</h2><div style={{backgroundImage: `url('${Symbol}')`}} className="w-8 h-8 bg-cover" />
        </div>
        
      )}
    </div>
  );
};

export default InfoSection;
