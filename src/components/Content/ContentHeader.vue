<template>
    <div class="flex items-center md:justify-between flex-col md:flex-row">
        <div class="flex items-center">
            <img src="/images/avatars/avatar_user_default.png" class="w-40 h-40 mr-4" />
            <div class="flex flex-col justify-between">
                <div class="my-3">
                    <h3 class="text-lg mb-1 text-light">Ricardo Alvarez</h3>
                    <div class="flex items-center">
                        <span class="text-dark mr-2">@ric29dhd</span>
                        <img src="/images/icons/icon_duplicate.svg" />
                    </div>
                </div>
                <div class="my-3">
                    <div class="flex items-center mb-2">
                        <img src="/images/avatars/avatar_user_jane.png" class="-mr-2 h-8 w-8" />
                        <img src="/images/avatars/avatar_user_joana.png" class="-mr-2 h-8 w-8" />
                        <img src="/images/avatars/avatar_user_john.png" class="-mr-2 h-8 w-8" />
                        <img src="/images/avatars/avatar_user_maria.png" class="-mr-2 h-8 w-8" />
                        <img src="/images/avatars/avatar_user_tina.png" class="-mr-2 h-8 w-8" />
                        <div class="bg-[#27272A] rounded-full w-9 h-9 flex items-center justify-center">
                            <span class="text-[#52525A] text-sm">+2</span>
                        </div>
                    </div>
                    <span class="text-dark">23 betFriends | 7 mutuals</span>
                </div>
            </div>
        </div>
        <div class="flex md:flex-col flex-row">
            <div class="border border-darker rounded-lg py-2 px-4 my-6 flex items-center cursor-pointer mx-2">
                <img src="/images/icons/icon_target.svg" class="mr-2" />
                <span class="text-dark text-sm">Invite to Challenge</span>
            </div>
            <div class="border border-darker rounded-lg py-2 px-4 my-6 flex items-center cursor-pointer mx-2">
                <img src="/images/icons/icon_message.svg" class="mr-2" />
                <span class="text-dark text-sm">Invite to Challenge</span>
            </div>
        </div>
    </div>
</template>