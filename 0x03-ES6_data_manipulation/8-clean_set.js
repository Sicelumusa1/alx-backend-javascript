export default function cleanSet(mySet, startString) {
    const myValues = [...mySet].filter(value => value.startsWith(startString));
    const cleanedString = myValues.join('-');

    return cleanedString;
}
