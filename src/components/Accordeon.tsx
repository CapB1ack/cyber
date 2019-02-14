import React, {FunctionComponent, useState} from 'react';
import {Links} from './Links';
import {Prodact} from './Prodact';
import {IAccordion, IProduct} from '../models';

export const Accordeon: FunctionComponent<IAccordion> = ({name, prodacts, links, label}: IAccordion) => {
  const [checked, setChecked] = useState(true);
  const accName = `accordeon_${name}`;
  const handleChecked = () => setChecked(!checked);

  return (
    <div className={`accordeon ${name} collapsed`}>
      <input checked={checked} type="checkbox" name={accName} id={accName} onChange={handleChecked} />
      <label className="accordeon__header" htmlFor={accName}>
        <div className="accordeon__arrow">⇩</div>
        {label}
      </label>
      <div className="accordeon__body">
        <Links {...links}/>
        <div className="heading">
          В лицензировании помогут:
        </div>
        <div className="prodacts">
          {
            prodacts.map((prodact: IProduct) => <Prodact key={prodact.name} {...prodact}/>)
          }
        </div>
      </div>
    </div>
  );
};