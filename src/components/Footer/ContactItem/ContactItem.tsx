import { Link } from 'react-router-dom';
import React, { memo } from 'react';
import cn from 'clsx';
import s from './ContactItem.module.scss';

export type Props = {
  className?: string;
  connectLink: string;
  connectIconSrc: string;
  connectIconAlt: string;
  connectText: string;
};

export const ContactItem = memo<Props>(({ className, connectIconAlt, connectLink, connectIconSrc, connectText }) => (
  <li>
    <Link to={connectLink} className={cn(s.root, className)}>
      <div className={s.icon__container}>
        <img src={connectIconSrc} alt={connectIconAlt} className={s.icon__image} />
      </div>
      <span className={s.connection__text}>{connectText}</span>
    </Link>
  </li>
));
