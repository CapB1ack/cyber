import React from 'react';
import {Links} from './Links';
import {Prodact} from './Prodact';
import {IAccordion, IProduct} from '../models';

export const Accordeon = ({name, prodacts}: IAccordion) => {
  const accName = `accordeon_${name}`;

  const handleOnChange = () => {};

  return (
    <div className={`accordeon ${name} collapsed`}>
      <input checked type="checkbox" name={accName} id={accName} onChange={handleOnChange} />
      <label className="accordeon__header" htmlFor={accName}>
        <div className="accordeon__arrow">&#11167;</div>
        Защита Endpoint
      </label>
      <div className="accordeon__body">
        <Links/>
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