<script setup>
import PriceItem from './PriceItem.vue'
import SummaryItem from './SummaryItem.vue'
</script>

<template>
    <div class="border border-[#27272A] rounded-xl p-8 w-[400px]">
        <div class="">
            <h2 class="text-lg text-light flex items-center">
                <span class="mr-4">
                    Investments and Returns 
                </span>
                <img src="/lock.svg" />
            </h2>
            <p class="text-dark text-sm mt-2 mb-4">
                This account is private / This account has turned off sharing details.
            </p>
        </div>
        <PriceItem 
            title="Investments"
            amount_usd="$48,000"
            amount_btc="38,786 SAT"
        />
        <PriceItem 
            title="Returns"
            :show_rise="true"
            rise_amount="112.51%"
            amount_usd="$56,000"
            amount_btc="43,712 SAT"
        />
        <SummaryItem />
    </div>
</template>