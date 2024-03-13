interface MajorCredits {
    credits: number;
    brand: "MajorCredits";
}

interface ManorCredits {
    credits: number;
    brand: "ManorCredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return {
        credits: totalCredits,
	brand: "MajorCredits"
    };
}

function sumManorCredits(subject1: ManorCredits, subject2: ManorCredits): ManorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return {
        credits: totalCredits,
        brand: "ManorCredits"
    };
}

