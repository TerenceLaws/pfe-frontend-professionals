<template>
  <div class="border-left container-fluid  col-8 ">
    <div class="card border-0 mh-100 min-vh-100">

      <div id="canvas" class="d-show" v-if="true">

      </div>
      <!--      <img src="../../src/assets/logo.png" class=" rounded mx-auto d-block" alt="...">-->
      <div class="card-body">
        <h5 class="card-title">{{ location.name }}</h5>
        <p class="card-text">{{ location.description }}</p>
        <button :id=location.id class="btn btn-info d-inline mx-3">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-download" fill="currentColor"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path fill-rule="evenodd"
                  d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
          </svg>
        </button>
        <CreateLocation class="d-inline" v-bind:location="location"/>
      </div>

    </div>

  </div>
</template>

<script>
import CreateLocation from "@/components/CreateLocation";

export default {
  name: "LocationDetailView",
  components: {CreateLocation},
  props: {
    location: {
      type: Object,
      default: () => ({location})
    }
  }
}


</script>

<style scoped>

</style>