function slugify(title) {
    if (typeof title !== `string`) {
        throw new TypeError(`title must be a string`);
    }
    let normalized = title.toLowerCase().trim();
    normalized = normalized.replace(/[^\p{L}\p{N}\s-]+/gu, ``);
    normalized = normalized.replace(/\s+/g, ` `);
    const parts = normalized.split(` `).filter(Boolean);
    return parts.join(`-`);
    
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
