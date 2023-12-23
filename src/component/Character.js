import React from "react";
import "./NewItemForm.css";

const Character = ({ arraytItems, favorites, setFavorites }) => {
  const toggleFavorite = (itemId) => {
    if (favorites.includes(itemId)) {
      setFavorites(favorites.filter((id) => id !== itemId));
    } else {
      setFavorites([...favorites, itemId]);
    }
  };

  return (
    <div className="allChar">
      {arraytItems.map((values) => {
        return (
          <div key={values.id} className="cousin">
            <div>
              <img src={values.image} alt={values.name} className="pic" />
            </div>
            <div className="text">
              <h1>{values.name}</h1>
              <p className="status">
                {values.status}-{values.species}
              </p>
              <p className="location">Last known location:</p>
              <p className="lastLocation>">{values.location.name}</p>
            </div>
            <button
              className="add"
              onClick={() => {
                toggleFavorite(values.id);
              }}
            >
              {favorites.includes(values.id)
                ? "Remove"
                : "Add to Favorites"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Character;
