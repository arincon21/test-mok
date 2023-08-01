export const deleteArray = (array, index) => {
    if (index >= 0 && index < array.length) {
        array.splice(index, 1);
        return array
    } else {
        console.error("Índice fuera de rango o inválido.");
    }
}