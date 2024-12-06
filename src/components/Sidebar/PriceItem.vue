<template>
    <div class="border border-darker rounded-xl p-4 my-6">
        <div class="flex justify-between items-center mb-5">
            <span class="text-light text-sm">{{title}}</span>
            <div class="text-[#55B5A6] flex items-center" v-if="isPriceIncreaseRateVisible">
                <img src="/images/icons/icon_arrow_nw.svg" class="mr-2"/>
                <span>{{priceIncreaseRate}}%</span>
            </div>
        </div>
        <div class="flex justify-between items-center my-1">
            <span class="text-dark">USD</span>
            <span class="text-light font-semibold text-xl">$ {{formatNumber(usdAmount)}}</span>
        </div>
        <div class="flex justify-between items-center my-1">
            <span class="text-dark">BTC</span>
            <span class="text-light font-semibold text-xl">{{formatNumber(btcAmount)}} SAT</span>
        </div>
    </div>
</template>

<script lang="ts">
import { formatNumber } from '../..//utils/functions';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    props: {
        title: {
            type: String as PropType<string>,
            default: ""
        },
        usdAmount: {
            type: Number as PropType<number>,
            required: true
        },
        btcAmount: {
            type: Number as PropType<number>,
            required: true
        },
        isPriceIncreaseRateVisible: {
            type: Boolean as PropType<boolean>,
            default: false
        },
        priceIncreaseRate: {
            type: Number as PropType<number | null>,
        }
    },
    methods: {
        formatNumber
    }
})
</script>