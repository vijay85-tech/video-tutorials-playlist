import React, { useState, useEffect, useRef } from "react";
const Home = () => {
  const [joke, setJoke] = useState("Loading...");
  const [fsName, setFsName] = useState("Jonh");
  const [lsName, setLsName] = useState("Doe");
  const focusInput = useRef(null);
  // const [loader,setLoader] = useState(true)
  const getJoke = () => {
    fetch(
      `http://api.icndb.com/jokes/random?firstName=${fsName}&lastName=${lsName}`
    )
      .then((res) => res.json())
      .then((resJoke) => {
        console.log(resJoke);
        setJoke(resJoke.value.joke);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(getJoke, [fsName, lsName]);

  return (
    <div>
      <h1>Joke of the Day</h1>
      <p>
        <input
          ref={focusInput}
          type="text"
          name="fName"
          value={fsName}
          onChange={(e) => setFsName(e.target.value)}
        />
        <input
          type="text"
          name="lName"
          value={lsName}
          onChange={(e) => setLsName(e.target.value)}
        />
        <button onClick={() => getJoke()}>Get New Joke</button>
      </p>
      <p>{joke}</p>
      <hr />
    </div>
  );
};

export default Home;
