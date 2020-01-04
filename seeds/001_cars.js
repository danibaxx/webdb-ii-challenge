exports.seed = async function(knex) {
  await knex("cars").insert([
    { make: "Toyota", model: "RAVA4LE", mileage: 50000, vin: "1ABAB01ABAB010101" },
    { make: "Honda", model: "Accord LX-S", mileage: "24000", vin: "3CDCD23CDCD232323" },
    { make: "Ford", model: "F150 SVT Raptor", mileage: "50000", vin: "5EFEF45EFEF454545" },
    { make: "Nissan", model: "Rogue SV", mileage: "119000", vin: "6GHGH67GHGH676767" },
    { make: "Jeep", model: "Wrangler Sport", mileage: "30000", vin: "9IJIJ98IJIJ989898" },
  ]);
};