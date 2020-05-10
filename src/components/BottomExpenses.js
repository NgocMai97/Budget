import React from "react";
export default function BottomExpenses({ listExp, formatPrice }) {
  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list">
        {listExp.map((o, ind) => {
          return (
            <div className="item clearfix" id={`expenses-${ind}`} key={ind}>
              <div className="item__description">{o.description}</div>
              <div className="right clearfix">
                <div className="item__value">- {formatPrice(o.value)}</div>
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
