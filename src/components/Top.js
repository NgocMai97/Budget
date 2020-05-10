import React from 'react';
export default function Top({list,formatPrice}){
    
    function totalInc(){
        let sum = 0;
        (list.filter(o=> o.type==='income')).forEach(inc=>{
            sum+= inc.value;
      })
      return sum;
    }
    function totalExp(){
        let sum = 0;
        (list.filter(o=> o.type==='expenses')).forEach(exp=>{
            sum+= exp.value;
      })
      return sum;
    }
    function perTotal(){
        let sum = 0;
        sum = (totalExp()*100/totalInc());
      return sum;
    }
    return(
        <div className="top">
        <div className="budget">
          <div className="budget__title">
            Available Budget in <span className="budget__title--month">%Month%</span>:
          </div>
          <div className="budget__value">+ 2,345.64</div>
          <div className="budget__income clearfix">
            <div className="budget__income--text">Income</div>
            <div className="right">
              <div className="budget__income--value">+ {formatPrice(totalInc())}
              </div>
              <div className="budget__income--percentage">&nbsp;</div>
            </div>
          </div>
          <div className="budget__expenses clearfix">
            <div className="budget__expenses--text">Expenses</div>
            <div className="right clearfix">
              <div className="budget__expenses--value">- {formatPrice(totalExp())}</div>
              <div className="budget__expenses--percentage">{perTotal()}%</div>
            </div>
          </div>
        </div>
      </div>
    )
}