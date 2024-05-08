# KOLLEGE




A College Based Data Management System.

- There are two types of roles: Staff[Teacher,HOD] and Student.

## Login Details

PS: BE KIND :)

### Teacher [staff]

**username:** Delphine  
**pwd:** Delphine123

Teacher can add or edit

- Notes
- Attendance
- Internal Marks
- Time Schedule

### HOD (Head of Department) [staff]

**username:** Moriah  
**pwd:** Moriah123

HOD can do everything Teacher can.  
HOD can also

- Approve new Teacher
- Add New Paper

Student can view

- Notes
- Attendance
- Internal Marks

Attendance and Marks needs to be added by the teacher first.  
Student can also join or leave a Paper(Subject).

## Tech Stack

**Client:** React, TailwindCSS

**Server:** NodeJS, ExpressJS

**Database:** MongoDB, Mongoose

## Other Features

- Profile
- Dark Theme
- Mobile Responsive


Install dependencies:

```bash
  npm install
```

Finally,

```bash
  npm start
```

Then, go to src/config/api/axios.js. change the baseURL to your backend address:

```javascript
baseURL: "http://localhost:3500";
```

```javascript
baseURL: "https://example.address.com";
```

## RoadMap

- Add admin 😴
- Cache Queries
- Paginate Queries
