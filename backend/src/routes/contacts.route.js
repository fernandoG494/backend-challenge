const express = require('express');
const users = require('../usecases/contacts.usecase.js');
const router = express.Router();

// GET all users
router.get('/', async (request, response) => {
    console.log('GET /contacts');
    try{
        const allUsers = await users.getAllContacts();
        response.json({
            status: 200,
            contentType: "application/json",
            message: 'OK',
            contacts: allUsers,
        });
    }catch(error){
        response.status(error.status || 404);
        response.json({
            error: 500,
            message: error.message
        });
    }
});

// GET user by id
router.get('/:id', async (request, response) => {
    console.log('GET /contacts/id');
    try{
        const { id } = request.params;
        const user = await users.getContactById(id);
        response.json({
            status: 200,
            contentType: "application/json",
            message: 'OK',
            contact: user
        });
    }catch(error){
        response.status(error.status || 404);
        response.json({
            status: error.status,
            message: 'Not found'
        });
    }
});

// DELETE user by id
router.delete('/:id', async(request, response) => {
    console.log(`POST /contacts/id ${request.params.id}`);
    try{
        const { id } = request.params;
        await users.deleteContactById(id);
        response.json({
            status: 204,
            message: 'No Content'
        });
    }catch(error){
        response.status(error.status || 404);
        response.json({
            status: error.status,
            message: 'Not found'
        });
    }
});

module.exports = router;