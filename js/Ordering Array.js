var objs_1 = [1, 3, 5, 6, 2, 4, 1];

var objs_2 = [ 
    { id: 2, first_name: 'Laszlo', last_name: 'Celine'},
    { id: 1, first_name: 'Pig',    last_name: 'Andine'},
    { id: 3, first_name: 'Pirate', last_name: 'Briska'}
];

// Sorting angka di dalam array Ascending
objs_2.sort();

// Sorting angka di dalam array Descending
objs_2.sort((a, b) => (b.id - a.id));

// Sorting angka di dalam object Ascending
objs_2.sort((a, b) => (a.id - b.id))

// Sorting angka di dalam object Descending
objs_2.sort((a, b) => (b.id - a.id))

// Sorting kata di dalam object Ascending
objs_2.sort((a, b) => (a.last_name > b.last_name) ? 1 : (b.last_name > a.last_name) ? -1 : 0)

// Sorting kata di dalam object Descending
objs_2.sort((a, b) => (a.last_name > b.last_name) ? -1 : (b.last_name > a.last_name) ? 1 : 0)
