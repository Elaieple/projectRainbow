import React, { useReducer, useEffect } from 'react';
import './order.css';
import Onas from '../onas/Onas';

const startState = {
  month: false,
  report: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'MONTH':
      return { month: !state.month };
    case 'REPORT':
      return { report: !state.report };
    default:
      throw new Error();
  }
}
export default function Order() {
  const [state, dispatch] = useReducer(reducer, startState);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="container000">
        <div className="title"> ОТЧЕТЫ</div>
        <br />
        <div className="year" id="1">
          2021
          <table className={state.month ? 'table_dark' : 'table_dark close'}>
            <tr>
              <th className="month">ЯНВАРЬ</th>
              <th className="month">+</th>
            </tr>
            <tr>
              <th className="month">МАРТ</th>
              <th className="month">+</th>
            </tr>
            <tr>
              <th className="month">АПРЕЛЬ</th>
              <th className="month"><button type="button" className="buttonPlus" onClick={() => dispatch({ type: 'REPORT' })}><p className="plus">{state.report ? '--' : '+'}</p></button></th>
            </tr>
          </table>
          <button type="button" className="buttonPlus" onClick={() => dispatch({ type: 'MONTH' })}><p className="yyy">{state.month ? '--' : '+'}</p></button>
        </div>
      </div>
      <Onas />
    </>
  );
}
