group1 = ['mike', 'sara', 'tom'];
group2 = ['anna', 'james', 'linda'];

groups = [group1, group2];

console.log(groups);
// Expected output: [['mike', 'sara', 'tom'], ['anna', 'james', 'linda']]

// allMembers = groups.flatMap(function(group) {
//   return group;
// });

allMembers = groups.flatMap(group => group);

console.log(allMembers);
// Expected output: ['mike', 'sara', 'tom', 'anna', 'james', 'linda']