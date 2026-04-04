import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import authRoutes from './routes/authRoutes';
import "./workers/fileWorker";
import { PORT, MONGO_URI, FRONTEND_URL } from './config';

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://trusted.cdn.com"]
      }
    }
  })
);
app.use(express.json());

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/upload', require('./routes/uploadRoutes').default);
app.use('/api/websites', require('./routes/websiteRoutes').default);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});