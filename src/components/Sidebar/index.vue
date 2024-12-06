<script setup>
import PriceItem from './PriceItem.vue'
import SummaryItem from './SummaryItem.vue'
</script>

<template>
    <div class="border border-[#27272A] rounded-xl p-8 lg:w-[400px] w-full">
        <div class="">
            <h2 class="text-lg text-light flex items-center">
                <span class="mr-4">
                    Investments and Returns 
                </span>
                <img src="/images/icons/icon_lock.svg" />
            </h2>
            <p class="text-dark text-sm mt-2 mb-4">
                This account is private / This account has turned off sharing details.
            </p>
        </div>
        <PriceItem 
            title="Investments"
            :usdAmount="48000"
            :btcAmount="38786"
        />
        <PriceItem 
            title="Returns"
            :isPriceIncreaseRateVisible="true"
            :priceIncreaseRate="112.51"
            :usdAmount="56000"
            :btcAmount="43712"
        />
        <SummaryItem />
    </div>
</template>