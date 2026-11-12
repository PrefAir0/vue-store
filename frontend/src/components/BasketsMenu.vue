<script setup lang="ts">
import { baskets, type ItemInBasket } from '@/data/data';
import { computed, ref } from 'vue';

const emit = defineEmits(['countItems'])

function RemoveItem(id: number){
    const index = baskets.findIndex(item => item.id === id)
    baskets.splice(index, 1)
}

const basketInfo = computed(() => {
    const price = baskets.reduce((sum, item) => { return sum + item.price * item.count;}, 0);
    let discount

    if(price >= 5000){
        discount = 0.1
    }
    else{
        discount = 0
    }

    const countItems = baskets.reduce((sum, item) => { return sum + item.count}, 0);
    const finalPrice = price - price * discount 

    emit('countItems', countItems)

    return {price , finalPrice, discount, countItems}
});

</script>
<template>
    <div class="">
        <h2>Корзина</h2>
        <div v-for="basket in baskets" :key="basket.id" class="">
            <div class="">
            <p>Товар: {{ basket.name }}</p>
            <p>Цена: {{ basket.price }}</p>
            </div>
            <div class="">
                <div class="flex">
                    <button @click="basket.count++">+</button>
                    <p>{{ basket.count }}</p>
                    <button @click="if (basket.count == 1){ RemoveItem(basket.id)} else {basket.count--};">-</button>
                </div>
                <button @click="RemoveItem(basket.id)">удалить</button>
            </div>
        </div>

        <div class="">
            <h3>Итого</h3>
            <p>Общая цена {{basketInfo.finalPrice}} Скидка {{basketInfo.discount * 100}}% старая цена {{basketInfo.price}}</p>
            <p>Товаров:{{ basketInfo.countItems }}</p>
        </div>
    </div>
</template>
<style scoped>
    .flex{
        display: flex;
        align-items: center;
    }
</style>