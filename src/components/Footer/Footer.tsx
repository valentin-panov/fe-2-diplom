import React, { memo } from 'react';
import cn from 'clsx';
import { Button, Form, Input } from 'antd';
import s from './Footer.module.scss';
import { ContactItem } from './ContactItem';
import { SocialIcon } from './SocialIcon';
import { Logo } from '../Logo';
import iconCall from './img/iconCall.svg';
import iconMail from './img/iconMail.svg';
import iconSkype from './img/iconSkype.svg';
import iconGeo from './img/iconGeo.svg';
import fb from './img/fb.svg';
import youtube from './img/youtube.svg';
import gPlus from './img/gPlus.svg';
import twt from './img/twt.svg';
import linkedIn from './img/linkedIn.svg';
import btnUp from './img/btnUp.svg';

export type Props = {
  className?: string;
};

export const Footer = memo<Props>(({ className }) => (
  <footer className={cn(s.root, className)}>
    <div className={s.top}>
      <section className={s.topSection}>
        <div className={s.connectBlockTitle}>
          <span className={s.footer__title}>Свяжитесь с нами</span>
        </div>
        <ul className={s.connectBlockContainer}>
          <ContactItem
            connectLink="/"
            connectIconSrc={iconCall}
            connectIconAlt="iconCall"
            connectText="8 (800) 000 00 00"
          />
          <ContactItem
            connectLink="/"
            connectIconSrc={iconMail}
            connectIconAlt="iconMail"
            connectText="inbox@mail.ru"
          />
          <ContactItem
            connectLink="/"
            connectIconSrc={iconSkype}
            connectIconAlt="iconSkype"
            connectText="tu.train.tickets"
          />
          <ContactItem
            connectLink="/"
            connectIconSrc={iconGeo}
            connectIconAlt="iconGeo"
            connectText="г. Москва ул. Московская 27-35 555 555"
          />
        </ul>
      </section>
      <section className={s.topSection}>
        <div className={s.connectBlockTitle}>
          <span>Подписка</span>
        </div>
        <div className={s.connectBlockSubtitle}>
          <p>Будьте в курсе событий</p>
          <Form className={s.subscriptionForm}>
            <Input placeholder="e-mail" className={s.emailInput} />
            <Button className={s.btn}>ОТПРАВИТЬ</Button>
          </Form>
        </div>
        <div className={s.socials}>
          <span>Подписывайтесь на нас</span>
          <ul className={s.socials__imageContainer}>
            <SocialIcon iconSrc={youtube} iconLink="/" iconAlt="youtube" />
            <SocialIcon iconSrc={linkedIn} iconLink="/" iconAlt="linkedIn" />
            <SocialIcon iconSrc={gPlus} iconLink="/" iconAlt="gPlus" />
            <SocialIcon iconSrc={fb} iconLink="/" iconAlt="fb" />
            <SocialIcon iconSrc={twt} iconLink="/" iconAlt="twt" />
          </ul>
        </div>
      </section>
    </div>
    <div className={cn(s.bottom)}>
      <Logo />
      <img src={btnUp} alt="up" />
      <span>2018 Web</span>
    </div>
    ;
  </footer>
));
