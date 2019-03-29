
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { id: 1,
          description: 'action1',
          notes: 'Hakuna Matata',
          completed: false
        },
        { id: 2,
          description: 'action2',
          notes: 'Hakuna Matata',
          completed: false
        },
        { id: 3,
          description: 'action3',
          notes: 'Hakuna Matata',
          completed: false
        },
        { id: 4,
          description: 'action4',
          notes: 'Hakuna Matata',
          completed: false
        }
      ]);
    });
};
