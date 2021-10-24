import React, { memo } from 'react';
import cn from 'clsx';
import { Button, Input } from 'antd';
import s from './Footer.module.scss';
import { Logo } from '../Logo';
import btnUp from './img/btnUp.svg';
import iconCall from './img/iconCall.svg';
import iconMail from './img/iconMail.svg';
import iconSkype from './img/iconSkype.svg';
import iconGeo from './img/iconGeo.svg';

export type Props = {
  className?: string;
};

export const Footer = memo<Props>(({ className }) => (
  <footer className={cn(s.root, className)}>
    <div>
      <div>
        <p>Свяжитесь с нами</p>
      </div>
      <div>
        <img src={iconCall} alt="up" />
        <p>8 (800) 000 00 00</p>
      </div>
      <div>
        <img src={iconMail} alt="up" />

        <p>inbox@mail.ru</p>
      </div>
      <div>
        <img src={iconSkype} alt="up" />

        <p>tu.train.tickets</p>
      </div>
      <div>
        <img src={iconGeo} alt="up" />

        <p>г. Москва ул. Московская 27-35 555 555</p>
      </div>
    </div>
    <div>
      <p>Подписка</p>
      <div>
        <p>Будьте в курсе событий</p>
        <Input placeholder="e-mail" size="large" />
        <Button>ОТПРАВИТЬ</Button>
      </div>
      <div>
        <p>Подписывайтесь на нас</p>
        <div>
          <img src={btnUp} alt="up" />
          <img src={btnUp} alt="up" />
          <img src={btnUp} alt="up" />
          <img src={btnUp} alt="up" />
          <img src={btnUp} alt="up" />
        </div>
      </div>
    </div>
    <div className={cn(s.bottom)}>
      <Logo />
      <img src={btnUp} alt="up" />
      <p>2018 Web</p>
    </div>
  </footer>
));
