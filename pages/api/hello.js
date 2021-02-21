// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from "../util/mongodb";

export default async (req, res) => {
    const { db } = await connectToDatabase(); 

    let query = req.query;
    let queryName = Object.values(query)[0];

    let doc = await db
        .collection("Pending New Volunteers")
        .find({"_id": queryName})
        .toArray();
    res.json(doc);
};

export async function getServerSideProps({req}) {
  const { db } = await connectToDatabase();

  const res_questions = await db
      .collection("Recess_Questions")
      .find({"_id": "question"})
      .toArray();

  const res_user_data = await db
      .collection("Volunteers")
      .find({"_id": session.id})
      .toArray();
  
  return {
      props: {
          auth_vfc: JSON.parse(JSON.stringify(res_auth)),
          session: session,
          user_data: JSON.parse(JSON.stringify(res_user_data)),
      },
  };
}

import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("Recess_Questions")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(movies);
};

export default function handler(req, res) {
  const {
    query: { pid },
  } = req

  res.end(`Post: ${pid}`)
}

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { connectToDatabase } from "../util/mongodb";
import errors from "../util/mongodb";

const handler = async (req, res) => {
    const { name, email, password, image, isExternal } = JSON.parse(req.body);

    if (!name || !email || !password) {
        res.statusCode = 422;

        return res.json({ ...errors.REGISTER_FORM_DATA_MISSING });
    }

    try {
        const { db } = await connectToDatabase();

        const savedUser = await db.collection('users').find({ email });

        if (!process.env.JWT_SECRET) {
            res.statusCode = 422;

            return res.json({ ...errors.SECRET_NOT_DEFINED });
        }

        if (savedUser && !isExternal) {
            res.statusCode = 422;

            return res.json({ ...errors.ALREADY_REGISTERED });
        }

        const hashed = await bcrypt.hash(password, 12);

        if (hashed) {
            if (savedUser) {
                await db
                    .collection('users')
                    .updateOne({ email }, { $set: { password } });

                const token = jwt.sign(
                    { _id: savedUser._id },
                    process.env.JWT_SECRET
                );

                return res.json({
                    message: 'Saved successfully',
                    user: savedUser,
                    token,
                });
            }

            const user = {
                email,
                name,
                
            };

            await db.collection('users').insertOne(user);

            const foundUser = await db.collection('users').findOne({ email });

            await db.collection('preferences').insertOne({
                user: foundUser,
                numQuestions: 3,
                gender: '',
            });

            const auth = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

            res.status(201);

            return res.json({
                message: 'Saved successfully',
                user,
                auth,
            });
        }
    } catch (error) {
        res.statusCode = 500;

        return res.json({ ...errors.ERROR_REGISTERING });
    }
};

export default handler;

