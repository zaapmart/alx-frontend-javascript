 

export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  let employees = [];

  // Gather all employees from each department into a single array
  for (const department of Object.values(allEmployees)) {
    employees = employees.concat(department);
  }

  // Return an iterator
  return employees[Symbol.iterator]();
}
