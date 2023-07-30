import connectToDatabase from "@/lib/mongodb";
export default async function products(req, res) {
  try {
    const client = await connectToDatabase();
    const products = client.db("pcbuilder").collection("products");

    if (req.method === "GET") {
      const allProductsCursor = await products.aggregate([
        { $sample: { size: 6 } },
      ]);

      // Convert the cursor to an array to get the actual documents
      const allProducts = await allProductsCursor.toArray();

      res.send({ message: "success", status: 200, data: allProducts });
    }
  } finally {
    // Ensure that the client will close when you finish/error
    // await client.close();
  }
}
