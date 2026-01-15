
const parseAcceptable = (val) => {
    const list = Array.isArray(val) ? val : [val];
    let final = [];
    list.forEach(s => {
        // Handle potential non-strings just in case, though data is strings
        const str = String(s);
        // Split by slash
        const parts = str.split('/');
        parts.forEach(p => {
            const trimmed = p.trim();
            if (trimmed) {
                final.push(trimmed);
                // Also allow version without parentheses
                if (trimmed.includes('(')) {
                    final.push(trimmed.replace(/\s*\(.*?\)/g, '').trim());
                }
            }
        });
    });
    return [...new Set(final)];
};

const input = "Very good/Very well";
const result = parseAcceptable(input);
console.log("Input:", input);
console.log("Result:", JSON.stringify(result));

const input2 = ["My name is", "I call myself"];
const result2 = parseAcceptable(input2);
console.log("Input2:", JSON.stringify(input2));
console.log("Result2:", JSON.stringify(result2));

const check = (acceptable, userVal) => acceptable.some(a => a.toLowerCase() === userVal.toLowerCase());

console.log("Check 'Very good':", check(result, "Very good"));
console.log("Check 'very well':", check(result, "very well"));
