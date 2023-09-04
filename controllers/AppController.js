// AppControllers

import redisClient from '../utils/redis';
import dbClient from '../utils/db';

const getStatus = (req, res) => {
  const status = {
    redis: redisClient.isAlive(),
    db: dbClient.isAlive(),
  };
  return res.status(200).send(status);
};

const getStats = async (req, res) => {
  const users = await dbClient.nbUsers();
  const files = await dbClient.nbFiles();
  return res.status(200).send({ users, files });
};

export default {
  getStatus,
  getStats,
};
