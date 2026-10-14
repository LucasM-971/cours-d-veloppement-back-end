const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); 


    const tasks = [
        { title: 'Task 1', description: 'Description for Task 1', isDone : false },
        { title: 'Task 2', description: 'Description for Task 2', isDone : true },
        {title: 'Task 3', description: 'Description for Task 3', isDone : false }
    ];


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/some-html', (req, res) => {
    res.send(`<html><body><h1>bonjour html</h1></body></html> `);
});

app.get('/some-json', (req, res) => {
    res.json({ age: 22 ,nom: 'Jane' });
});

app.get('/transaction', (req, res) => {
    res.json([100, 200, 300]);
});

app.get('/get-user/:userId', (req, res) => {
    res.send(`User ID is: ${req.params.userId}`);
});

app.post('/data', (req, res) => {
    req.body;
    console.log(req.body);
    res.json(req.body);
})



app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/new-task', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.send('Task received successfully');
});

app.put('/update-task/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    const updatedTask = req.body;
    tasks[taskId] = updatedTask;
    res.json(updatedTask);
});

app.delete('/delete-task/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    tasks.splice(taskId, 1);
    res.send('Task deleted successfully');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

