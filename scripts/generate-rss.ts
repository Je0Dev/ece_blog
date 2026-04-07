import fs from 'fs';
import path from 'path';
import { JOURNAL_ENTRIES } from '../src/data/entries';

const generateRSS = () => {
  const siteUrl = 'https://je0dev.github.io/ece-blog';
  
  const rssItems = JOURNAL_ENTRIES.map(entry => `
    <item>
      <title><![CDATA[${entry.title}]]></title>
      <link>${siteUrl}/journal/${entry.id}</link>
      <guid>${siteUrl}/journal/${entry.id}</guid>
      <pubDate>${new Date(entry.date).toUTCString()}</pubDate>
      <description><![CDATA[${entry.excerpt}]]></description>
      <category><![CDATA[${entry.category}]]></category>
      <category><![CDATA[${entry.type}]]></category>
      ${entry.tech ? entry.tech.map(t => `<category><![CDATA[${t}]]></category>`).join('') : ''}
    </item>
  `).join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>George's Garden</title>
    <link>${siteUrl}</link>
    <description>A digital garden of projects, learning notes, and ideas.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${rssItems}
  </channel>
</rss>`;

  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
  
  fs.writeFileSync(path.join(publicDir, 'rss.xml'), rssFeed);
  console.log('RSS feed generated successfully at public/rss.xml');
};

generateRSS();
