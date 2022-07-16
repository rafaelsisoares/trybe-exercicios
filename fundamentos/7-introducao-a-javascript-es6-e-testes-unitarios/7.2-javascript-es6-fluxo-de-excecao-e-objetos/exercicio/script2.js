const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

function addKeysAndValues(obj, key, val) {
  obj[key] = val;
  return obj;
}

const showKeys = (obj) => Object.keys(obj);
const objectSize = (obj) => Object.entries(obj).length;
const showValues = (obj) => Object.values(obj);
const allLessons = new Object();
Object.assign(allLessons, { lesson1 }, { lesson2 }, { lesson3 });
const students = (obj) => {
  let estudantes = 0;
  const subObjects = Object.keys(obj);
  for (let i of subObjects) {
    const subValues = Object.values(obj[i]);
    for (let j of subValues) {
      if (typeof j === "number") {
        estudantes += j;
      }
    }
  }

  return estudantes;
};

const getValueByNumber = (obj, num) => {
    const values = Object.values(obj);
    return values[num];
}

const containsKeyAndValue = (obj, key, val) => {
   if (Object.keys(key) && Object.values(obj).includes(val)) {
    return true;
   } else {
    return false;
   }
}

addKeysAndValues(lesson2, "turno", "noite");
console.log(showKeys(lesson1));
console.log(objectSize(lesson3));
console.log(showValues(lesson2));
console.log(`No total, ${students(allLessons)} estudantes participaram das aulas`);
console.log(getValueByNumber(lesson3, 0));
console.log(containsKeyAndValue(lesson1, 'numeroEstudantes', 'Matemática'));
