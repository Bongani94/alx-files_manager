// Users Controller

import sha1 from 'sha1';
import dbClient from '../utils/db';

const postNew = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (!email) return res.status(400).send({ error: 'Missing email' });
  if (!password) return res.status(400).send({ error: 'Missing password' });
  const userExists = await dbClient.users.findOne({ email });
  if (userExists) return res.status(400).send({ error: 'Already exist' });
  const user = await dbClient.users.insertOne({
    email,
    password: sha1(password),
  });
  return res.status(201).send({ id: user.insertedId, email });
};

export default { postNew };
