// /api/new-meetup
// POST /api/new-meetup

const handler = (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, description, address } = data;
  }
};

export default handler;
