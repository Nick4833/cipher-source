import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [normalText, setNormalText] = useState('');
  const [key, setKey] = useState(0);
  const [cipheredString, setCipheredString] = useState("");


  const onChange = (e) =>{
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

    if (e.target.value === '' || re.test(e.target.value)) {
      setKey(parseInt(e.target.value))
    }
  }

  const caserCipher = (normalText, key) => {
    var array = normalText.split("");
    var cipher = 0;
    var cipheredString = "";
    array.forEach(function (item, index) {
      if (!isNaN(item * 1)) {
        cipheredString = cipheredString + item;
      } else {
        if (item === item.toUpperCase()) {
          cipher = ((item.charCodeAt() - 65 + key) % 26) + 65;
          cipheredString = cipheredString + String.fromCharCode(cipher);
        }
        if (item === item.toLowerCase()) {
          cipher = ((item.charCodeAt() + key -97) % 26) + 97;
          cipheredString = cipheredString + String.fromCharCode(cipher);
        }
      }
    });
    setCipheredString(cipheredString);
  };

  useEffect(() => {
    caserCipher(normalText, key);

  }, [normalText, key])

  return (
    <div className="App grid grid-cols-1 justify-items-center items-center h-screen bg-gray-100">
      <div className="grid grid-cols-1 justify-items-center gap-5 bg-white border border-1 rounded-xl p-5 w-5/6 md:w-3/6">
        <h1 className="text-xl font-bold">Caesar Cipher</h1>
        <input
          className="border rounded-xl p-3 outline-none focus:outline-[#349b5b] w-4/6"
          type="text"
          placeholder="Please Insert a Text to cipher."
          value={normalText}
          onChange={(event) => setNormalText(event.target.value)}
        />
        <input
          className="border rounded-xl p-3 outline-none focus:outline-[#349b5b] w-4/6"
          type="number"
          value={key}
          placeholder="Please Insert a Key to cipher."
          onChange={(event) => onChange(event)}
        />
        <h2 className="text-lg font-bold">Ciphered Result</h2>
        {cipheredString}
      </div>
    </div>
  );
}

export default App;
