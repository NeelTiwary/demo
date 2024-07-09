import express from 'express'

const app = express()

//get five jokes
    app.get("/api/jokes",(req,res)=>{
       
        const jokes = [
            {
                id: 1,
                title: "Joke 1",
                content: "Why don’t scientists trust atoms? Because they make up everything!"
            },
            {
                id: 2,
                title: "Joke 2",
                content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
            },
            {
                id: 3,
                title: "Joke 3",
                content: "Why don't skeletons fight each other? They don't have the guts."
            },
            {
                id: 4,
                title: "Joke 4",
                content: "What do you call fake spaghetti? An impasta!"
            },
            {
                id: 5,
                title: "Joke 5",
                content: "Why was the math book sad? Because it had too many problems."
            }
        ];
        
    res.send(jokes)

})

app.get('/',(req,res)=>{
    res.send('Server is ready');
});

const port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("Server Suru hoo gaya at "+port);
})