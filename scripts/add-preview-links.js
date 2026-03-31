const fs = require('fs');
const path = require('path');

const previewMappings = [
  { slug: 'real-estate', keywords: ['real estate', 'realtor', 'real estate agent', 'property manager'] },
  { slug: 'roofing', keywords: ['roofing', 'roofer', 'roof repair'] },
  { slug: 'hvac', keywords: ['hvac', 'ac repair', 'heating', 'air conditioning', 'furnace'] },
  { slug: 'dentist', keywords: ['dentist', 'dental', 'orthodontist'] },
  { slug: 'landscaping', keywords: ['landscaping', 'landscaper', 'lawn care', 'lawn maintenance'] },
  { slug: 'plumbing', keywords: ['plumbing', 'plumber', 'pipe repair'] },
  { slug: 'accountant', keywords: ['accountant', 'cpa', 'accounting', 'tax prep', 'bookkeeping'] },
  { slug: 'cleaning', keywords: ['cleaning', 'cleaner', 'maid service', 'house cleaning'] },
  { slug: 'auto-repair', keywords: ['auto repair', 'mechanic', 'auto shop', 'car repair'] },
  { slug: 'salon', keywords: ['salon', 'hair stylist', 'spa', 'barber', 'hair salon'] }
];

const contentDirs = [
  path.join(__dirname, '../content/blog'),
  path.join(__dirname, '../content/local'),
  path.join(__dirname, '../content/comparisons')
];

let updatedCount = 0;

contentDirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already linked to a preview page
    if (content.includes('/preview/')) return;

    // Determine the best matching vertical based on filename and content
    let bestMatch = null;
    let matchScore = 0;

    previewMappings.forEach(mapping => {
        let score = 0;
        const lowerTitle = file.toLowerCase();
        const lowerContent = content.toLowerCase();

        mapping.keywords.forEach(kw => {
            if (lowerTitle.includes(kw)) score += 3; // Weight title heavier
            if (lowerContent.includes(kw)) score += 1;
        });

        if (score > matchScore) {
            matchScore = score;
            bestMatch = mapping.slug;
        }
    });

    if (bestMatch && matchScore >= 1) { // High confidence threshold
        const ctaMapping = previewMappings.find(m => m.slug === bestMatch);
        const displayName = ctaMapping.keywords[0].replace(/\b\w/g, l => l.toUpperCase());

        const callToAction = `\n\n### Want to see what Glow Social can do for your ${displayName} business?\n\n[**Get a free, no-login preview of 12 custom posts for your business here.**](/preview/${bestMatch})\n`;
        
        content += callToAction;
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${file} with -> /preview/${bestMatch}`);
        updatedCount++;
    }
  });
});

console.log(`\nDone! Successfully added preview CTAs to ${updatedCount} files.`);
