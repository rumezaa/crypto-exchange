import banner from "../images/banner.svg";
import Arrow from "../images/arrow.svg"
const LandingPage = () => {
  return (
    <div className="w-screen h-screen">
      <div
        style={{ backgroundImage: `url('${banner}')` }}
        className="bg-cover w-full h-full flex flex-row gap-40 pl-40 pb-40 text-white items-center"
      >
        <div className="flex flex-col w-1/2 text-left gap-5">
          <h2 className="font-black text-7xl text-white">Crypto Exchange</h2>
          <div className="border-b-2 border-white" />
          <h2 className="font-bold text-2xl">
            This is my assignment for CompSci-30, where I implemented binary
            searchs to help trade crypto currencies
          </h2>
        </div>

        <a className="transition duration-500 ease-in-out transform hover:scale-105 text-white font-bold py-2 rounded-md bg-gradient-to-r items-center from-indigo-700 to-blue-500 h-12 w-64 text-2xl ml-2 flex flex-row justify-between px-4" href="/exchange">
          <h2>Start Trading</h2> <div className="bg-cover w-10 h-10" style={{backgroundImage: `url('${Arrow}')`}} />
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
