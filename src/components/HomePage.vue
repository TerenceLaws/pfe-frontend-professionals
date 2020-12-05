<template>
  <div class="hello container-fluid">
    <div class="row">
      <div class="col-md-4">
        <h1>{{ msg }}</h1>
        <p> Cras justo odio, dapibus ac facilisis in, egestas eget quam.Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: left;
}
</style>
