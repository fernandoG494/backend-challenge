const createError = require('http-errors');
const fs = require('fs');

async function getAllContacts() {
    const data = JSON.parse(fs.readFileSync('src/data/fakedatabase.json', 'utf8'));
    if(!data){
        throw new createError(404, 'Data not found');
    }
    
    const sortedData = data.sort(function(a, b){
        return a.name.localeCompare(b.name);
    });
    
    return sortedData;
};

async function getContactById(id) {
    const data = JSON.parse(fs.readFileSync('src/data/fakedatabase.json', 'utf8'));
    const sortedData = data.sort(function(a, b){
        return a.name.localeCompare(b.name);
    });
    
    const user = sortedData.find((user) => {
        return user.id === id;
    });
    
    if(!user){
        throw new createError(404, 'Not found');
    };
    
    return user;
};

async function deleteContactById(id){
    const data = JSON.parse(fs.readFileSync('src/data/fakedatabase.json', 'utf8'));
    const userToDelete = data.find((user) => {
        return user.id === id;
    });

    const newContent = data.filter(user => 
        user.name !== userToDelete.name
    );

    fs.writeFile('src/data/fakedatabase.json', JSON.stringify(newContent, null, 2), (err) => {
        if(err) throw new createError(err);
        console.log('DB updated');
    })
};

module.exports = {
    getAllContacts,
    getContactById,
    deleteContactById
};