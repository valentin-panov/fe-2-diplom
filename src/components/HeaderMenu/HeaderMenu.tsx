import React, { memo } from 'react';
import cn from 'clsx';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './HeaderMenu.module.scss';
import { RootState } from '../../store';
import { HeaderMenuItem } from './HeaderMenuItem';
import { Menu } from '../../interfaces/Interfaces';

export type Props = {
  className?: string;
};

export const HeaderMenu = memo<Props>(({ className }) => {
  const { menu } = useSelector((store: RootState) => store);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation: string = pathname.split('/')[1];

  return (
    <div className={cn(s.root, className)}>
      <nav className="">
        <ul className="">
          {menu.map((item: Menu) => {
            const active = splitLocation === item.pathName ? 'active' : '';
            return <HeaderMenuItem key={item.id} {...item} className={cn(`nav-link`, active)} />;
          })}
        </ul>
      </nav>
    </div>
  );
});
