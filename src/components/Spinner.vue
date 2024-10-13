<template>
    <!-- Spinner div -->
    <div id="spinner" class="spinner">
        <span class="loading loading-ball loading-xs"></span>
        <span class="loading loading-ball loading-sm"></span>
        <span class="loading loading-ball loading-md"></span>
        <span class="loading loading-ball loading-lg"></span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#spinner {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent overlay */
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
