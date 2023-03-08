let studentsMap = new Map();

studentsMap.set(1, 'Shiva');
studentsMap.set(2, { name: 'John', section: 'A' });

console.log(`Map size: ${studentsMap.size}`);

console.log(studentsMap.get(2));

studentsMap.delete(1);

console.log(studentsMap.get(1));
