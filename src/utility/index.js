/**
 * Remove occurrences of the given characters from the beginning and the end of the
 * given string.
 *
 * @example
 * trim('---Hello, world!!---'); // Outputs 'Hello, world!!'
 *
 * @param {string} text The string to trim
 * @param {string[]} characters One or more characters to be removed
 * @returns {*}
 */
export const trim = (text, ...characters) => (
    text.replace(new RegExp(`^(${characters.join('|')})+|(${characters.join('|')})+$`, 'g'), '')
);

/**
 * Replace all special characters (i.e. non-alphanumeric characters) in the given string
 * with the given delimiter.
 *
 * @example
 * slugify('Hello, world!!'); // Outputs 'hello-world'
 *
 * @see https://stackoverflow.com/questions/4357007/what-does-slug-mean
 * @param {string} str A string with special characters
 * @param {string} delimiter The character to replace the special characters with
 * @return {string}
 */
export const slugify = (str, delimiter = '-') => (
    trim(str.toLowerCase().replace(/[\W]+/g, delimiter), '-')
);