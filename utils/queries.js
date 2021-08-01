const queryList = {

  viewAllDepartments: `SELECT * FROM department`,

  viewAllRoles: ` SELECT a.id, a.title, a.salary, b.name AS department
                  FROM role a
                  JOIN department b on b.id = a.department_id
                  ORDER BY a.id`,

  viewAllEmployees: ` SELECT  a.id, a.first_name, a.last_name, c.title, d.name AS department, c.salary, CONCAT(b.first_name, ' ', b.last_name) AS manager 
                      FROM employee a
                      JOIN role c ON a.role_id = c.id
                      JOIN department d ON c.department_id = d.id
                      LEFT JOIN employee b on b.id = a.manager_id
                      ORDER BY a.id`,

  addDepartment: `INSERT INTO department (name)
                  VALUES (?)`,

  addRole: `INSERT INTO role (title, salary, department_id)
            VALUES (?,?,?)`,

  addEmployee: `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES (?,?,?,?)`,

  updateEmployee: `UPDATE employee 
                  SET role_id = ? WHERE id = ?`

}

module.exports = queryList;