// ./src/index.ts
import Connector from './Connector';
import { RedisConnector } from './Connectors';

// ./src/index.ts

const tokenR = 'ce42033d-9133-457a-a1a1-41ac0b63a333';
const connR = new RedisConnector({
  host: 'redisdb',
  port: 6379,
});

const token = 'ce42033d-9133-457a-a1a1-41ac0b63a333';
const conn = new Connector({
  host: 'mysqldb',
  port: 3306,
  database: 'counter',
  user: 'root',
  password: 'example',
});

const main = (connector: Connector) => {
  connector.firstCount(token);

  const logCount = async () => {
    try {
      const count = await connector.getCount(token);
      console.log(count);
    } catch (err) {
      console.error(err);
    }
  };

  const doSomeIncrements = () => {
    logCount();
    connector.incrementCount(token);
    connector.incrementCount(token);
    connector.incrementCount(token);
  };

  const incrementsInterval = setInterval(doSomeIncrements, 500);

  setTimeout(() => {
    clearInterval(incrementsInterval);
    logCount();
    connector.clearCount(token);
    connector.closeConnection();
  }, 5500);
};

main(conn);

/*
Saída:
0
3
6
9
12
15
18
21
24
27
30
*/