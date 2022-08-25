const server = require('./src/server');
const PORT = 3100;

server.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
});
