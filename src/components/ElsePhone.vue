<template>


    <button class="chevron-button" @click="elsePhone"> <img src="./images/chevron_small.png" alt="chevron"
            class="chevron-image" />
    </button>

    <div v-show="showMenu">
        <div class="conteiner-else">
            <template v-for="(phone, index) in phones" :key="index">
                <span v-if="index >= stn">
                    <div class="phone-else-list">
                        <button class="button-else" @click="handleEF(index, phoneID)">
                            <span class="img-button-else">
                                <img src="./images/vector-str.png" alt="vector-str" class="vector-str-image">

                            </span>
                        </button>
                        <img class="img-button" :src="phone.titleImg">
                        <div class="list-img-button"> {{ phone.title }} </div>
                    </div>
                </span>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        phones: {
            type: Array,
            default: function () {
                return []
            }
        },
        phoneID: Number,
        stn: Number,
    },
    data() {

        return {
            showMenu: false,
            title: '',
        }
    },

    methods: {
        elsePhone() {
            this.showMenu = !this.showMenu
        },
        handleEF(index, phoneID) {
            this.nf = index;
            this.mf = phoneID;
            this.$emit('showEF', this.nf, this.mf);
        }
    }
}

</script>

<style>
.chevron-button {
    border: none;
    background: none;
    padding: 0;
}

.conteiner-else {
    display: block;
    position: absolute;
    margin: 0;
    padding: 0;
}

.phone-else-list {
    display: flex;
    background-color: white;
}

.button-else {
    border: none;
    background: none;
    display: block;
}

.img-button-else {
    align-items: center;

}

.img-button {
    display: block;
    align-items: center;
    transform: scale(0.5);
}

.list-img-button {
    display: block;
    align-items: center;
    margin-top: 14%;
}

.search-input {
    margin-bottom: 10px;
    padding: 5px;
}
</style>
