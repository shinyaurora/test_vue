<script setup>
import ContentHeader from './ContentHeader.vue'
import PostItem from './PostItem.vue'
</script>

<template>
    <div class="p-8 flex-1 mr-8">
        <ContentHeader />
        <div class="my-8">
            <PostItem 
                name="ric29dhd" 
                status_icon="/status3.svg"
                title="Who will be the winner of the 2024 Presidential Election?" 
            />
            <PostItem 
                name="ric29dhd" 
                status_icon="/status3.svg"
                title="What types of BTC-linked financial products will be available by the end of 2025?? "
            />
            <PostItem 
                name="ric29dhd" 
                status_icon="/status2.svg"
                title=" What types of BTC-linked financial products will be available by the end of 2025?? "
                :show_comment="true"
                comment="I am pretty sure this is going to be big."
            />
            <PostItem 
                name="ric29dhd" 
                status_icon="/status1.svg"
                title="Who will be the winner of the 2024 Presidential Election? "
                :is_copyable="false"
            />
        </div>
        <div class="text-dark">
            <span>See More</span>
        </div>
    </div>
</template>