const Popup = ({ isOpen, action, setIsOpen, isBuy }) => {
  return (
    <div
      className={`${
        (isOpen && "block") || "hidden"
      } fixed w-screen h-screen flex justify-center items-center inset-0 z-100 bg-black bg-opacity-70`}
    >
      <form
        onSubmit={action}
        className="rounded w-1/3 h-1/3 bg-gradient-to-r from-indigo-700 to-indigo-500 flex flex-col justify-center items-center justify-between py-10"
      >
        <div className="flex flex-col gap-2 justify-center items-center">
          <h2 className="text-2xl font-extrabold text-white">
            {isBuy ? "Buy Coin" : "Sell Coin"}
          </h2>
          <h2 className="text-white font-light text-sm px-5">
            {isBuy
              ? "Transact the world's most famous crypto currencies"
              : "Sell coins located in your crypto wallet"}
          </h2>
        </div>

        <div className="flex flex-row gap-2">
          <h2 className="font-light tracking-tight font-bold text-white">
            select number of coins:
          </h2>
          <input
            type="number"
            name="num_of_coins"
            min="1"
            max="10"
            placeholder="1"
            list="num_of_coins"
            className="bg-white placeholder:text-gray-1 w-12"
          />
        </div>

        <div className="w-4/5 flex flex-row gap-4">
          <input
            type={"submit"}
            className="text-white font-bold w-4/5 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-200"
          />
          <div onClick={() => setIsOpen(false)} className="text-white text-center font-bold w-4/5 py-2 rounded-md bg-gradient-to-r from-indigo-300 to-blue-200">
            cancel
          </div>
        </div>
      </form>
    </div>
  );
};

export default Popup;
