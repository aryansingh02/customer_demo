import React, {Component} from "react";
import style from "./Tile.module.css";

const Tile = (props) => {
  return (
    <div className={style.Box}>
      <div className={style.LeftPane}>
        <span className={style.Sno}>{props.Sno}</span>
      </div>
      <div className={style.CentrePane}>
        <span className={style.CustName}>{props.CustName}</span>
        <span className={style.ItemCount}>{props.ItemCount}</span>
      </div>
      <div className={style.RightPane}>
        <div className={style.Dot} />
        <div className={style.Time}>{props.Time}</div>
      </div>
    </div>
  );
};

export default Tile;
