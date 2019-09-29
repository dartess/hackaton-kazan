import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import { Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import './Economic.scss'

// todo
/*
vacancy_announcement_costs
payment_for_agency_services
reference_bonus
hr_salary_costs
*/

function Economic() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  const [needRedirect, setNeedRedirect] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
  }

  if (needRedirect) {
    return <Redirect to="/hr/results/" />
  }

  return (
    <div className="economic">
      <div className="economic__content">
        <h2 className="economic__title">ЭКОНОМИЧЕСКАЯ ЭФФЕКТИВНОСТЬ</h2>
        <form className="economic__form" onSubmit={handleSubmit}>
          <label>
            <span>РАСХОДЫ НА ОБЪЯВЛЕННЫЕ ВАКАНСИИ</span>
            <input value={a} onChange={({target: {value}}) => setA(value)} />
          </label>
          <label>
            <span>ОПЛАТА УСЛУГ АГЕНТСТВА</span>
            <input value={b} onChange={({target: {value}}) => setB(value)} />
          </label>
          <label>
            <span>РЕФЕРАЛЬНЫЙ БОНУС</span>
            <input value={c} onChange={({target: {value}}) => setC(value)} />
          </label>
          <label>
            <span>ЗАТРАТЫ ЗА ЗАРПЛАТУ HR</span>
            <input value={d} onChange={({target: {value}}) => setD(value)} />
          </label>
          <div className="economic__legend">
            стоимость найма = РОВ+ОУА*+РБ**+ЗЗHR<br /><br />
            * - если используется<br />
            ** - сотрудник нанимается по рекомендации сотрудников за вознаграждение
          </div>
        </form>
        <div className="economic__buttons">
          <Link to="/hr/statistics/"><button type="button">Назад</button></Link>
          <button type="button" onClick={handleSubmit}>Сохранить</button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Economic);
