<template lang="html">
    <li>
        {{err.title}} {{err.message}}
    </li>
</template>

<script>
export default {
    props: {
        err: {
            type: Object
        }
    }
}
</script>

<style lang="css">
</style>
