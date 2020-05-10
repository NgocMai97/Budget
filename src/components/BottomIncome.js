import React from "react";
export default function BottomIncome({ listInc,formatPrice }) {
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">
        {listInc.map((o, ind) => {
          return (
            <div className="item clearfix" id={`income-${ind}`} key={ind}>
              <div className="item__description">{o.description}</div>
              <div className="right clearfix">
          <div className="item__value">+ {formatPrice(o.value)}</div>
                <div className="item__delete">
                  <button className="item__delete--btn">
                    <i className="ion-ios-close-outline" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
