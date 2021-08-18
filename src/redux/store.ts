import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {gameSlice } from './slices'


export const store = configureStore({
    reducer: {
      game: gameSlice.reducer,
    },
});

store.subscribe(() => {
  const storage = store.getState();
  console.log(JSON.stringify(storage.game));
  localStorage.setItem('game', JSON.stringify(storage.game));
});
  
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;