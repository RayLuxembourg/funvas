import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { PopoverPosition } from '@mui/material';

export type ObjectTypes = 'line' | 'textbox' | 'circle' | 'triangle' | 'ellipse' | 'rect' | 'polyline' | 'polygon' | 'path' | 'group' | 'activeSelection' | 'image' | 'BaseFilter';

type ContextMenuState = {
  position: PopoverPosition
  isOpen: boolean,
  type: ObjectTypes | undefined
  currentObjectID: string | undefined

};

const initialState: ContextMenuState = {
  isOpen: false,
  type: undefined,
  position: {
    left: 0,
    top: 0,
  },
  currentObjectID: undefined,
};

const contextMenuSlice = createSlice({
  name: 'contextMenu',
  initialState,
  reducers: {
    openContextMenu: (state, action: PayloadAction<{
      position: PopoverPosition,
      type: ObjectTypes | undefined
      objectID: string | undefined
    }>) => {
      state.position = action.payload.position;
      state.type = action.payload.type;
      state.currentObjectID = action.payload.objectID;
      state.isOpen = true;
    },
    closeContextMenu: (state) => {
      state.isOpen = false;
    },

  },
});

export const { openContextMenu, closeContextMenu } = contextMenuSlice.actions;
export default contextMenuSlice.reducer;
