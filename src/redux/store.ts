import { configureStore } from '@reduxjs/toolkit';
import { canvasReducer } from '../Canvas/canvasSlice';
import contextMenu from '../Canvas/ContextMenu/contextMenuSlice';

export const store = configureStore({
  reducer: {
    canvas: canvasReducer,
    contextMenu,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
