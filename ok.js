const express = require('express');
const app = express();

app.get('/set_cookie', (req, res) => {
  // Base64 string of 1px transparent PNG
  const base64Image = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=';
  
  // Convert base64 to buffer
  const imageBuffer = Buffer.from(base64Image, 'base64');

  // Get uid from query, body, or however you're passing it
  const uid = req.query.uid || req.body?.uid || 'default_uid';

  // Set cookie
  res.cookie('uid', uid, {
    maxAge: 3600000, // 1 hour in milliseconds
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // use secure in production
    sameSite: 'lax'
  });

  // Set content type and send image
  res.type('image/png').send(imageBuffer);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});   
