<template>
    <div class="flex items-center justify-between px-4 py-8">
        <div class="shadow-md shadow-[#3F3F45] bg-[#27272A] px-3 py-1 rounded flex items-center cursor-pointer">
            <img src="/images/icons/icon_arrow_left.svg" />
            <span class="text-white ml-2 text-sm">Go Back</span>
        </div>
        <div class="flex items-center">
            <div class="flex items-center">
                <img src="/images/icons/icon_currency_satoshi.svg" class="mr-2" />
                <div class="flex border rounded-lg flex-start w-8 h-5 cursor-pointer" @click="toggleCurrencyState">
                    <div class="rounded-lg w-4 h-full bg-[#A1A1A9]" />
                </div>
                <img src="/images/icons/icon_currency_dollar.svg" class="ml-2" />
            </div>
            <div class="flex items-center ml-8">
                <span class="text-sm text-white mr-1">Balance</span>
                <img src="/images/icons/icon_arrow_down.svg" />
            </div>
            <span class="text-sm text-white ml-4">$ 19,123</span>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
export default {
    setup() {
        const state = reactive({
            currency_state: "sat"
        })

        const toggleCurrencyState = () => {
            state.currency_state = state.currency_state === "sat" ? "dol" : "sat";
        }

        return {
            state,
            toggleCurrencyState
        }
    }
}
</script>