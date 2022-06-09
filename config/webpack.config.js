import path from 'path';
import Dotenv from 'dotenv-webpack';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
  mode: 'development',
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'index.js',
  },
  plugins: [new Dotenv()],
};
