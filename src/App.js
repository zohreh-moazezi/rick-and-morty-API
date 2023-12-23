import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./component/Character";
import FavoritesList from "./component/FavoritesList";

const App = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [data4, setData4] = useState(null);
  const [data5, setData5] = useState(null);
  const [data6, setData6] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          response1,
          response2,
          response3,
          response4,
          response5,
          response6,
        ] = await Promise.all([
          axios.get("https://rickandmortyapi.com/api/character/27"),
          axios.get("https://rickandmortyapi.com/api/character/175"),
          axios.get("https://rickandmortyapi.com/api/character/162"),
          axios.get("https://rickandmortyapi.com/api/character/22"),
          axios.get("https://rickandmortyapi.com/api/character/29"),
          axios.get("https://rickandmortyapi.com/api/character/392"),
        ]);

        setData1(response1.data);
        setData2(response2.data);
        setData3(response3.data);
        setData4(response4.data);
        setData5(response5.data);
        setData6(response6.data);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }
  const items = [data1, data2, data3, data4, data5, data6];
  for (let i = 0; i < items.length; i++) {
    return (
      <div>
        <div className="characters">
          <Character
            arraytItems={items}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </div>
        <FavoritesList arraytItems={items} favorites={favorites} />
      </div>
    );
  }
};

export default App;
