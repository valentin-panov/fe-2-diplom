import React, { memo } from 'react';
import cn from 'clsx';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import s from './Footer.module.scss';
import { Logo } from '../Logo';
import btnUp from './img/btnUp.svg';
import iconCall from './img/iconCall.svg';
import iconMail from './img/iconMail.svg';
import iconSkype from './img/iconSkype.svg';
import iconGeo from './img/iconGeo.svg';
import fb from './img/fb.svg';
import gPlus from './img/gPlus.svg';
import twt from './img/twt.svg';
import linkedIn from './img/linkedIn.svg';
import youtube from './img/youtube.svg';

export type Props = {
  className?: string;
};

export const Footer = memo<Props>(({ className }) => (
  <footer className={cn(s.root, className)}>
    <div className={s.top}>
      <section className={s.topSection}>
        <div className={s.connectBlockTitle}>
          <p>Свяжитесь с нами</p>
        </div>
        <ul className={s.connectBlockContainer}>
          <li className={s.connectBlock}>
            <img src={iconCall} alt="up" className={s.connectIcon} />
            <p>8 (800) 000 00 00</p>
          </li>
          <li className={s.connectBlock}>
            <img src={iconMail} alt="up" className={s.connectIcon} />
            <p>inbox@mail.ru</p>
          </li>
          <li className={s.connectBlock}>
            <img src={iconSkype} alt="up" className={s.connectIcon} />
            <p>tu.train.tickets</p>
          </li>
          <li className={s.connectBlock}>
            <img src={iconGeo} alt="up" className={s.connectIcon} />
            <div>
              <p>г. Москва</p>
              <p>ул. Московская 27-35</p>
              <p>555 555</p>
            </div>
          </li>
        </ul>
      </section>
      <section className={s.topSection}>
        <div className={s.connectBlockTitle}>
          <p>Подписка</p>
        </div>
        <div className={s.connectBlockSubtitle}>
          <p>Будьте в курсе событий</p>
          <Form className={s.subscriptionForm}>
            <Input placeholder="e-mail" className={s.emailInput} />
            <Button className={s.btn}>ОТПРАВИТЬ</Button>
          </Form>
        </div>
        <div className={s.socials}>
          <p>Подписывайтесь на нас</p>
          <ul className={s.socials__imageContainer}>
            <li>
              <Link to="/">
                <div className={s.socials__image}>
                  <img src={youtube} alt="up" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className={s.socials__image}>
                  <img src={linkedIn} alt="up" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className={s.socials__image}>
                  <img src={gPlus} alt="up" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className={s.socials__image}>
                  <img src={fb} alt="up" />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/">
                <div className={s.socials__image}>
                  <img src={twt} alt="up" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div className={cn(s.bottom)}>
      <Logo />
      <img src={btnUp} alt="up" />
      <p>2018 Web</p>
    </div>
    ;
  </footer>
));
