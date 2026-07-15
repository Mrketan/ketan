const https = require('https');

const slugs = [
  'php', 'codeigniter', 'wordpress', 'woocommerce', 'react', 'javascript',
  'mysql', 'swagger', 'razorpay', 'cashapp', 'git', 'bootstrap', 'html5',
  'css3', 'elementor', 'googlesearchconsole', 'java', 'jquery', 'reactrouter',
  'typescript', 'tailwindcss', 'framer', 'redis', 'socketdotio', 'composer',
  'npm', 'nodedotjs', 'postman', 'visualstudiocode', 'nginx', 'jira', 'json',
  'databricks', 'apachespark', 'fivetran', 'plaid', 'phonepe', 'paytm',
  'auth0', 'lighthouse', 'jsonwebtokens', 'okta', 'spring', 'openjdk',
  'kubernetes', 'cssmodules'
];

slugs.forEach(slug => {
  https.get(`https://cdn.simpleicons.org/${slug}`, (res) => {
    if (res.statusCode !== 200) {
      console.log(`FAIL: ${slug} (${res.statusCode})`);
    } else {
      console.log(`OK: ${slug}`);
    }
  }).on('error', (e) => {
    console.error(`ERROR: ${slug} - ${e.message}`);
  });
});
