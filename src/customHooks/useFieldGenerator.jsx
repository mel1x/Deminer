

function useFieldGenerator() {
    const generateField = (minesCount) => {
        const indexesToNullify = getRandomIndexes(minesCount);
        const Field = Array(36).fill("free");
        
        indexesToNullify.forEach(index => {
          if (index < Field.length) {
            Field[index] = "bomb";
          }
        });
        
        return Field;
    }
    
    const getRandomIndexes = (count) => {
      const indexes = [];
      while (indexes.length < count) {
        const randomIndex = Math.floor(Math.random() * 36);
        if (!indexes.includes(randomIndex)) {
          indexes.push(randomIndex);
        }
      }
      return indexes;
    }

    return generateField
}

export default useFieldGenerator