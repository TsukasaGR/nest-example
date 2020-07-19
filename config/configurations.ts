import { User } from 'src/user/user.entity';

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities:
      process.env.NODE_ENV === 'develop' // webpack hot reloadingだとpath指定では動かないため暫定対応
        ? [User]
        : ['src/**/**.entity{.ts,.js}'],
    synchronize: process.env.NODE_ENV === 'develop' ? true : false,
  },
});
