<template>
  <div v-if="errorInfo">
    <h1>Something went wrong.</h1>
    <details style="white-space: 'pre-wrap'">
    {{this.error && this.error.toString()}}
    <br />
    {{this.errorInfo.componentStack}}
    </details>
  </div>
  <div v-else>
    <slot/>
  </div>
</template>
<script>

export default {
  name: 'ErrorBoundary',
  data() {
    return {
      error: null,
      errorInfo: null
    }
  }

}
</script>
