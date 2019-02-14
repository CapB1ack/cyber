import React from 'react';
import {IProduct} from '../models';

export const Prodact = ({isHead, email, emailUrl, name, photoUrl, position, vendors, isCentered}: IProduct) => {
  return (
    <div className={`prodact ${isHead ? 'head': ''} ${isCentered ? 'centered': ''}`}>
      <div className="prodact__foto">
        <img src={photoUrl}/>
      </div>
      <div className="prodact__info">
        <div className="name">{name}</div>
        <div className="position">{position}</div>
        <div className="vendors">{vendors}</div>
      </div>
      <div className="prodact__mail">
        <a href={email}>
          <img src={emailUrl}/>
        </a>
      </div>
    </div>
  );
};