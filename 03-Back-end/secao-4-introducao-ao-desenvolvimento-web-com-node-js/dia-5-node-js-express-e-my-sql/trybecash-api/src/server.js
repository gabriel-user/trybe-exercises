require('dotenv').config();
const app = require('./app');
const conn = require('./db/connection');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`)

  const [result] = await conn.execute('SELECT 1');
  if (result) console.log('mySQL Connection OK');

});
