import React, { Component } from 'react';
import './sass/main.scss';
import {Accordeon} from './components/Accordeon';
import {CSModel} from './CSModel';
import {IAccordion} from './models';

export class CyberSecurity extends Component {
  render() {
    return (
      <div className="CyberSecurity">
        <div className="selection">
          <span>Выберите интересующую тему:</span>
        </div>
        {
          CSModel.accordions.map((accordion: IAccordion) => <Accordeon key={accordion.name} {...accordion} />)
        }
      </div>
    );
  }
}

