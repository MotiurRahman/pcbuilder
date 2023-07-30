import connectToDatabase from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function productDetails(req, res) {
  try {
    const client = await connectToDatabase();

    const products = client.db("pcbuilder").collection("products");
    const slug = req.query.productDetails;

    console.log("slug:", slug); // Add this line to check the value of the 'slug'

    const allProducts = await products.find({ _id: ObjectId(slug) }).toArray();
    if (allProducts.length > 0) {
      res.send({ message: "success", status: 200, data: allProducts });
    } else {
      res
        .status(500)
        .json({ message: "Error fetching data from the database." });
    }
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Error fetching data from the database." });
  } finally {
    // Make sure to close the client connection after finishing the request
    //  await client.close();
  }
}
