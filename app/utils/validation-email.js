export default function validationEmail(value) {
    const regexp = /^\w+(\.|_)?\w+@\w+\.(com|net|org|ro)$/i;
    return regexp.test(value);
}
