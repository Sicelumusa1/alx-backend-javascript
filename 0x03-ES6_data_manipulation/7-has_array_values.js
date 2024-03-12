export default function hasValuesFromArray(mySet, myArray) {
    const newSet = new Set(myArray);

    for (const val of newSet) {
        if (!mySet.has(val)) {
	    return false;
	}
    }

    return true;
}
