import React from 'react';
import {ILinks} from '../models';

export const Links = ({description, href, title}: ILinks) => {
  return (
    <div className="links">
      <a className="link" href="#">{title}</a>
      <a className="link" href={href}>{title}</a>
    </div>
  )
};