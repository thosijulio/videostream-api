import app from './app';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.info(`Listen on port ${PORT}`));
