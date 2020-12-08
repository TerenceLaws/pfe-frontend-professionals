<template>
  <div>
    <a class="list-group-item list-group-item-action flex-column align-items-start mr-0 "
       v-for="location in locations" v-bind:location="location" v-bind:key="location._id" v-on:click="updateDetailsView(location)">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ location.name }}</h5>
        <small>
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clock" fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"/>
            <path fill-rule="evenodd"
                  d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
          {{ location.interval }}</small>
      </div>
      <p class="mb-1 text-left">{{ location.description }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "LocationListItem",
  props: {
    locations: {
      type: Array
    },
    updateDetailsView: {
      type: undefined
    }
  }
}
</script>

<style scoped>

</style>