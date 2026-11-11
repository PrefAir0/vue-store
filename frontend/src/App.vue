<script setup lang="ts">
import { ref } from 'vue';
import BasketsMenu from './components/BasketsMenu.vue';
import ProductCard from './components/productCard.vue';
import { baskets ,products } from './data/data.ts';


const countItems = ref(0)

function updateCountItems(count: number){
  countItems.value = count
}

function OpenStore(){
  let basket = document.getElementById("BasketsMenu")

  if(basket?.classList.contains("baskets-menu")){
    basket?.classList.replace("baskets-menu","backet-menu-acrive")
  }
  else{
    basket?.classList.replace("backet-menu-acrive","baskets-menu")
  }
  


}

</script>

<template>
  <div class="flex">
    <div class="">
      <h1>Продукты</h1>
      <div v-for="product in products" :key="product.id">
        <ProductCard :id="product.id" :name="product.name" :description="product.description" :price="product.price"/>
      </div>
    </div>
    <div class="">
      <button @click="OpenStore()" class="backet">
        Корзина
      </button>
      <p>Количество товаров {{ countItems }}</p>
    </div>
    <BasketsMenu @count-items="updateCountItems" id="BasketsMenu" class="baskets-menu"></BasketsMenu>
  </div>
</template>

<style scoped>
.backet{
  background-color: brown;
}

.flex{
  display: flex;

}


template{
  background-color: #121212;
}

.baskets-menu{
  display: none;
}

.backet-menu-acrive{

}


</style>
