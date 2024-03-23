const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port or default to 5000
const formData = [];


app.use(cors()); // Enable CORS for cross-origin requests
app.use(bodyParser.json()); // Parse incoming JSON data

// Define route to handle form submission (replace with your actual logic)
app.post('/submit-form', (req, res) => {
    const { username, password, email } = req.body;
    formData.push({ username, password, email }); // Store data
    console.log('Received and stored form data:', username, password, email);
  
    // ... (rest of your logic)
  
    res.json({ message: 'Form data received successfully!' });
  });
  

  app.get('/get-form-data', (req, res) => {
    res.json(formData);
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
