<template>
    <div class="collapsable">
        <div class="title" :class="{ 'expanded': expand }" @click="expand = !expand">
            <h5><slot name="title"></slot></h5>
            <span class="mai-chevron-forward" v-if="!expand"></span>
            <span class="mai-chevron-down" v-else></span>
        </div>
        <div class="content-wrapper" :class="{ 'expanded': expand }">
            <div class="content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, ref, computed, reactive, onUnmounted, onBeforeMount } from '@vue/runtime-core'

    const expand = ref(false);

</script>

<style lang="scss" >


.collapsable {

    .title {
        cursor: pointer;
        color: var(--theme-5);
        background-color: var(--theme-2);
        padding: 3px 6px;
        margin: 2px 0;

        h5 {
            display: inline;
            font-size: 16px;
            font-weight: 550;
        }

        span {
            float: right;
        }

        &:hover, &.expanded {
            background-color: var(--theme-1);
        }
    }


    .content-wrapper {
        max-height: 0;
        background-color: white;
        box-sizing: border-box;
        overflow: hidden;
        transition: all .5s ease-out;
        color: #555;
        font-size: 14px;
        text-align: justify;
        
        .content {
            padding: 10px 15px;
        }

        &.expanded {
            max-height: 250px;
            transition: all .5s ease-in;
        }
    }
}

</style>