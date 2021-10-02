import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const energySlice = createSlice({
  name: 'energy',
  initialState: 0,
  reducers: {
    energySet: (_, action: PayloadAction<number>) => action.payload,
    energyIncrease: (state, action: PayloadAction<number>) => state + action.payload,
    energyDecrease: (state, action: PayloadAction<number>) => state - action.payload,
    energyReset: () => 0,
  },
});

export const { energySet, energyIncrease, energyDecrease, energyReset } = energySlice.actions;

export const energy = energySlice.reducer;
