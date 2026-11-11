<script setup lang="ts">
import { baskets, type Item } from '@/data/data';

const props = defineProps<Item>()


function addBasket() {

  let item = baskets.find(item => item.id === props.id)

  if (item) {
    item.count++
    return
  }

  baskets.push(
    {
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      count: 1
    }
  )

  return
}
</script>
<template>
  <div class="card">
    <p>{{ name }}</p>
    <p>{{ description }}</p>
    <p>{{ price }}</p>
    <button @click="addBasket()">Добавить в корзину</button>
  </div>
</template>
<style scoped>

.card{
  border: 1px solid black;
  padding: 20px;
  
}

</style>
