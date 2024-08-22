const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = 80;

// Initialize Supabase client
const supabase = createClient('https://byhvjfuafvkhbjxirfbm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5aHZqZnVhZnZraGJqeGlyZmJtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNDYzOTEwMSwiZXhwIjoyMDIwMjE1MTAxfQ.R8WfTmRyBJ63FGnC-AszT8_0sBKCam9ucsF4yU7aX-A');

// Middleware to parse JSON bodies
app.use(express.json());

// Set up multer for file uploads
const storage = multer.memoryStorage(); // Use memory storage instead of disk storage
const upload = multer({ storage });

// Endpoint to handle file uploads
app.post('/upload', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const { computerId, profileName, fileType } = req.body;

    if (!computerId || !profileName) {
        return res.status(400).send('computerId and profileName are required.');
    }

    // Determine the upload path in Supabase Storage
    const filePath = `${computerId}/${profileName}/${fileType}/${req.file.originalname}`;

    try {
        // Upload file to Supabase Storage
        const { data, error } = await supabase
            .storage
            .from('your_bucket_name')
            .upload(filePath, req.file.buffer, {
                contentType: req.file.mimetype,
            });

        if (error) {
            throw error;
        }

        res.send(`File uploaded successfully: ${req.file.originalname}`);
    } catch (error) {
        res.status(500).send(`Error uploading file: ${error.message}`);
    }
});

// Endpoint to handle error messages
app.post('/error', (req, res) => {
    const { computerId, error } = req.body;
    if (!computerId || !error) {
        return res.status(400).send('computerId and error are required.');
    }

    // Log the error to the console
    console.error(`Error from computerId ${computerId}: ${error}`);

    // Optionally, write the error to a log file
    const logMessage = `Error from computerId ${computerId}: ${error}\n`;
    fs.appendFileSync('error.log', logMessage);

    res.send('Error message received.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
