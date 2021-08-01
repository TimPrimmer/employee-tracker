const queryList = {
  viewAllDepartments: `SELECT * FROM department`,

  viewAllRoles: ` SELECT a.id, a.title, a.salary, b.name AS department
                  FROM role a
                  LEFT JOIN department b on b.id = a.department_id
                  ORDER BY a.id`,

  viewAllEmployees: ` SELECT  a.id, a.first_name, a.last_name, c.title, d.name AS department, c.salary, CONCAT(b.first_name, ' ', b.last_name) AS manager 
                      FROM employee a
                      LEFT JOIN role c ON a.role_id = c.id
                      LEFT JOIN department d ON c.department_id = d.id
                      LEFT JOIN employee b on b.id = a.manager_id
                      ORDER BY a.id`,

  addDepartment: `INSERT INTO department (name)
                  VALUES (?)`,

  addRole: `INSERT INTO role (title, salary, department_id)
            VALUES (?,?,?)`,

  addEmployee: `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES (?,?,?,?)`,

  updateEmployeeRole: `UPDATE employee 
                       SET role_id = ? WHERE id = ?`,

  updateEmployeeManager: `UPDATE employee 
                          SET manager_id = ? WHERE id = ?`,

  viewEmployeesByManager:  `SELECT a.id, CONCAT(a.first_name, ' ', a.last_name) AS employee, CONCAT(b.first_name, ' ', b.last_name) AS manager
                            FROM employee a
                            JOIN employee b 
                            WHERE a.manager_id = b.id
                            AND b.id = (?)`,

  viewEmployeesByDepartment: `SELECT  a.id, CONCAT(a.first_name, ' ', a.last_name) AS employee, c.name AS department
                              FROM employee a
                              JOIN role b ON a.role_id = b.id
                              JOIN department c ON b.department_id = c.id
                              WHERE c.id = (?)
                              ORDER BY a.id`,

  deleteDepartment:  `DELETE FROM department 
                      WHERE department.id = (?)`,

  deleteRole:  `DELETE FROM role 
                WHERE role.id = (?)`,

  deleteEmployee:  `DELETE FROM employee 
                    WHERE employee.id = (?)`,

  viewDepartmentBudget:  `SELECT c.name AS department, SUM(b.salary) AS budget
                          FROM employee a
                          JOIN role b ON a.role_id = b.id
                          JOIN department c ON b.department_id = c.id
                          WHERE c.id = (?)
                          ORDER BY a.id`
}

module.exports = queryList;