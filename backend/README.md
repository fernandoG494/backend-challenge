# Initial configuration
## Install dependecies
To install the dependencies packages of the project execute:
> npm install 

Or...

> npm i

In the project root

## Run the server
To run the server, execute the next command in the project root
> node ./index.js

# How this API works
The API retrive the data from `src/data/fakedatabase.json` file.
When you initialize the server, the same runs over 
> http://localhost:3100

Is possible to run in another port changing `PORT` value in `index.js` file.

## End points
There are three end-points:

1. Get all contacts: to get all contacts make a `GET` request to `http://localhost:3100/contacts`

2. Get contact by Id: to get a contact by Id make a `GET` request  to `http://localhost:3100/contacts/{id}`. For example: `http://localhost:3100/contacts/d6868d2b-0c80-46fe-91c7-8a444f3c7bb3` to get the next data:

```
{
    "status": 200,
    "contentType": "application/json",
    "message": "OK",
    "contact": {
        "id": "d6868d2b-0c80-46fe-91c7-8a444f3c7bb3",
        "name": "Abdullah Bartell",
        "phone": "(594) 430-9913",
        "addressLines": [
        "97952 Friesen Throughway",
        "Taraside",
        "Norfolk Island"
    ]
}
}
```

3. Delete contact by Id: to delete a contact by Id make a `DELETE` request  to `http://localhost:3100/contacts/{id}`. For example: `http://localhost:3100/contacts/d6868d2b-0c80-46fe-91c7-8a444f3c7bb3` to get the next data:

```
{
  "status": 204,
  "message": "No Content"
}
```
This means that the user was deleted, and don't exist, if we try to get that user, this will be the response:
```
{
  "status": 404,
  "message": "Not found"
}
```

### Contact the API developer
📩 lfgc851@gmail.com
