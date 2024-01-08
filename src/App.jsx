import { useEffect, useState } from "react";
import "./App.css";
import currency_list from "./components/Image";

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [data, setData] = useState([]);
  const [isval,setIsval]=useState(false)

  const optionFrom=(e)=>{
    setFrom(e.target.value);
  }
  const optionTo=(e)=>{
    setTo(e.target.value);
  }
  const search = async () => {
    const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${amount}`;
    // const url = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=USD&to=EUR&amount=750';
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5fdf771fa3msh15d15ce9ec6b61ep1e0259jsn88e6075c5ba9",
        "X-RapidAPI-Host":
          "currency-conversion-and-exchange-rates.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    search();
  }, []);
  // onChange={(e)=>setFrom(e.target.value)}
  return (
    <>
      <div className="relative w-full h-screen bg-blue-300">
        {/* <img
      className="h-screen w-full bg-cover bg-center bg-fixed"
      src="https://tse4.mm.bing.net/th?id=OIP.KYcnzSRCX7RafuLQc9biqAHaEo&pid=Api&P=0&h=180"
      alt="nature image"
    /> */}
        <div className="mx-auto w-full bg-blue-300  flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 absolute top-0">
          <div className="inline-flex items-center space-x-2">
            <span className="font-extrabold font-style2 text-blue-950">
              Converter
            </span>
          </div>
        </div>
    

      <div className="flex justify-center items-center">
        <div className="absolute top-20 text-center text-2xl md:text-4xl font-bold font-style1 text-blue-950">
          <h1>CURRENCY CONVERTER</h1>
        </div>

        <div
          className=" h-1/2 flex-col flex justify-between md:items-center absolute
    top-28 rounded-lg bg-gradient-to-r from-slate-100 to-blue-200 md:mt-8 mt-4"
        >
          <div className="flex flex-col justify-center items-center mt-0">
            <div className="flex flex-col gap-8 md:flex-row justify-center items-center md:gap-16 px-4 py-8">
              <div className="w-full md:w-1/3">
                <label
                  className="text-sm text-black font-medium"
                  for=""
                >
                  AMOUNT
                </label>
                <input
                  className="flex h-10 w-full text-black rounded-md border-blue-950 border-2 px-3"
                  type="text"
                  placeholder=""
                  id="name"
                  onChange={(e) => setAmount(e.target.value)}
                />
                 
              </div>
              <div className="w-full md:w-1/3">
                <label
                  className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="from"
                >
                  FROM
                </label>
                <select
                  className="flex h-10 w-full text-black rounded-md px-3 text-md border-blue-950 border-2"
                  
                  // onChange={(e) => setFrom(e.target.value)}
                  onChange={optionFrom}
                  value={from}
                >
                  {
                    currency_list.map((option)=>(<option value={option.code}>{option.code}</option>))
                  }
                </select>

              </div>

              <div class="w-full md:w-1/3">
                <label
                  className="text-sm text-black font-medium"
                  for="name"
                >
                  TO
                </label>
                <select
                  className="flex h-10 w-full text-black rounded-md px-3 text-md border-blue-950 border-2"
                  
                  // onChange={(e) => setFrom(e.target.value)}
                  onChange={optionTo}
                  value={to}
                >
                  {
                    currency_list.map((option)=>(<option value={option.code}>{option.code}</option>))
                  }
                </select>
              </div>

              <button
                type="button"
                className="rounded-md bg-blue-900 px-3 py-2 mt-8 md:mt-6 text-sm font-semibold text-white shadow-md transition ease-in-out hover:bg-white/80 hover:text-blue-900"
                onClick={search}
              >
                CONVERT
              </button>
            </div>
            {amount?
            <div className="text-black flex flex-col h-1/2 py-2">
                <div>
                  <div>
                    <p className="text-2xl font-light text-blue-900 text-center px-4">
                      Converted amount
                    </p>
                    <div className="text-5xl font-extrabold text-blue-950 text-center">
                      {data.result}
                    </div>
                  </div>
                  <div className="text-md font-extralight text-blue-950 text-center px-8">
                    {amount} {from} = {data.result} {to}
                  </div>
                </div>
            </div> : ""}
          </div>
        </div>
      </div>
        </div>
    </>
  );
}

export default App;
