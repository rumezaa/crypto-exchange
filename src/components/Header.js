import Wallet from "../images/wallet.svg";

const Header = ({ wallet, setIsOpen }) => {
  return (
    <div className="h-20 bg-indigo-700 flex flex-row justify-between items-center px-5">
      <div className="flex flex-row items-center gap-2">
        <div
          className="w-10 h-10 bg-cover"
          style={{ backgroundImage: `url(${Wallet})` }}
        />
        <h2 className="text-white font-bold tracking-wider text-xl">
          ${(wallet / 100).toFixed(2)}
        </h2>
      </div>

      <div className="bg-red-500 rounded py-2 my-2 px-2 text-white font-semibold" onClick={() => setIsOpen(true)}>
        <h2>crypto wallet</h2>
      </div>
    </div>
  );
};

export default Header;
