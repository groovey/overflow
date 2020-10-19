<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>

    <p class="body">
      <slot></slot>
    </p>

    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
header {
  background-color: green;
  color: white;
  padding: 10px;
}
.body {
  background-color: aquamarine;
  padding: 10px;
}
footer {
  background-color: burlywood;
}
</style>
