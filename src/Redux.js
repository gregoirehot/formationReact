import { createStore } from 'redux'

/**
 * Le reducer est une fonction dite "pure" ayant (state, action) => state comme signature.
 * Il va décrire comment une action transforme le state (l'état) de l'application 
 * en un nouvel état.
 * 
 * L'implémentation de l'état de l'application dépend totalement de votre y * use case et peut être une primitive, un tableau, un objet, ou bien même 
 * une structure de données 
 * immutable (basé sur Immutable.js par exemple). 
 * La seule chose à retenir est que cette partie ne DOIT PAS modifier 
 * l'objet correspondant à l'état de l'application lorsque l'état change.
 * Dans cet exemple, on utilise un switch et des strings, mais on pourra *  très bien utiliser un helper qui va suivre une autre manière de faire.
 */

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

// On crée un Redux store, qui va garder l'état de notre app.
// L'api correspond à trois fonctions { subscribe, dispatch, getState }.
let store = createStore(counter)

// On peut s'abonner manuellement ou bien lier l'état à une vue automatique// ment à l'aide du binding. 
store.subscribe(() =>
  console.log(store.getState())
)

// Le seul moyen de modifier l'état de l'application est de dispatcher des actions.
// Les actions peuvent être serialisées, loggées ou sauvegardées pour plus tard.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1