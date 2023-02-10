import React, {useState} from 'react';
import {Box, Container, TextField, Button, Typography, Paper} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectUrl} from "../../store/shortLinkSlice";
import {postLink} from "../../store/shortLinkThunk";

const ShortLink = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const link = useAppSelector(selectUrl);
  let newLink = null;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(postLink(value));
    setValue('');
  };

  if (link) {
    newLink = (
      <a href={'http://localhost:8000/' + link.shortUrl}>http://localhost:3000/{link.shortUrl}</a>
    );
  }


  return (
    <Box component='form' sx={{width: 400}} onSubmit={onSubmit}>
      <Container>
        <Paper elevation={3} sx={{p: 5}}>
          <Typography variant="h5" component="p" sx={{mb: 3}}>
            Укоротить ссылку
          </Typography>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            type='url'
            required
            fullWidth
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}

          />
          <Button type='submit' sx={{mt: 2}} variant="contained">Contained</Button>
        </Paper>
        <Typography variant="h5" component="div">
          Ссылка: {newLink}
        </Typography>
      </Container>
    </Box>
  );
};

export default ShortLink;