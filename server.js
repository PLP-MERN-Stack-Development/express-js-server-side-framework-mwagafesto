// server.js
import { config } from 'dotenv';
config();
import http from 'http';
import app from './src/app.js';
import { connectMongo } from './src/db/mongoose.js';

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(PORT, async () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
  await connectMongo();
});
