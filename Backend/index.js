const express = require('express');
const { createSchema } = require('./types');
const { auth } = require('./db'); // Assuming your model is exported as auth
const cors = require ("cors");
const app = express();
app.use(express.json());
app.use(cors())
app.post('/signup', async (req, res) => {
    const schema = req.body;
    const parseSchema = createSchema.safeParse(schema);

    if (!parseSchema.success) {
        return res.status(400).json({
            msg: "Invalid input"
        });
    }

    const { username, email, password } = req.body; 

    try {
        await auth.create({
            username: username,
            email: email,
            password: password
        });

        res.json({
            msg: "User created successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            msg: "Internal server error"
        });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
