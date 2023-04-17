import React from "react";
import "./Place.css";
import { Link } from "react-router-dom";

const Place = () => {
  return (
    <div className="up">
      <div className="mplace">
        <div className="imgc">
          <img src="icons/man.png" className="mimg" />
        </div>
        <div className="placec">
          <input
            type="text"
            placeholder="Something New ?"
            className="minput"
          ></input>
        </div>
      </div>
      <div className="but">
        <div className="buticon">
          <div>
            <Link>
              <img src="icons/download.png" />
            </Link>
          </div>
          <div>
            <Link>
              <img src="icons/gif.png" />
            </Link>
          </div>
          <div>
            <Link>
              <img src="icons/gthree.png" />
            </Link>
          </div>
          <div>
            <Link>
              <img src="icons/wow.png" />
            </Link>
          </div>
          <div>
            <Link>
              <img src="icons/bild.png" />
            </Link>
          </div>
          <div>
            <Link>
              <img src="icons/location1.png" />
            </Link>
          </div>
          <div>
            <Link>
              <img src="icons/live1.png" />
            </Link>
          </div>
        </div>

        <div className="butbutd">
          <button className="butbut">publish</button>
        </div>
      </div>
    </div>
  );
};

export default Place;
