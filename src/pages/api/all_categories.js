import connectToDatabase from "@/lib/mongodb";
export default async function categories(req, res) {
  try {
    // Connect the client to the server (optional starting in v4.7)
    const client = await connectToDatabase();
    // Send a ping to confirm a successful connection

    const products = client.db("pcbuilder").collection("products");

    if (req.method === "GET") {
      const distinctCategories = await products
        .aggregate([{ $group: { _id: "$category" } }])
        .toArray();
      const categories = distinctCategories.map((category) => category._id);
      res.send({ message: "success", status: 200, data: categories });
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
