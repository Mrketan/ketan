const https = require('https');
const slugs = ['css', 'oracle', 'visualstudio', 'stripe', 'supabase'];
slugs.forEach(slug => {
  https.get(`https://cdn.simpleicons.org/${slug}`, (res) => {
    if (res.statusCode !== 200) console.log(`FAIL: ${slug}`);
    else console.log(`OK: ${slug}`);
  });
});
