
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
  .del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1,
          name: 'projectRow1',
          description: 'Normal people believe that if it ain’t broke, don’t fix it. Engineers believe that if it ain’t broke, it doesn’t have enough features yet.',
          // completed: false
        },
        { id: 2,
          name: 'projectRow2',
          description: 'Normal people believe that if it ain’t broke, don’t fix it. Engineers believe that if it ain’t broke, it doesn’t have enough features yet.',
          // completed: false
        },
        { id: 3,
          name: 'projectRow3',
          description: 'Normal people believe that if it ain’t broke, don’t fix it. Engineers believe that if it ain’t broke, it doesn’t have enough features yet.',
          // completed: false
        }
      ]);
    });
};
