<template>
    <div class="border border-darker rounded-xl p-4 my-6">
        <div class="flex justify-between items-center mb-5">
            <span class="text-light text-sm">{{title}}</span>
            <div class="text-[#55B5A6] flex items-center" v-if="show_rise">
                <img src="/rise.svg" class="mr-2"/>
                <span>{{rise_amount}}</span>
            </div>
        </div>
        <div class="flex justify-between items-center my-1">
            <span class="text-dark">USD</span>
            <span class="text-light font-semibold text-xl">{{amount_usd}}</span>
        </div>
        <div class="flex justify-between items-center my-1">
            <span class="text-dark">BTC</span>
            <span class="text-light font-semibold text-xl">{{amount_btc}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        },
        amount_usd: {
            type: String
        },
        amount_btc: {
            type: String
        },
        show_rise: {
            type: Boolean,
            default: false
        },
        rise_amount: {
            type: String
        }
    }
}
</script>