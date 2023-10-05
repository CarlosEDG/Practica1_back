const arrayDesordenado = [10, 7, 2, 1, 3, 5, 4, 8, 9, 6]
console.log('Array desordenado:', arrayDesordenado)

function bubbleSort(array: number[]): number[] {
  if (array.length<= 1) return array
  let aux: boolean= false;//aux para saber si he hecho cambios
  array.reduce(() => {
    array.forEach((elem, i) => {
      if (elem > array[i + 1]) {//compruebo si el siguiente elemento es mayor
        [array[i], array[i + 1]] = [array[i + 1], array[i]]//cambiar los valores 
        aux = true
      }
    })
    return null
  }, null)
  if (aux) { //si no hay cambios es que esta ordenado
    return bubbleSort(array.slice(0, -1))
  }
  return array
}

const arrayOrdenado = bubbleSort([...arrayDesordenado])// Clonamos el array para no modificar el original
console.log('Array ordenado:', arrayOrdenado)