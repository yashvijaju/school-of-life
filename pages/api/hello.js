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

// async postRequest(id, header, content) {
//   const res = await fetch('/api/vfc_approval', {
//       method: "POST",
//       headers: {'Content-Type' : 'application/json'},
//       body: JSON.stringify({ 
//           header: header,
//           content: content,
//           _id: id,
//           type: "old",
//       }),
//   });
// }
