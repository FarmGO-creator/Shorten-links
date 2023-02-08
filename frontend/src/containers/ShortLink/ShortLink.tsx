import React from 'react';
import {Box, Container, TextField, Button, Typography, Paper} from "@mui/material";

const ShortLink = () => {
  return (
    <Box component='form' sx={{width: 400}}>
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
          />
          <Button type='submit' sx={{mt: 2}} variant="contained">Contained</Button>
        </Paper>
        <Typography variant="h5" component="div">
          Ссылка:
        </Typography>
      </Container>
    </Box>
  );
};

export default ShortLink;