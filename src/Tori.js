import React from "react";
import "./Tori.css";

const Tori = () => {
  return (
    <div className="tori">
      <div>
        <input class="kategoriat-hakusana" type="text" value="Hakusana ja/tai postinumero" />

        <select class="kategoriat-osasto" name="what">
          <option id="1">Kaikki osastot</option>
        </select>

        <select class="kategoriat-alue" name="where">
          <option id="1">Koko Suomi</option>
        </select>
      </div>

      <br></br>

      <div class="div-valikot">
        <input class="valikot" type="checkbox" name="how" />
        Myydään

        <input type="checkbox" name="how" />
        Ostetaan

        <input type="checkbox" name="how" />
        Vuokrataan

        <input type="checkbox" name="how" />
        Halutaan vuokrata

        <input type="checkbox" name="how" />
        Annetaan 
      </div>

      <div class="div-haku">
        <button class="tallenahaku">Tallenna haku</button>

        <button className="hae">Hae</button>
      </div>
    </div>
  );
};

export default Tori;
