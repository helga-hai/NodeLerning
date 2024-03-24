const server = require('express')
// Create the server instance
const app = server()
// Define the port
const PORT = 3000

app.use(server.json())

// CRUD operations

// request - запрос - те що нам передав фронт
// response - відповідь - те що ми передаємо на фронт

// Create (INSERT)
app.post(`/items`, function (req, res) {
    console.log('post')
    // request has a body
    res.json(req.body)   
})
// Read (SELECT)
app.get(`/items`, function (req, res) {
    console.log('get', req.headers.host, req.url, req.route.path, req.originalUrl);
    console.log("Browser: " + req.headers["user-agent"]);
    console.log("Language: " + req.headers["accept-language"]);
    res.send('req')   
})
// Update (UPDATE)
app.put(`/items/:id`, function (req, res) {
    console.log(`put ${req.body} to ${req.params}`)
    // request has a body
    res.json('put')   
})
// Delete (DELETE)
app.delete(`/items/:id`, function (req, res) {
    console.log(`delete ${req.params?.id}`)
    res.json('delete')   
})

app.listen(PORT, console.log(`Listening on port ${PORT}....`));