import { useRef } from "react";

const FormPopup = ({ isOpen, addCoins, arr, setisOpen }) => {
  const form = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    addCoins([
      ...arr,
      {
        name: e.target.name.value,
        symbol: e.target.symbol.value,
        price: e.target.price.value * 100,
        description: e.target.description.value,
      },
    ]);
    setisOpen(false)
  }
  const FormField = ({ field, label, type }) => {
    return (
      <div
        className={`${(isOpen && "block") || "hidden"} w-full ${
          ((type === "textarea") && "h-20") || ("h-10")
        } border-orange-500 border-2 relative rounded-md bg-white`}
      >
        <h2 className="uppercase text-xs bg-orange-500 text-white font-semibold text-center px-1 rounded absolute left-1 -top-3">
          {label}
        </h2>
        {type !== "textarea" ? (
          <input
            type={type || "text"}
            name={field}
            className="w-full h-full px-2 py-2 bg-transparent"
            max={1000}
            min={1}
            minLength={label === "symbol" ? 1 : 5}
            maxLength={label === "symbol" ? 4 : 12}
            step=".01"
          />
        ) : (
          <textarea
            className="w-full h-full px-2"
            name={field}
            minLength={10}
            maxLength={200}
          />
        )}
      </div>
    );
  };

  return (
    <div
      className={`${
        (isOpen && "block") || "hidden"
      } fixed w-screen h-screen flex justify-center items-center inset-0 z-100 bg-black bg-opacity-70`}
    >
      <div className="rounded w-1/3 h-1/2 bg-gradient-to-r from-indigo-700 to-indigo-500 flex flex-col justify-center items-center">
        <div
          className="font-light text-white text-xl w-full items-start justify-start flex flex-row px-2"
          onClick={() => setisOpen(false)}
        >
          x
        </div>
        <form
          onSubmit={handleSubmit}
          ref={form}
          className="w-full h-full flex flex-col justify-start items-center gap-4 px-8"
        >
          <div className="flex flex-col gap-2 justify-center items-center mb-4">
            <h2 className="text-2xl font-extrabold text-white">
              Create Your Unique Coin
            </h2>
            <h2 className="text-white font-light text-sm px-5">
              experiment with exchange by creating a unqiue currency
            </h2>
          </div>

          <div className="flex flex-col w-full items-center gap-12">
            <div className="flex flex-col gap-8 w-full items-center">
              <div className="flex flex-row gap-8 w-full">
                <FormField field="name" label="name" />
                <FormField field="symbol" label="symbol" />
                <FormField field="price" label="price" type={"number"} />
              </div>
              <FormField
                field="description"
                label="description"
                type={"textarea"}
              />
            </div>

            <input
              type={"submit"}
              className="text-white font-bold w-4/5 py-2 rounded-md bg-gradient-to-r from-yellow-500 to-yellow-200"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPopup;
