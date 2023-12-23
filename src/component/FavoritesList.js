import React from "react";

const FavoritesList = ({ arraytItems, favorites }) => {
  return (
    <div className="favoriteSection">
      <h1 className="favoriteHeader">Favorites</h1>
      {favorites.length === 0 && (
        <div className="emptyList">No Characters Are Added</div>
      )}
      <div className="favList">
        <ul className="favoriteItems">
          {arraytItems
            .filter((values) => favorites.includes(values.id))
            .map((values) => (
              <div key={values.id} className="cousin" id="charItems">
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
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default FavoritesList;
