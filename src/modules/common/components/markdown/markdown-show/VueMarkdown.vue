<template>
    <div>
        <div v-html="parsed"></div>
    </div>

</template>

<script>
import Remarkable from 'remarkable';

var md = new Remarkable();

export default {
    props: {
        dataText: {
            required: true
        }
    },
    computed: {
        text () {
            return this.dataText;
        },
        parsed () {
            return md.render(this.text);
        }
    }
}
</script>
