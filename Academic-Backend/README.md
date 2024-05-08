


### Allowing requests without headers during development

Inside config/corsOptions.js, uncomment "|| !origin" part during development

```javascript
 if (
      allowedOrigins.indexOf(origin) !== -1
      //! comment out/remove in production
       || !origin
    )
```

### Adding HOD

Since admin isn't added yet - HOD manages most things.  
You'll need to add an HOD manually.  
🚀 Use a REST API client like Postman/Thunder Client.

Request Method: **POST**  
Request Address: **<http://localhost:3500/staff>**  
Request Body:

```javascript
  {
"name":"...",
"email":"...",
"department":"Computer",
"username":"...",
"password":"...",
"role":"HOD"
  }
```

- ❗Don't forget to fill **"..."** with necessary details instead of leaving it as it is.

#### NOTE

Don't forget to comment out "|| !origin" Inside config/corsOptions.js after development.

```javascript
 if (
      allowedOrigins.indexOf(origin) !== -1
      //! comment out/remove in production
      // || !origin
    )
```
