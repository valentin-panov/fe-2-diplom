import React, { memo } from 'react';
import cn from 'clsx';
import s from './MainScreen.module.scss';
import { MainScreenHeader } from './MainScreenHeader';

export type Props = {
  className?: string;
};

export const MainScreen = memo<Props>(({ className }) => (
  <div className={cn(s.root, className)}>
    <MainScreenHeader />
  </div>
));
