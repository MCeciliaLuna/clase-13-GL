export const _id = [...Array(10)].map(//sin corchetes y sin desestructuración, me devuelve un array de 10 objetos vacíos | con estas cosas, devuelve un array con 10 elementos undefined
(_item, index) => {
   return `UU1D-51MUL4t10n-${index}`
})

export const _name = ['María', 'Cecilia', 'Luna', 'Tomás', 'Gabriel', 'Ester', 'Marcelo', 'Jorge', 'Elsa', 'Silvana']

export const _age = [...Array(10)].map((_item, index) => {
  return 18 + index
})

export const _titles = ['Developer','Teacher','Designer','Doctor','Student','Advocate','Soccer player','Artist','Director','Manager'] //1:39

