<template>
    
    <section class="products" id="products" >
        <div class="container">
            
            <div class="container-title">
                <ul class="show-products">
                <li class="phone-item">
                    <div class="product-title">Смартфоны</div>
             </li>
              <li class="show-item">
                  <div class="show-products">Отобразить товары:</div>
              </li>
              </ul>
         <ul class="show-number">
                
                <li class="number-item">
                    <a data-link="products-quantity-2">2</a>
                </li>
                <li class="number-item">
                    <a data-link="products-quantity-2">3</a>
                    <hr class="number-t">
                </li>
                <li class="number-item">
                    <a data-link="products-quantity-2">4</a>
                </li>
                <li class="number-item">
                    <a data-link="products-quantity-2">5</a>
                </li>
                <li class="number-item">
                    <a data-link="products-quantity-2">6</a>
                </li>
            </ul>

              </div>
              <table class="phone-table">
                
                <thead>
                <tr> 
                <th>
                    <div class="show-difference">
                    <input type="checkbox" name="a" value="1417">Показать различия
                 </div>
                </th> 
                <th>
                    <div class="show-phone">
                        <div >
                        <img src="./images/image 16.png" alt="phone" class="phone-image">
                        <a href=""><img src="./images/chevron_small.png" alt="chevron" class="chevron-image"/></a>
                       </div>
                        <div>Apple iPhone 12</div>
                    </div>
                </th> 
                

           
                <th>
                    <div class="show-phone">
                        <div>
                        <img src="./images/Xiaomi Mi 11 Lite 1.png" alt="phone" class="phone-image">
                        <a href=""><img src="./images/chevron_small.png" alt="chevron" class="chevron-image"/></a>
                       </div>
                        <div>Xiaomi Mi 11 Lite</div>
                    </div> 
                </th> 
                <th>
                    <div class="show-phone">
                        <div>
                        <img src="./images/A72 1.png" alt="phone" class="phone-image">
                        <a href="" ><img src="./images/chevron_small.png" alt="chevron" class="chevron-image" /></a>                       
                       </div>                       
                       <div>Samsung Galaxy A72</div> 
                    </div>
                </th> 
           
            </tr>
            
        </thead>

        <tbody>
                <tr> 
                <td class="products-rows">Производитель</td>  
                <template v-for="(phone, index) in phones" :key="index">
                    <td class="info-rows" v-if="index < n">{{phone.company}}</td>    
                </template>    

                <!-- <td class="info-rows" v-for="(phone, index) in phones.slice(0,n)" :key="index">{{phone.company}}  {{ index}} </td>  -->
                </tr>               

                <tr> 
                <td class="products-rows"> год релиза</td> 
                <td class="info-rows" v-for="phone in phones">{{phone.year}}</td>      

                </tr>
                <tr>
                <td class="products-rows"> Диагональ экрана (дюйм)</td> 
                <!-- <td class="info-rows" v-for="phone in phones">{{phone.diagonal}}</td>   -->
                
                <!-- <td class="info-rows" v-for="(phone, index) in dateList" :key="index">{{phone.diagonal}}  </td> -->
                
                <td class="info-rows" v-for="(phone, index) in phones.slice(0,n)" :key="index">{{phone.diagonal}}  </td>
                </tr>
                <tr>
                    <td class="products-rows">Страна-производитель</td> 
                    <td class="info-rows" v-for="phone in phones">{{phone.country}}</td>   
                    
                </tr>
                <tr>
                    <td class="products-rows">Объем памяти</td> 
                    <td class="info-rows" v-for="phone in phones">{{phone.memory}}</td>   
                    
                </tr>

                <tr class="fr-screen" v-if="visible">
                    <td class="products-rows">Частота обновления экрана</td> 
                    <td class="info-rows" v-for="phone in phones">{{phone.fscreen}}</td>   
                    
                </tr>

                <tr>
                    <td class="products-rows">NFC</td> 
                    <td class="info-rows" v-for="phone in phones">{{phone.NFC}}</td>   
                    
                </tr>

                <tr v-show="visible">
                    <td class="products-rows"> Поддержка eSIM</td> 
                    <td class="info-rows" v-for="phone in phones">{{phone.ESIM}}</td>   
                    
                </tr>

                <tr>
                    <td class="products-rows">Поддержка беспроводной зарядки</td> 
                    <td class="info-rows" v-for="phone in phones">{{phone.wcharger}}</td>   
                    
                </tr>
                <tr>
                    <td class="products-rows">Стоимость</td> 
                    <td class="info-rows" v-for="phone in phones">{{phone.price}}</td>                       
                </tr>
            
            </tbody>
                </table> 
    
            </div>
            <button class="hid" @click="hide">Скрыть</button>
            <!-- <button class="hid" @click="updateList">Обновить</button>
            <button class="hid" @click="updateList2">Обновить_2</button> -->
            <button class="hid" @click="page1">Лист-1</button>
            <button class="hid" @click="page2">Лист-1</button>
            <!-- <input class="hid" v-model="start" type="number" />
            <input class="hid" v-model="end" type="number" /> -->
    </section>

</template>
<script>

export default {
		
        data() {
          return { 
            start:0,
            end:3,
            n:3,
              phones: [
                     //{title:'', company:"ПРОИЗВОДИТЕЛЬ", year: "ГОД РЕЛИЗА", dioganal:"ДИАГОНАЛЬ ЭКРАНА (ДЮЙМ)", memory: "" ,fscreen: '60 Гц', NFC: 0, ESIM: 1, wcharger: 1,  price: 81990},
                      {title:'Apple iPhone 12', company:'Apple', year: 2020, diagonal: 6.1, country: "Китай", memory: '128 Гб' ,fscreen: '60 Гц', NFC: 0, ESIM: 1, wcharger: 1,  price: 81990},
                      {title:'Xiaomi Mi 11 Lite', company:'Xiaomi', year: 2021, diagonal: 6.55, country: "Китай", memory: '128 Гб' ,fscreen: '90 Гц', NFC: 1, ESIM: 1, wcharger: 0,  price: 27490}, 
                      {title:'Samsung Galaxy A72', company:'Samsung', year: 2021, diagonal: 6.7, country: "Вьетнам", memory: '128 Гб' ,fscreen: '90 Гц', NFC: 1, ESIM: 0, wcharger: 1,  price: 32890}
              ],
              visible: true,
        } 
        
              },
              methods: {
	    hide: function() {
		//this.visible = false;
        this.visible = !this.visible;
	},
    page1: function(){
       this.n=1;
    },

    page2: function(){
       this.n=3;
    },
    
    dateList: function(){
        return this.phones = this.phones.slice(0,n)
   
},
computed:{
    visibleList(){
        return this.phones.slice(this.start,this.end);
    }
            }
        }
    }
</script>
<style>
.container-title{
    
    padding-left: 0;
    display: flex;
    
}
.show-products{
    
    display: flex;
    list-style-type: none;  
    padding-left: 0;
    font-family: Roboto;
    margin-top: 10px;


}
.show-number{
    display: flex;
    list-style-type: none;
    font-family: Roboto;
    margin-top: 20px;
    margin-left: 0;
    padding-left: 0;
   }

.phone-item{

    font-size: 48px;
    font-weight: 700;
    margin-top: 52px;
    margin-left: 166px;
    /*margin-right: 100px;*/
    /*margin-bottom: 41px;*/
    color:#828286;
    
}

.show-item{
    color: #0D5ADC;
    font-weight: 400;
    font-size: 18px;
    margin-left: 567px;
    margin-right: 4px;
    margin-top: 61px;
}
.number-item{
    color: #0D5ADC;
    font-size: 18px;
    font-weight: 400;
    margin-left: 4px;
    margin-top: 61px;
}

.number-t{
margin-top: 0;
}
.phone-table {
	margin-left: 165px;
    margin-top: 0;
	border: none;
	
    font-family: Roboto;
    width: 1110px;
}

.phone-table thead th{
    border-bottom: 1px solid #CDCFD2;
    height: 266px;
    margin-left: 0;
    
}

.phone-table tbody td{
    
    border-bottom: 1px solid #CDCFD2;
    font-size: 18px;
    height: 89px;
    
}

.products-rows{
    
    color: #A4A9B9;
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;
}
.info-rows{
    
    color: #3B4157;
    font-weight: 500;
    text-align: center;
}

.show-difference{
    color: #0D5ADC;
    text-align: left;
    font-weight: 400;
    margin-top: 120px;
}

.show-phone{
    color: #3B4157;
    font-weight: 500;
}
.chevron-image{
    margin-bottom: 10px;
}

/* .fr-screen{
    display: none;
} */
.hid{
    margin-top: 50px;
    margin-left: 200px;
    height: 50px;
    width: 20%;
    font-size: 20px;
}
</style>