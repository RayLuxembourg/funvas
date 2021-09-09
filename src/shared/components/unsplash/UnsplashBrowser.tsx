import React, { useCallback, useEffect, useState } from 'react';

import {
  Box,
  Button,
  Chip,
  ImageList, ImageListItem, InputAdornment, LinearProgress, Stack, TextField, Typography,
} from '@mui/material';
import debounce from 'lodash.debounce';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import searchImage from './unsplashService';
import type { Unsplash } from './types';

export type AddSelected = (selectedImagesURL: string[]) => void;

type Props = {
  addSelected: AddSelected
};

export default function UnsplashBrowser(props:Props) {
  const [pokemonImages, setImages] = useState<Unsplash.Result[]>([]);
  // const [selected, setSelected] = useState<{ [key: string]: string }>({});
  const [selected, setSelected] = useState<string[]>([]);

  const select = (url: string) => {
    setSelected((old) => [...old, url]);
  };

  const remove = (id: string) => {
    setSelected((urls) => urls.filter((url) => url !== id));
  };

  const addToCanvas = () => {
    props.addSelected(selected);
  };

  const imageOnClick = (id: string, url: string) => {
    if (selected.includes(url)) {
      return remove(url);
    }
    return select(url);
  };

  const search = (query: string) => {
    searchImage(query).then(setImages);
  };

  useEffect(() => {
    search('pokemon');
  }, []);

  const debouncedSearch = useCallback(
    debounce(search, 300),
    [],
  );
  return (

    <Stack data-testid="unsplash-browser" sx={{ height: '100%' }}>
      <Typography variant="h3" fontSize="1.5rem">
        Unsplash search
      </Typography>
      <LinearProgress />

      <TextField
        sx={{ my: 4 }}
        id="outlined-basic"
        onChange={(e) => {
          debouncedSearch(e.target.value);
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchTwoToneIcon />
            </InputAdornment>
          ),
        }}
        label="search"
        variant="outlined"
      />
      <Box>
        <Chip label={`${selected.length} Selected`} variant="outlined" />

      </Box>
      <ImageList sx={{ width: '100%', height: '40vh' }} cols={3} rowHeight={164}>
        {pokemonImages.map((a) => (
          <ImageListItem
            key={a.id}
            onClick={() => imageOnClick(a.id, a.urls.full)}
            sx={{
              border: selected.includes(a.urls.full) ? '3px dashed #1976d2' : 'initial',
              overflow: 'hidden',
              width: '100%',
              height: '100%',
            }}
          >
            <img src={a.urls.thumb} srcSet={a.urls.full} alt={a.alt_description} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>

      <Button
        onClick={addToCanvas}
        sx={{ mt: 2 }}
        disabled={selected.length === 0}
        color="success"
        variant="outlined"
      >
        Add to Canvas

      </Button>
    </Stack>
  );
}
