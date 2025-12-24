const express = require('express');
const app = express();
app.use(express.json());


const posts=[];

app.get('/', (req, res) => {
    res.json(posts);
});


app.post('/post', (req, res) => {
    const post = req.body;
    posts.push(post);
    res.json('Post created');
});

app.get('/post/:id', (req, res) => {
    const id = req.params.id;
    const post = posts.find(p => p.id == id);
    if (post) {
        res.json(post);
    }else {
        res.json('Post not found');
    }
})

// post comment 
app.post('/post/:id/comment', (req, res) => {
    const id = req.params.id;
    const comment = req.body.comment;
    const post = posts.find(p => p.id == id);
    if (post) {
        if (!post.comments) {
            post.comments = [];
        }
        post.comments.push(comment);
        res.json('Comment added');
    } else {
        res.json('Post not found');
    }
});


app.get('/post/:id/comments', (req, res) => {
    const id = req.params.id;
    const post = posts.find(p => p.id == id);
    if (post) {
        res.json(post.comments || []);
    }
    else {
        res.json('Post not found');
    }});




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
