# University Management System Authentication Service

This is the documentation for the Authentication Service component of the University Management System. The Authentication Service provides authentication and authorization functionalities for the three main roles in the system: Admin, Student, and Faculty. It is built using TypeScript, Express.js, Zod validation, and MongoDB.

## Functional Requirements

### Student

- Student can login and log out.
- Student can manage and update their profile.
- Student can update certain fields.

### Admin

- Admin can log in and log out.
- Admin can manage and update their profile.
- Admin can only update certain fields.
- Admin can manage user accounts:
  - Change Password

### Faculty

- Faculty can log in and log out.
- Faculty can manage and update their profile.
- Faculty can only update certain fields.

## API Endpoints

### User

- `POST /users/create-student`
- `POST /users/create-faculty`
- `POST /users/create-admin`

### Student

- `GET /students`
- `GET /students?searchTerm=fr797`
- `GET /students?page=1&limit=10&sortBy=gender&sortOrder=asc`
- `GET /students/:id`
- `PATCH /students/:id`
- `DELETE /students/:id`

### Faculty

- `GET /faculties`
- `GET /faculties?searchTerm=john`
- `GET /faculties?page=1&limit=10&sortBy=gender&sortOrder=asc`
- `GET /faculties/:id`
- `PATCH /faculties/:id`
- `DELETE /faculties/:id`

### Admin

- `GET /admins`
- `GET /admins?searchTerm=us88`
- `GET /admins?page=1&limit=10&sortBy=gender&sortOrder=asc`
- `GET /admins/:id`
- `PATCH /admins/:id`
- `DELETE /admins/:id`

### Academic Semester

- `POST /semesters/create-semester`
- `GET /semesters`
- `GET /semesters?searchTerm=fal`
- `GET /semesters?page=1&limit=10&sortBy=year&sortOrder=asc`
- `GET /semesters/:id`
- `PATCH /semesters/:id`
- `DELETE /semesters/:id`

### Academic Department

- `POST /departments/create-department`
- `GET /departments`
- `GET /departments?searchTerm=math`
- `GET /departments?page=1&limit=10&sortBy=title&sortOrder=asc`
- `GET /departments/:id`
- `PATCH /departments/:id`
- `DELETE /departments/:id`

### Academic Faculty

- `POST /aca-faculties/create-faculty`
- `GET /aca-faculties`
- `GET /aca-faculties?searchTerm=com`
- `GET /aca-faculties?page=1&limit=10&sortBy=title&sortOrder=asc`
- `GET /aca-faculties/:id`
- `PATCH /aca-faculties/:id`
- `DELETE /aca-faculties/:id`

### Management Department

- `POST /management-dept/create-management`
- `GET /management-dept`
- `GET /faculties?searchTerm=com`
- `GET /management-dept?page=1&limit=10&sortBy=title&sortOrder=asc`
- `GET /management-dept/:id`
- `PATCH /management-dept/:id`
- `DELETE /management-dept/:id`

### Authentication

- `POST /auth/login`
- `POST /auth/change-password`
- `POST /auth/refresh-token`

Postman Documentation: [Click Here](https://documenter.getpostman.com/view/)
