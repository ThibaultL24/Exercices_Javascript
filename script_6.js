const geneticCode = {
    'UCU': 'Sérine', 'UCC': 'Sérine', 'UCA': 'Sérine', 'UCG': 'Sérine',
    'AGU': 'Sérine', 'AGC': 'Sérine', 'CCU': 'Proline', 'CCC': 'Proline',
    'CCA': 'Proline', 'CCG': 'Proline', 'UUA': 'Leucine', 'UUG': 'Leucine',
    'UUU': 'Phénylalanine', 'UUC': 'Phénylalanine', 'CGU': 'Arginine',
    'CGC': 'Arginine', 'CGA': 'Arginine', 'CGG': 'Arginine', 'AGA': 'Arginine',
    'AGG': 'Arginine', 'UAU': 'Tyrosine', 'UAC': 'Tyrosine'
};

function translateRNA(rna) {
    let aminoAcids = [];
    for (let i = 0; i < rna.length; i += 3) {
        const codon = rna.slice(i, i + 3);
        if (geneticCode[codon]) {
            aminoAcids.push(geneticCode[codon]);
        } else {
            aminoAcids.push('Inconnu');
        }
    }
    return aminoAcids.join('-');
}

const rna1 = "CCGUCGUUGCGCUACAGC";
const rna2 = "CCUCGCCGGUACUUCUCG";

console.log("ARN 1:", translateRNA(rna1));
console.log("ARN 2:", translateRNA(rna2));
