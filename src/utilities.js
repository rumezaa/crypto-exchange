//sorting by symbol
const sort_by = (a, b) =>
  (a.symbol < b.symbol && -1) || (a.symbol > b.symbol && 1) || 0;

//binarySearch method
function binarySearch(array, target) {
  array.sort((a, b) => sort_by(a, b));

  var min = 0;
  var max = array.length - 1;

  while (min <= max) {
    const mid = Math.floor((max + min) / 2);

    //checks whether the item is defined or not
    const isDefined = array[mid] && array[mid].symbol;
    if (isDefined === target) {
      return mid;
    } else if (isDefined < target) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
}

//for selling coins
const sell = ({
  setCryptoWallet,
  cryptoWallet,
  setWallet,
  coin,
  num_of_coins,
  wallet,
  COINS,
}) => {

  //sort the array(s) in alphabetical order
  COINS.sort((a, b) => sort_by(a, b));
  cryptoWallet.sort((a, b) => sort_by(a, b));

  //first check whether the coin exsists in the crytoWallet
  var isDefined = binarySearch(cryptoWallet, coin);

  //if the number of coins being sold is less than or equal to the amount available, continue transaction
  if (num_of_coins <= cryptoWallet[isDefined].stock) {
    setWallet(
      (wallet += COINS[binarySearch(COINS, coin)].price * num_of_coins)
    );
    cryptoWallet[isDefined].stock -= num_of_coins;

    //if the user decides to sell all the stock of one coin, remove it from the wallet, otherwise add the updated item with the stock to the wallet
    if (cryptoWallet[isDefined].stock === 0) {
      setCryptoWallet(
        cryptoWallet.filter((item) => item !== cryptoWallet[isDefined])
      );
    } else if (cryptoWallet[isDefined].stock > 0) {
      setCryptoWallet(cryptoWallet);
    }
  } else {
    return false;
  }
};

//for buying coins
const buy = ({
  setCryptoWallet,
  cryptoWallet,
  setWallet,
  coin,
  num_of_coins,
  wallet,
  COINS,
}) => {

  COINS.sort((a, b) => sort_by(a, b));

  //find coin in data
  const coin_data = COINS[binarySearch(COINS, coin)];

  //check if user can afford coin
  if (coin_data.price * num_of_coins > wallet) {
    return false;
  } else {
    setWallet((wallet -= coin_data.price * num_of_coins));
  }

  //check if coin already exsist in crypto wallet, if it does add num of coins to the current stock, if not add the new coin object to the wallet
  const isPresent = cryptoWallet[binarySearch(cryptoWallet, coin)];
  if (isPresent) isPresent.stock += num_of_coins;
  else {
    coin_data.stock = num_of_coins;
    cryptoWallet.push(coin_data);
    setCryptoWallet(cryptoWallet);
  }
};

export { sort_by, binarySearch, sell, buy };
