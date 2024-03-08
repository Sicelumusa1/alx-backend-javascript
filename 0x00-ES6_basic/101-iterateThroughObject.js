export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // Iterate through the iterator returned by createIteratorObject
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  // join the employee names with '|'
  return employeeNames.join(' | ');
}
