/** @format */

const drugs = [
  {
    id: 1,
    name: 'Amoxicillin',
    category: 'Antibiotic',
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 120,
    manufacturer: 'Pfizer',
  },
  {
    id: 2,
    name: 'Paracetamol',
    category: 'Analgesic',
    dosageMg: 1000,
    isPrescriptionOnly: false,
    stock: 200,
    manufacturer: 'GSK',
  },
  {
    id: 3,
    name: 'Ibuprofen',
    category: 'Analgesic',
    dosageMg: 400,
    isPrescriptionOnly: false,
    stock: 150,
    manufacturer: 'Bayer',
  },
  {
    id: 4,
    name: 'Chloroquine',
    category: 'Antimalarial',
    dosageMg: 250,
    isPrescriptionOnly: true,
    stock: 80,
    manufacturer: 'Sanofi',
  },
  {
    id: 5,
    name: 'Ciprofloxacin',
    category: 'Antibiotic',
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 70,
    manufacturer: 'Pfizer',
  },
  {
    id: 6,
    name: 'Loratadine',
    category: 'Antihistamine',
    dosageMg: 10,
    isPrescriptionOnly: false,
    stock: 160,
    manufacturer: 'Novartis',
  },
  {
    id: 7,
    name: 'Metformin',
    category: 'Antidiabetic',
    dosageMg: 850,
    isPrescriptionOnly: true,
    stock: 140,
    manufacturer: 'Teva',
  },
  {
    id: 8,
    name: 'Artemether',
    category: 'Antimalarial',
    dosageMg: 20,
    isPrescriptionOnly: true,
    stock: 60,
    manufacturer: 'Roche',
  },
  {
    id: 9,
    name: 'Aspirin',
    category: 'Analgesic',
    dosageMg: 300,
    isPrescriptionOnly: false,
    stock: 180,
    manufacturer: 'Bayer',
  },
  {
    id: 10,
    name: 'Omeprazole',
    category: 'Antacid',
    dosageMg: 20,
    isPrescriptionOnly: true,
    stock: 90,
    manufacturer: 'AstraZeneca',
  },
  {
    id: 11,
    name: 'Azithromycin',
    category: 'Antibiotic',
    dosageMg: 250,
    isPrescriptionOnly: true,
    stock: 50,
    manufacturer: 'Pfizer',
  },
  {
    id: 12,
    name: 'Cetirizine',
    category: 'Antihistamine',
    dosageMg: 10,
    isPrescriptionOnly: false,
    stock: 110,
    manufacturer: 'Novartis',
  },
  {
    id: 13,
    name: 'Insulin',
    category: 'Antidiabetic',
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 30,
    manufacturer: 'Novo Nordisk',
  },
  {
    id: 14,
    name: 'Artemisinin',
    category: 'Antimalarial',
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 50,
    manufacturer: 'GSK',
  },
  {
    id: 15,
    name: 'Codeine',
    category: 'Analgesic',
    dosageMg: 30,
    isPrescriptionOnly: true,
    stock: 20,
    manufacturer: 'Teva',
  },
  {
    id: 16,
    name: 'Vitamin C',
    category: 'Supplement',
    dosageMg: 500,
    isPrescriptionOnly: false,
    stock: 300,
    manufacturer: 'Nature’s Bounty',
  },
  {
    id: 17,
    name: 'Ranitidine',
    category: 'Antacid',
    dosageMg: 150,
    isPrescriptionOnly: false,
    stock: 90,
    manufacturer: 'Sanofi',
  },
  {
    id: 18,
    name: 'Doxycycline',
    category: 'Antibiotic',
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 40,
    manufacturer: 'Pfizer',
  },
  {
    id: 19,
    name: 'Tramadol',
    category: 'Analgesic',
    dosageMg: 50,
    isPrescriptionOnly: true,
    stock: 45,
    manufacturer: 'Teva',
  },
  {
    id: 20,
    name: 'Folic Acid',
    category: 'Supplement',
    dosageMg: 5,
    isPrescriptionOnly: false,
    stock: 250,
    manufacturer: 'Nature’s Bounty',
  },
];

// 1. Get all drugs that are antibiotics
const antibiotics = drugs.filter((drug) => drug.category === 'Antibiotic');
console.log('Antibiotics:', antibiotics);

// 2. Return an array of drug names in lowercase
const drugNamesLowercase = drugs.map((drug) => drug.name.toLowerCase());
console.log('Lowercase names:', drugNamesLowercase);

// 3. Function to get drugs by category
function getDrugsByCategory(category) {
  return drugs.filter((drug) => drug.category === category);
}
console.log('Analgesics:', getDrugsByCategory('Analgesic'));

// 4. Log each drug’s name and its manufacturer
drugs.forEach((drug) => {
  console.log(`${drug.name} is manufactured by ${drug.manufacturer}`);
});

// 5. All drugs that require a prescription
const prescriptionDrugs = drugs.filter((drug) => drug.isPrescriptionOnly);
console.log('Prescription-only drugs:', prescriptionDrugs);

// 6. Array: "Drug: [name] - [dosageMg]mg"
const formattedDrugs = drugs.map(
  (drug) => `Drug: ${drug.name} - ${drug.dosageMg}mg`
);
console.log('Formatted drugs:', formattedDrugs);

// 7. Function: drugs with stock < 50
function lowStockDrugs() {
  return drugs.filter((drug) => drug.stock < 50);
}
console.log('Low stock drugs:', lowStockDrugs());

// 8. Drugs that are not prescription-only
const overTheCounter = drugs.filter((drug) => !drug.isPrescriptionOnly);
console.log('Non-prescription drugs:', overTheCounter);

// 9. Function: count drugs from a manufacturer
function countDrugsByManufacturer(manufacturerName) {
  return drugs.filter((drug) => drug.manufacturer === manufacturerName).length;
}
console.log('Pfizer drug count:', countDrugsByManufacturer('Pfizer'));

// 10. Count how many drugs are Analgesics using forEach()
let analgesicCount = 0;
drugs.forEach((drug) => {
  if (drug.category === 'Analgesic') {
    analgesicCount++;
  }
});
console.log('Analgesic count:', analgesicCount);
