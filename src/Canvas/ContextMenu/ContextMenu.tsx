import React from 'react';
import {
  Divider, ListItemIcon, ListItemText, Menu, MenuItem,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { RootState } from '../../redux/store';
import { closeContextMenu } from './contextMenuSlice';
import { deleteItem } from '..';

export default function ContextMenu() {
  const contextMenuState = useSelector((state: RootState) => state.contextMenu);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeContextMenu());
  };
  const handleDelete = () => {
    dispatch(deleteItem(contextMenuState.currentObjectID as string));
    handleClose();
  };

  return (
    <Menu
      sx={{}}
      anchorPosition={contextMenuState.position}
      anchorReference="anchorPosition"
      onContextMenu={(event) => {
        event.preventDefault();
      }}
      open={contextMenuState.isOpen}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem sx={{ minWidth: '170px' }} onClick={handleClose}>

        Move to front

      </MenuItem>
      <MenuItem sx={{ minWidth: '170px' }} onClick={handleClose}>

        Move to back

      </MenuItem>
      <Divider />

      <MenuItem sx={{ minWidth: '170px' }} onClick={handleDelete}>
        <ListItemIcon>
          <DeleteTwoToneIcon color="error" />
        </ListItemIcon>
        <ListItemText>Delete</ListItemText>

      </MenuItem>
    </Menu>
  );
}
