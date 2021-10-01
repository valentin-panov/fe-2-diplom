import { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { storageHandlerAdapter } from 'src/packages/storage/adapters/StorageHandlerAdapter';
import { energySet } from 'src/store/energy';
import { experienceSet } from 'src/store/experience';
import { solutionsSet } from 'src/store/solutions';

export type Props = {
  className?: string;
  children?: never;
};

export const StorageHandler = memo<Props>(() => {
  const { energy, experience, solutions } = useSelector((store: RootState) => store);
  const dispatch = useDispatch();

  const mounted = useRef<boolean>(false);

  useEffect(() => {
    // Если монтирование
    if (!mounted.current) {
      mounted.current = true; // Отмечаем, что монтирование было

      // данные из локального стора помещаем в стэйт менеджер
      storageHandlerAdapter.get().then((data) => {
        if (!data) return;
        if (data.energy) dispatch(energySet(data.energy));
        if (data.experience) dispatch(experienceSet(data.experience));
        if (data.solutions) dispatch(solutionsSet(data.solutions));
      });
    } else {
      storageHandlerAdapter.set({ energy, experience, solutions });
    }
  }, [dispatch, energy, experience, solutions]);

  return null;
});
