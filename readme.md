# Crud Application with Ember

## Description

Application build with:
* Ember version 1.13.15;

Actions that can be made:
* View all users, all posts that belongs to one user;
* Create, delete, edit a user;
* Form validation for create new user (touch), and for edit a user;
* Create, delete a post that is related to a user;
* Pop-up modal for delete a user confirmation; 
* Search users;
* Sort users;
* Pagination;
* Compare users (messages for add/remove users are also included);

__Screenshot__
![alt text](https://raw.githubusercontent.com/AndreiGolopenta/ember/master/public/assets/screenshots/s1.png)
![alt text](https://raw.githubusercontent.com/AndreiGolopenta/ember/master/public/assets/screenshots/s2.png)
![alt text](https://raw.githubusercontent.com/AndreiGolopenta/ember/master/public/assets/screenshots/s3.png)
![alt text](https://raw.githubusercontent.com/AndreiGolopenta/ember/master/public/assets/screenshots/s4.png)


## Requirements
* JSON Server

### JSON Server
Install JSON Server : 
```cli
npm install -g json-server
```

## Project Dependencies
`npm install`

## Running the project
```cli
json-server --watch db.json
```
```cli
ember s
```
```