import { Action } from "./ngrx-fake/ngrx";
import {
    incrementadorAction,
    multiplicarAction,
    decrementadorAction,
    dividirAction,
    resetAction
} from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reducer";

console.log( contadorReducer(10, incrementadorAction) ); // 11
console.log( contadorReducer(10, decrementadorAction) ); // 9
console.log( contadorReducer(10, multiplicarAction) ); // 20
console.log( contadorReducer(10, dividirAction) ); // 5
console.log( contadorReducer(10, resetAction) ); // 0
