import { createStore } from "vuex" 

const store = createStore({
   state:{
      phones: [
         //{title:'', company:"ПРОИЗВОДИТЕЛЬ", year: "ГОД РЕЛИЗА", dioganal:"ДИАГОНАЛЬ ЭКРАНА (ДЮЙМ)", memory: "" ,fscreen: '60 Гц', NFC: 0, ESIM: 1, wcharger: 1,  price: 81990},
          {title:'Apple iPhone 12', company:'Apple', year: 2020, diagonal: 6.1, country: "Китай", memory: '128 Гб' ,fscreen: '60 Гц', NFC: 0, ESIM: 1, wcharger: 1,  price: 81990},
          {title:'Xiaomi Mi 11 Lite', company:'Xiaomi', year: 2021, diagonal: 6.55, country: "Китай", memory: '128 Гб' ,fscreen: '90 Гц', NFC: 1, ESIM: 1, wcharger: 0,  price: 27490}, 
          {title:'Samsung Galaxy A72', company:'Samsung', year: 2021, diagonal: 6.7, country: "Вьетнам", memory: '128 Гб' ,fscreen: '90 Гц', NFC: 1, ESIM: 0, wcharger: 1,  price: 32890}
  ],
   }
})

export default store