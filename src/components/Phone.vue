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
                    <button class="number-button" @click="good2">2</button>
                </li>
                <li class="number-item">
                    <button class="number-button" @click="good3">3</button>
                    <hr class="number-t">
                </li>
                <li class="number-item">
                    <button class="number-button" @click="good4">4</button>
                </li>
                <li class="number-item">
                    <button class="number-button" @click="good5">5</button>
                </li>
                <li class="number-item">
                    <button class="number-button" @click="good6">6</button>                   
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
                
                    <th v-for="(phone, index) in dateList=phones.slice(0,n)" :key="index">
                    <div class="show-phone">
                        <div >
                        <img :src="phone.titleImg" alt="phone" class="phone-image">
                        <a href=""><img src="./images/chevron_small.png" alt="chevron" class="chevron-image"/></a>
                       </div>
                        <div>{{phone.title}}</div>
                    </div>
                </th>              
                     
            </tr>
            
        </thead>

        <tbody>
                <tr> 
                <td class="products-rows">Производитель</td>                                  
                       <td class="info-rows" v-for="(phone, index) in dateList=phones.slice(0,n)" :key="index">{{phone.company}}</td>
                              
                </tr>               

                <tr> 
                <td class="products-rows"> год релиза</td>              
                <td class="info-rows" v-for="(phone, index) in dateList=phones.slice(0,n)" :key="index">{{phone.year}}</td>
                </tr>
                <tr>
                <td class="products-rows"> Диагональ экрана (дюйм)</td> 
                <td class="info-rows" v-for="(phone, index) in dateList=phones.slice(0,n)" :key="index">{{phone.diagonal}}</td>
                </tr>
                <tr>
                    <td class="products-rows">Страна-производитель</td> 
                    <td class="info-rows" v-for="(phone, index) in dateList=phones.slice(0,n)" :key="index">{{phone.country}}</td>
                </tr>
                <tr>
                    <td class="products-rows">Объем памяти</td> 
                    <td class="info-rows" v-for="(phone, index) in dateList=phones.slice(0,n)" :key="index">{{phone.memory}} Гб</td>
                </tr>

                <tr class="fr-screen" v-if="visible">
                    <td class="products-rows">Частота обновления экрана</td> 
                    <td class="info-rows" v-for="(phone, index) in dateList=phones.slice(0,n)" :key="index">{{phone.fscreen}} Гц</td>
                </tr>

                <tr>
                    <td class="products-rows">NFC</td> 
                    <td class="info-rows" v-for="(phone, index) in dateList=phones.slice(0,n)" :key="index"><img :src="phone.NFC"></td>
                </tr>

                <tr v-show="visible">
                    <td class="products-rows"> Поддержка eSIM</td> 
                    <td class="info-rows" v-for="(phone, index) in dateList=phones.slice(0,n)" :key="index"><img :src="phone.ESIM"></td>
                </tr>

                <tr>
                    <td class="products-rows">Поддержка беспроводной зарядки</td> 
                   <td class="info-rows" v-for="(phone, index) in dateList=phones.slice(0,n)" :key="index"><img :src="phone.wcharger"></td>
                </tr>
                <tr>
                    <td class="products-rows">Стоимость</td> 
                    <td class="info-rows" v-for="(phone, index) in dateList=phones.slice(0,n)" :key="index">{{phone.price}}</td>    
                </tr>
            
            </tbody>
                </table> 
    
            </div>
            <button class="hid" @click="hide">Скрыть</button>
           
            <!-- <button class="hid" @click="page1">Лист-1</button>
            <button class="hid" @click="page2">Лист-1</button> -->
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
                     //{title:'', company:"ПРОИЗВОДИТЕЛЬ", year: "ГОД РЕЛИЗА", dioganal:"ДИАГОНАЛЬ ЭКРАНА (ДЮЙМ)", memory: "" ,fscreen: 60, NFC: 0, ESIM: 1, wcharger: 1,  price: 81990},
                      {title:'Apple iPhone 12', titleImg:'./src/components/images/image 16.png',company:'Apple', year: 2020, diagonal: 6.1, country: "Китай", memory: 128 ,fscreen: 60, NFC: './src/components/images/Subtract0.png', ESIM: './src/components/images/Subtract1.png', wcharger: './src/components/images/Subtract1.png',  price: 81990},
                      {title:'Xiaomi Mi 11 Lite', titleImg:'./src/components/images/Xiaomi Mi 11 Lite 1.png', company:'Xiaomi', year: 2021, diagonal: 6.55, country: "Китай", memory: 128 ,fscreen: 90, NFC: './src/components/images/Subtract1.png', ESIM: './src/components/images/Subtract1.png', wcharger: './src/components/images/Subtract0.png',  price: 27490}, 
                      {title:'Samsung Galaxy A72', titleImg:'./src/components/images/A72 1.png', company:'Samsung', year: 2021, diagonal: 6.7, country: "Вьетнам", memory: 128 ,fscreen: 90, NFC: './src/components/images/Subtract1.png', ESIM: './src/components/images/Subtract0.png', wcharger: './src/components/images/Subtract1.png',  price: 32890}
              ],
              visible: true,
        } 
        
              },
              methods: {
	    hide: function() {
		//this.visible = false;
        this.visible = !this.visible;
	},
    good2(){
       this.n=2;
    },
    good3(){
       this.n=3;
    },
    good4(){
       this.n=4;
    },
    good5(){
       this.n=5;
    },
    good6(){
       this.n=5;
    },
    
    dateList: function(phones){
         return this.phones.slice(0,1);
   
},
computed:{
    dateList: function(){
        this.phones=  this.phones.slice(0,1);
    },
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

.number-button{
border: none;
 background: none; 
 color: #0D5ADC;
 font-size: 18px;
 padding: 0;
 
}

.number-button :active { 
    text-decoration: underline; 
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