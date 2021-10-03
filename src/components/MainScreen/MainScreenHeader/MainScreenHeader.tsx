import React, { memo } from 'react';
import cn from 'clsx';
import s from './MainScreenHeader.module.scss';
import { Logo } from '../../Logo';
import { HeaderMenu } from '../../HeaderMenu';

export type Props = {
  className?: string;
};

export const MainScreenHeader = memo<Props>(({ className }) => (
  <header className={cn(s.root, className)}>
    <Logo />
    <HeaderMenu />
  </header>
));
