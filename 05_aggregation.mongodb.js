use("ecommerce");

/*
db.sales.insertMany([
{ _id: 1, item: "Apple", price: 10, quantity: 5, category: "Fruit" },
{ _id: 2, item: "Banana", price: 5, quantity: 10, category: "Fruit" },
{ _id: 3, item: "Carrot", price: 8, quantity: 6, category: "Vegetable" },
{ _id: 4, item: "Tomato", price: 6, quantity: 8, category: "Vegetable" },
{ _id: 5, item: "Mango", price: 15, quantity: 3, category: "Fruit" }
]);

*/

// # Aggregation Pipeline Example 1: $match : Filter documents
/*
db.sales.aggregate([
  { $match: { category: "Fruit" } }
]);
*/

// # Aggregation Pipeline Example 2: $project : Select specific fields
// db.sales.aggregate([{ $project: { _id: 0, item: 1, price: 1 } }]);

// # Aggregation Pipeline Example 3: $group : Group and calculate totals
/*
db.sales.aggregate([
  {
    $group: {
      _id: "$category",
      totalSales: { $sum: { $multiply: ["$price", "$quantity"] } },
    },
  },
]);
*/

// # Aggregation Pipeline Example 4: $sort : Sort results
/*
db.sales.aggregate([
  {
    $group: {
      _id: "$category",
      totalSales: { $sum: { $multiply: ["$price", "$quantity"] } },
    },
  },
  { $sort: { totalSales: -1 } },
]);
*/

// # Aggregation Pipeline Example 5: Combine $match + $group
/*
db.sales.aggregate([
  { $match: { category: "Fruit" } },
  {
    $group: {
      _id: null,
      totalFruitSales: { $sum: { $multiply: ["$price", "$quantity"] } },
    },
  },
]);
*/

// # Total revenue from all orders:
/*
db.orders.aggregate([
  { $group: { _id: null, totalRevenue: { $sum: "$total" } } },
]);
 */

// # Group by Status
// db.orders.aggregate([{ $group: { _id: "$status", totalOrders: { $sum: 1 } } }]);

// # Lookup (Join Orders with Products)
/*
db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "products.name",
      foreignField: "name",
      as: "productDetails",
    },
  },
]);
*/
