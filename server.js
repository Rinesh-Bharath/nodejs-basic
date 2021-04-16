import { createServer } from 'http';
import { myDateTime } from './date.js';

createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({
    'status': 200,
    'value': `Hello nGRID Students! ${myDateTime()}`
  }));
  res.end();
}).listen(8080);
