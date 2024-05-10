



<template>

    <section class="products" id="products">
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
                        <hr v-show=vis2 class="number-t">
                    </li>
                    <li class="number-item">
                        <button class="number-button" @click="good3">3</button>
                        <hr v-show=vis3 class="number-t">
                    </li>
                    <li class="number-item">
                        <button class="number-button" @click="good4">4</button>
                        <hr v-show=vis4 class="number-t">
                    </li>
                    <li class="number-item">
                        <button class="number-button" @click="good5">5</button>
                        <hr v-show=vis5 class="number-t">
                    </li>
                    <li class="number-item">
                        <button class="number-button" @click="good6">6</button>
                        <hr v-show=vis6 class="number-t">
                    </li>
                </ul>

            </div>
         
            <table class="phone-table">

                <thead class="phone-thead">
                    <tr>
                        <th>
                            <div class="show-difference">
                                <input type="checkbox" @click="hide">Показать различия
                            </div>
                        </th>

                        <th class="show-phone-head" v-for="(phone, index) in dateList=phones.slice(0, n)" :key="index"  >
                            <div class="show-phone">
                                <div>
                                      <img :src="phone.titleImg" alt="phone" class="phone-image">
                                                                      
                                      <ElsePhone :phones="phones" class="elsePhone" @showEF="funcEF"/>   
                                </div> 
                                <div>{{ phone.title }}</div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <User @show="func" />
               
                <tbody>
                    <tr v-if="!hideCompany">
                        <td class="products-rows">Производитель</td>
                        <td class="info-rows" v-for="(phone, index) in dateListCompany=phones.slice(0, n)" :key="index">
                            {{ phone.company }}</td>
                    </tr>

                    <tr v-if="!hideYear">
                        <td class="products-rows"> год релиза</td>
                        <td class="info-rows" v-for="(phone, index) in dateListYear=phones.slice(0, n)" :key="index">
                            {{ phone.year }}</td>
                    </tr>

                    <tr v-if="!hideDiagonal">
                        <td class="products-rows"> Диагональ экрана (дюйм)</td>
                        <td class="info-rows" v-for="(phone, index) in dateListDiagonal=phones.slice(0, n)"
                            :key="index">
                            {{ phn=phone.diagonal }}</td>
                        <td class="info-rows" v-for="(phone) in dateScreen">{{ phone }}</td>
                    </tr>

                    <tr v-if="!hideCountry">
                        <td class="products-rows">Страна-производитель</td>
                        <td class="info-rows" v-for="(phone, index) in dateListCountry=phones.slice(0, n)" :key="index">
                            {{ phone.country }}</td>
                    </tr>

                    <tr v-if="!hideMemory">
                        <td class="products-rows">Объем памяти</td>
                        <td class="info-rows" v-for="(phone, index) in dateListMemory=phones.slice(0, n)" :key="index">
                            {{ phone.memory }} Гб</td>
                    </tr>

                    <tr class="fr-screen" v-if="!hideFscreen">
                        <td class="products-rows">Частота обновления экрана</td>
                        <td class="info-rows" v-for="(phone, index) in dateListFscreen=phones.slice(0, n)" :key="index">
                            {{ phone.fscreen }} Гц</td>
                    </tr>

                    <tr v-if="!hideNFC">
                        <td class="products-rows">NFC</td>
                        <td class="info-rows" v-for="(phone, index) in dateListNFC=phones.slice(0, n)" :key="index"><img
                                :src="phone.NFC"></td>
                    </tr>

                    <tr v-if="!hideESIM">
                        <td class="products-rows"> Поддержка eSIM</td>
                        <td class="info-rows" v-for="(phone, index) in dateListESIM=phones.slice(0, n)" :key="index">
                            <img :src="phone.ESIM"></td>
                    </tr>

                    <tr v-if="!hideWcharge">
                        <td class="products-rows">Поддержка беспроводной зарядки</td>
                        <td class="info-rows" v-for="(phone, index) in dateListWcharge=phones.slice(0, n)" :key="index">
                            <img :src="phone.wcharger">
                        </td>
                    </tr>

                    <tr v-if="!hidePrice">
                        <td class="products-rows">Стоимость</td>
                        <td class="info-rows" v-for="(phone, index) in dateListPrice=phones.slice(0, n)" :key="index">
                            {{ phone.price }} ₽</td>
                    </tr>     

                </tbody>
            </table>
             

        </div>

    </section>

</template>
<script>
import ElsePhone from './ElsePhone.vue'


export default {
    components: {
			ElsePhone,
            
		},
    emits: ['show'],
    emits: ['showEF'],
    data() {
        return {
        

       
            phones: [
                {  title: 'Apple iPhone 12', titleImg: './src/components/images/image 16.png', company: 'Apple', year: 2021, diagonal: 6.1, country: "Китай", memory: 128, fscreen: 60, NFC: './src/components/images/Subtract0.png', ESIM: './src/components/images/Subtract1.png', wcharger: './src/components/images/Subtract1.png', price: 81990 },
                {  title: 'Xiaomi Mi 11 Lite', titleImg: './src/components/images/Xiaomi Mi 11 Lite 1.png', company: 'Xiaomi', year: 2021, diagonal: 6.55, country: "Китай", memory: 128, fscreen: 90, NFC: './src/components/images/Subtract1.png', ESIM: './src/components/images/Subtract1.png', wcharger: './src/components/images/Subtract0.png', price: 27490 },
                {  title: 'Samsung Galaxy A72', titleImg: './src/components/images/A72 1.png', company: 'Samsung', year: 2021, diagonal: 6.1, country: "Вьетнам", memory: 128, fscreen: 90, NFC: './src/components/images/Subtract1.png', ESIM: './src/components/images/Subtract0.png', wcharger: './src/components/images/Subtract1.png', price: 32890 },
                { title: 'Samsung Galaxy A72', titleImg: './src/components/images/A72 1.png', company: 'Samsung', year: 2022, diagonal: 6.7, country: "Вьетнам", memory: 128, fscreen: 90, NFC: './src/components/images/Subtract1.png', ESIM: './src/components/images/Subtract0.png', wcharger: './src/components/images/Subtract1.png', price: 32890 },
                {  title: 'Samsung Galaxy A72', titleImg: './src/components/images/A72 1.png', company: 'Samsung', year: 2021, diagonal: 6.7, country: "Вьетнам", memory: 128, fscreen: 90, NFC: './src/components/images/Subtract1.png', ESIM: './src/components/images/Subtract0.png', wcharger: './src/components/images/Subtract1.png', price: 32890 },
                {  title: 'Samsung Galaxy A72', titleImg: './src/components/images/A72 1.png', company: 'Samsung', year: 2020, diagonal: 6.9, country: "Вьетнам", memory: 128, fscreen: 90, NFC: './src/components/images/Subtract1.png', ESIM: './src/components/images/Subtract0.png', wcharger: './src/components/images/Subtract1.png', price: 32890 }

            ],
           
            vis2: false,
            vis3: true,
            vis4: false,
            vis5: false,
            vis6: false,
            n: 3,
            hideGoods: false,
            hideCompany: false,
            hideYear: false,
            hideCountry: false,
            hideDiagonal: false,
            hideMemory: false,
            hideFscreen: false,
            hideNFC: false,
            hideESIM: false,
            hideWcharge: false,
            hidePrice: false,

        }
    },
    methods: {
        good2() {
            this.n = 2;
            this.vis2 = true,
            this.vis3 = false,
            this.vis4 = false,
            this.vis5 = false,
            this.vis6 = false
        },
        good3() {
            this.n = 3;
            this.vis2 = false,
            this.vis3 = true,
            this.vis4 = false,
            this.vis5 = false,
            this.vis6 = false
        },
        good4() {
            this.n = 4;
            this.vis2 = false,
            this.vis3 = false,
            this.vis4 = true,
            this.vis5 = false,
            this.vis6 = false
        },
        good5() {
            this.n = 5;
            this.vis2 = false,
            this.vis3 = false,
            this.vis4 = false,
            this.vis5 = true,
            this.vis6 = false
        },
        good6() {
            this.n = 6;
            this.vis2 = false,
            this.vis3 = false,
            this.vis4 = false,
            this.vis5 = false,
            this.vis6 = true
        },
        
        func(arg1, arg2) {
		console.log(arg1, arg2);
        alert(arg2);
	},

       funcEF(idf) {
		alert(idf);
	    },
    },
    computed: {
        hide() {
            const arrCompany = [...new Set(this.dateListCompany.map(a => a.company))]
            const arrYear = [...new Set(this.dateListYear.map(a => a.year))]
            const arrDiagonal = [...new Set(this.dateListDiagonal.map(a => a.diagonal))]
            const arrCountry = [...new Set(this.dateListCountry.map(a => a.country))]
            const arrMemory = [...new Set(this.dateListMemory.map(a => a.memory))]
            const arrFscreen = [...new Set(this.dateListFscreen.map(a => a.fscreen))]
            const arrNFC = [...new Set(this.dateListNFC.map(a => a.NFC))]
            const arrESIM = [...new Set(this.dateListESIM.map(a => a.ESIM))]
            const arrWcharge = [...new Set(this.dateListWcharge.map(a => a.wcharge))]
            const arrPrice = [...new Set(this.dateListPrice.map(a => a.price))]

            if (arrCompany.length == 1)
                this.hideCompany = !this.hideCompany;
            else
                this.hideCompany = false;

            if (arrYear.length == 1)
                this.hideYear = !this.hideYear;
            else
                this.hideYear = false;

            if (arrDiagonal.length == 1)
                this.hideDiagonal = !this.hideDiagonal;
            else
                this.hideDiagonal = false;

            if (arrCountry.length == 1)
                this.hideCountry = !this.hideCountry;
            else
                this.hideCountry = false;

            if (arrMemory.length == 1)
                this.hideMemory = !this.hideMemory;
            else
                this.hideMemory = false;

            if (arrFscreen.length == 1)
                this.hideFscreen = !this.hideFscreen;
            else
                this.hideFscreen = false;

            if (arrNFC.length == 1)
                this.hideNFC = !this.hideNFC;
            else
                this.hideNFC = false;

            if (arrESIM.length == 1)
                this.hideESIM = !this.hideESIM;
            else
                this.hideESIM = false;

            if (arrWcharge.length == 1)
                this.hideWcharge = !this.hideWcharge;
            else
                this.hideWcharge = false;

            if (arrPrice.length == 1)
                this.hidePrice = !this.hidePrice;
            else
                this.hidePrice = false;
        },
    },
}    
</script>

<style>
.container-title {
    padding-left: 0;
    display: flex;
}

.show-products {
    display: flex;
    list-style-type: none;
    padding-left: 0;
    font-family: Roboto;
    margin-top: 10px;


}

.show-number {
    display: flex;
    list-style-type: none;
    font-family: Roboto;
    margin-top: 20px;
    margin-left: 0;
    padding-left: 0;
}

.phone-item {

    font-size: 48px;
    font-weight: 700;
    margin-top: 52px;
    margin-left: 166px;
    color: #828286;

}
phone-thead{
    position: relative;
   

}
.show-phone{
    display:inline-block; 
    
    
}



.show-item {
    color: #0D5ADC;
    font-weight: 400;
    font-size: 18px;
    margin-left: 567px;
    margin-right: 4px;
    margin-top: 61px;
}

.number-item {
    color: #0D5ADC;
    font-size: 18px;
    font-weight: 400;
    margin-left: 4px;
    margin-top: 61px;
}

.number-button {
    border: none;
    background: none;
    color: #0D5ADC;
    font-size: 18px;
    padding: 0;

}

.number-button :active {
    text-decoration: underline;
}

.number-t {
    margin-top: 0;
}

.phone-table {
    margin-left: 165px;
    margin-top: 0;
    border: none;
    font-family: Roboto;
    width: 1110px;
}

.phone-table thead th {
    border-bottom: 1px solid #CDCFD2;
    height: 266px;
    margin-left: 0;
   
    
}

.phone-table tbody td {
    border-bottom: 1px solid #CDCFD2;
    font-size: 18px;
    height: 89px;

}

.products-rows {

    color: #A4A9B9;
    font-weight: 500;
    text-align: left;
    text-transform: uppercase;
}

.info-rows {

    color: #3B4157;
    font-weight: 500;
    text-align: center;
}

.show-difference {
    color: #0D5ADC;
    text-align: left;
    font-weight: 400;
    margin-top: 120px;
}

.show-phone {
    color: #3B4157;
    font-weight: 500;
}

.chevron-image {
    margin-bottom: 10px;
}


.hid {
    margin-top: 50px;
    margin-left: 200px;
    height: 50px;
    width: 20%;
    font-size: 20px;
}
</style>