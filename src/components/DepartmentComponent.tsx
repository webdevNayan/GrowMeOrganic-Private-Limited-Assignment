import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Checkbox from '@mui/material/Checkbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

type Department = {
  department: string;
  sub_departments: string[];
};

const initialDepartments: Department[] = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

const DepartmentComponent = () => {
  const [open, setOpen] = useState<string | null>(null);

  const handleClick = (department: string) => {
    setOpen(open === department ? null : department);
  };

  const handleSubDepartmentClick = (department: string, subDepartment: string) => {
    // Handle sub-department selection logic
    console.log(`Selected sub-department: ${subDepartment} in department: ${department}`);
  };

  return (
    <List>
      {initialDepartments.map((dept) => (
        <div key={dept.department}>
          <ListItem button onClick={() => handleClick(dept.department)}>
            <ListItemText primary={dept.department.replace('_', ' ')} />
            {open === dept.department ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open === dept.department} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dept.sub_departments.map((subDept) => (
                <ListItem
                  key={subDept}
                  button
                  onClick={() => handleSubDepartmentClick(dept.department, subDept)}
                  style={{ paddingLeft: 20 }}
                >
                  <Checkbox />
                  <ListItemText primary={subDept.replace('_', ' ')} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default DepartmentComponent;
