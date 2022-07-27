const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(vetor) {
    const counterA = vetor.reduce((counter, item) => 
        counter + item.split('').reduce((count, letter) => {
            (letter.toLowerCase() === 'a') ? count += 1 : count;
            return count
        }, 0), 0);
        
        return counterA;
    }
    


console.log(containsA(names));