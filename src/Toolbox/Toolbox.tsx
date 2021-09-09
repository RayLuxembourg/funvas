import React from 'react';
import {
  Box, Button, Divider, Grid, IconButton, Stack, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import TextFieldsTwoTone from '@mui/icons-material/TextFieldsTwoTone';
import TextSnippetTwoToneIcon from '@mui/icons-material/TextSnippetTwoTone';
import ZoomInTwoToneIcon from '@mui/icons-material/ZoomInTwoTone';
import ZoomOutTwoToneIcon from '@mui/icons-material/ZoomOutTwoTone';
import BrushTwoToneIcon from '@mui/icons-material/BrushTwoTone';
import NearMeTwoToneIcon from '@mui/icons-material/NearMeTwoTone';
import ImageSearchTwoToneIcon from '@mui/icons-material/ImageSearchTwoTone';
import Modal from '@mui/material/Modal';
import { RootState } from '../redux/store';

import {
  addImgURL, addText, getCanvas, reset, selectLayer,
} from '../Canvas';

import { UnsplashBrowser, AddSelected } from '../shared/components/unsplash';
import ImageUploadButton from './ImageUploadButton';

// TODO: Split every tool to its own component
/**
 * @description this component is the container
 * of all the availiable tools that can be used with the canvas application
 */
export default function Toolbox() {
  const elem = useSelector((state: RootState) => getCanvas(state.canvas.canvasId));
  const canvasObjects = useSelector((state: RootState) => state.canvas.canvasObjects);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!elem) return null;
  const { fabric: canvas } = elem;

  const download = () => {
    const url = canvas?.toDataURL({
      format: 'png',
    });

    if (url) {
      const link = document.createElement('a');
      link.download = `funvas-${new Date().toISOString()}.png`;
      link.href = url;
      link.click();
    }
  };

  const addImagesToCanvas:AddSelected = (selected) => {
    selected.forEach((url) => {
      dispatch(addImgURL(url));
    });
    setOpen(false);
  };

  return (
    <Box sx={{
      display: 'flex', justifyContent: 'start', flexDirection: 'column', position: 'relative', height: '100%', width: '100%',
    }}
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between" height="100%">
        <Grid
          width="100px"
          sx={{
            position: 'fixed',
            left: (theme) => theme.spacing(2),
            top: (theme) => theme.spacing(2),
            boxShadow: (theme) => theme.shadows[1],
          }}
          container
        >
          <Grid item xs={6}>
            <IconButton
              color="primary"
              onClick={() => {
                canvas.isDrawingMode = false;
              }}
            >
              <NearMeTwoToneIcon width="100%" />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <IconButton
              onClick={() => {
                dispatch(addText());
              }}
              color="primary"
            >
              <TextFieldsTwoTone width="100%" />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <ImageUploadButton />
          </Grid>
          <Grid item xs={6}>
            <IconButton color="primary" onClick={handleOpen}>
              <ImageSearchTwoToneIcon width="100%" />

            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <IconButton
              onClick={() => {
                canvas.isDrawingMode = true;
              }}
              color="primary"
            >
              <BrushTwoToneIcon width="100%" />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <IconButton
              disabled
              onClick={() => {
                dispatch(addText());
              }}
              color="primary"
            >
              <ZoomInTwoToneIcon width="100%" />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <IconButton
              disabled
              onClick={() => {
                dispatch(addText());
              }}
              color="primary"
            >
              <ZoomOutTwoToneIcon width="100%" />
            </IconButton>
          </Grid>
        </Grid>
        <Stack
          sx={{
            backgroundColor: '#fff',
            boxShadow: (theme) => theme.shadows[1],
            zIndex: 9999,
            position: 'fixed',
            right: (theme) => theme.spacing(2),
            bottom: (theme) => theme.spacing(2),
          }}
          height="200px"
          overflow="auto"
          width="200px"
        >
          <Typography textAlign="center" p={1}>
            Layers
          </Typography>

          {canvasObjects.map(({ type, name }) => (
            <>
              <Divider />
              <Button endIcon={<TextSnippetTwoToneIcon color="secondary" />} onClick={() => dispatch(selectLayer(name as string))}>
                {type}
              </Button>
            </>
          ))}
        </Stack>

      </Box>
      <Button
        onClick={download}
        sx={{
          position: 'fixed',
          zIndex: 9999,
          top: (theme) => theme.spacing(2),
          right: (theme) => theme.spacing(2),
        }}
        color="success"
        variant="outlined"
      >
        Download

      </Button>
      <Button
        onClick={() => dispatch(reset())}
        sx={{
          position: 'fixed',
          zIndex: 9999,
          top: (theme) => theme.spacing(2),
          right: '140px',
        }}
        color="error"
        variant="outlined"
      >
        Remove ALL

      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Unsplash Browser"
        aria-describedby="look for image of your liking"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50vw',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
        >
          <UnsplashBrowser addSelected={addImagesToCanvas} />
        </Box>
      </Modal>
    </Box>
  );
}
