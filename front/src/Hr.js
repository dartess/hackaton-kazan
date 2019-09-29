import React, {useEffect, useState} from 'react';
import Select from 'react-select';
import { Redirect } from 'react-router-dom';

import './Hr.scss'

function Hr() {
  const [seletedPosition, setSelectedPosition] = useState(null);
  const [rawPositions, setRawPositions] = useState([]);
  const [positions, setPositions] = useState([]);
  const [isPositionsLoaded, setIsPositionsLoaded] = useState(false);
  const [isMailWasSended, setIsMainWasSended] = useState(false);
  const [count, setCount] = useState(0);
  const [needNext, setNeedNext] = useState(false);
  const [needRedirect, setNeedRedirect] = useState(false);

  useEffect(
    () => {
      fetch(`/ajax/get_position`, {method: 'GET'})
        .then(data => data.json())
        .then(data => {
          setRawPositions(data);
          setPositions(
            data.map(([posName, posCount]) => ({
              label: `${posName} (${posCount})`,
              value: posName,
            }))
          );
          setIsPositionsLoaded(true);
        })
    },
    [],
  );

  const handleChange = (val) => {
    setSelectedPosition(val);
    setCount(rawPositions.find(([posName]) => posName === val.value)[1]);
  }

  const handleNext = () => {
    setNeedNext(true);
    setTimeout(() => setNeedRedirect(true), 3000);
  }

  if (needRedirect) {
    return <Redirect to="/hr/statistics/" />
  }

  if (needNext) {
    return <img src="/twoWeeksLater.png" style={{position: "fixed", filter: 'grayscale(1)', left: 0, top: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}} />
  }

  return (
    <div className="hr">
      <div className="hr__header">
        Кабинет HR
      </div>
      <div className="hr__body">
        <div className="hr__item">
          <img src="/hr-item-1.png" alt="" />
          <Select
            isLoading={!isPositionsLoaded}
            isSearchable={false}
            className="hr__select"
            classNamePrefix="select"
            placeholder="Выбор должности"
            value={seletedPosition}
            onChange={handleChange}
            options={positions}
          />
        </div>
        <div className="hr__item">
          <img src="/hr-item-2.png" alt="" />
          <input
            placeholder="Количество сокращаемых"
            className="hr__input"
            readOnly
            value={count}
          />
        </div>
        <div className="hr__item">
          <img src="/hr-item-3.png" alt="" />
          Тестирование<br />
          {isMailWasSended ? (
            <div className="hr__gotosuccess">
              Уведомления отправлены
            </div>
          ) : (
            <div>
              <button type="button" className="hr__goto" onClick={() => setIsMainWasSended(true)}>
                Пригласить к тестированию.
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="hr__footer">
        {isMailWasSended && <button type="button" onClick={handleNext}>Далее</button>}
      </div>
    </div>
  );
}

export default Hr;
