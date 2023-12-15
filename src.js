const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const serviceAccount = require('path/to/your/serviceAccountKey.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-project-id.firebaseio.com'
});

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Endpoint to handle registration data
app.post('/register', (req, res) => {
    const registrationData = req.body;

    // Save registration data to your database (you can use Firestore or Realtime Database)
    // For example, using Realtime Database:
    const database = admin.database();
    const registrationsRef = database.ref('registrations');

    registrationsRef.push(registrationData);

    res.status(200).send('Registration data saved successfully!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
