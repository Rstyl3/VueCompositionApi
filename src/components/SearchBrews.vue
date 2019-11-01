<template>
  <div class="search-brew">
    <h2>Brew Search</h2>
    <p>Search beer!</p>
    <section>
      <form @submit.prevent="submitted">
        <input type="text" v-model="val" />
        <button>Submit</button>
      </form>
    </section>
    <div class="search-results">
      <ul class="list" v-for="brewery in list" :key="brewery.id">
        <li>
          <span class="title">Name:</span> <span class="brew">{{ brewery.name }}</span>
        </li>
        <li>
          <span class="title">Street:</span> <span class="brew">{{ brewery.street }}</span>
        </li>
        <li>
          <span class="title">City:</span><span class="brew"> {{ brewery.city }}</span>
        </li>
        <li>
          <span class="title">Zip:</span><span class="brew"> {{ brewery.postal_code }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import useBrewList from '../composables/use-brew-list';

export default {
  setup() {
    const { val, list, submitted } = useBrewList();
    return { val, list, submitted }; //expose to template
  },
};
</script>

<style scoped>
.search-brew {
  width: 100%;
  height: 100%;
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.search-brew section{
  margin-bottom: 10px;
}
.search-results {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
}
.list {
  list-style: none;
  text-align: left;
  padding: 5px 0;
  margin: 0 auto;
  width: 80%;
}
.list li {
  display: flex;
  flex-direction: row;
}
</style>