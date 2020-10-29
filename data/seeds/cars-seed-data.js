
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: 'Toyota', model: 'Corolla', VIN: 45887569854598},
        {make: 'Honda', model: 'Accord', VIN: 25887569854598},
        {make: 'Ford', model: '150', VIN: 98887569854598},   
        {make: 'Mercedes', model: 'Benz', VIN: 76887569854598},
        {make: 'Aston', model: 'Martin', VIN: 15887569854598},
        {make: 'Hummer', model: 'Big one', VIN: 25887569854598},
        {make: 'Monster Truck', model: 'BIG', VIN: 35887569854598},   
      ]);
    });
};
