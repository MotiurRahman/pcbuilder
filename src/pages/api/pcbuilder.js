import connectToDatabase from "@/lib/mongodb";
export default async function products(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const client = await connectToDatabase();
    // Send a ping to confirm a successful connection

    const products = client.db("pcbuilder").collection("featured_products");

    if (req.method === "GET") {
      const allProducts = await products.find().toArray();
      res.send({ message: "success", status: 200, data: allProducts });
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
