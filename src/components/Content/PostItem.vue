<template>
    <div class="flex justify-between py-6">
        <div class="flex">
            <div class="w-12 h-12 relative mr-3">
                <img src="/avatar.png" class="w-full h-full" />
                <img :src="status_icon" class="absolute bottom-0 right-0"/>
            </div>
            <div class="flex flex-col">
                <p>
                    <span class="text-light text-sm mr-3">@{{name}} placed a bet on</span>
                    <span class="text-dark text-sm">{{title}}</span>
                </p>
                <div class="mt-2" v-if="show_comment">
                    <p class="text-sm text-dark mb-2">{{comment}}</p>
                     <div class="text-dark text-sm flex items-center mr-6">
                        <img src="/message.svg" class="mr-2" />
                        <span>Comment</span>
                    </div>
                </div>
                <div class="flex items-center mt-1" v-if="!show_comment">
                    <div class="text-dark text-sm flex items-center mr-6">
                        <img src="/expand.svg" class="mr-2" />
                        <span>Bet Now</span>
                    </div>
                    <div class="text-dark text-sm flex items-center" v-if="is_copyable">
                        <img src="/copy.svg" class="mr-2" />
                        <span>Copy trade</span>
                    </div>
                </div>
            </div>
        </div>
        <span class="text-dark text-sm">2m ago</span>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String
        },
        title: {
            type: String
        },
        is_copyable: {
            type: Boolean,
            default: true
        },
        show_comment: {
            type: Boolean,
            default: false
        },
        comment: {
            type: String
        },
        status_icon: {
            type: String,
            default: "status1.svg"
        }
    }
}
</script>