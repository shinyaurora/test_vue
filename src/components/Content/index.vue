<script setup>
import ContentHeader from './ContentHeader.vue'
import PostItem from './PostItem.vue'
</script>

<template>
    <div class="p-8 flex-1">
        <ContentHeader />
        <div class="my-8">
            <PostItem 
                name="ric29dhd" 
                statusIconUrl="/images/icons/icon_status_bell.svg"
                title="Who will be the winner of the 2024 Presidential Election?" 
            />
            <PostItem 
                name="ric29dhd" 
                statusIconUrl="/images/icons/icon_status_bell.svg"
                title="What types of BTC-linked financial products will be available by the end of 2025?? "
            />
            <PostItem 
                name="ric29dhd" 
                statusIconUrl="/images/icons/icon_status_message.svg"
                title=" What types of BTC-linked financial products will be available by the end of 2025?? "
                :isCommentVisible="true"
                comment="I am pretty sure this is going to be big."
            />
            <PostItem 
                name="ric29dhd" 
                statusIconUrl="/images/icons/icon_status_razor.svg"
                title="Who will be the winner of the 2024 Presidential Election? "
                :isCopyable="false"
            />
        </div>
        <div class="text-dark">
            <span class=" cursor-pointer">See More</span>
        </div>
    </div>
</template>