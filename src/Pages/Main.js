import { useState } from "react";
import COINS from "../crypto-coins";
import InfoSection from "../components/InfoSection";
import BrowseCoins from "../components/BrowseCoins";
import Header from "../components/Header";
import Popup from "../components/Popup";
import CryptoWallet from "../components/CryptoWallet";
import FormPopup from "../components/FormPopup";
import { sell, buy } from "../utilities";

const Main = () => {
  
  const [wallet, setWallet] = useState(10000000);
  const [cryptoWallet, setCryptoWallet] = useState([]);
  const [view, setView] = useState(null);
  const [showBuy, setShowBuy] = useState(null);
  const [showSell, setShowSell] = useState(null);
  const [showWallet, setShowWallet] = useState(false);
  const [showForm, setShowForm] = useState(false)
  const [coins, setCoins] = useState(COINS);


  function handleSell(e) {
    e.preventDefault();
    sell({
      setCryptoWallet: setCryptoWallet,
      wallet: wallet,
      cryptoWallet: cryptoWallet,
      num_of_coins: parseInt(e.target[0].value),
      setWallet: setWallet,
      coin: view.symbol,
      COINS: coins,
    });
    setShowSell(null);
  }

  function handleBuy(e) {
    e.preventDefault();
    buy({
      setCryptoWallet: setCryptoWallet,
      wallet: wallet,
      cryptoWallet: cryptoWallet,
      num_of_coins: parseInt(e.target[0].value),
      setWallet: setWallet,
      coin: view.symbol,
      COINS: coins,
    });
    setShowBuy(null);
  }

  return (
    <div className="w-full h-screen flex flex-row ">
      <div className="h-full flex flex-col gap-10 w-1/2">
        <Header wallet={wallet} setIsOpen={setShowWallet} />
        <InfoSection coin={view} openBuy={setShowBuy} openSell={setShowSell} />
      </div>
      <BrowseCoins setView={setView} arr={coins} addCoins={setShowForm}/>
      <Popup
        isBuy={showBuy}
        isOpen={showBuy || showSell}
        setIsOpen={(showBuy && setShowBuy) || (showSell && setShowSell)}
        action={(showBuy && handleBuy) || (showSell && handleSell)}
        
      />
      <CryptoWallet
        cryptoWallet={cryptoWallet}
        showWallet={showWallet}
        setShowWallet={setShowWallet}
      />
      <FormPopup isOpen={showForm} addCoins={setCoins} arr={coins}  setisOpen={setShowForm} />
    </div>
  );
};

export default Main;
