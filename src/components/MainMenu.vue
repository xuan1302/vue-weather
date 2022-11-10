<template>
    <div className="main-menu">
        <ul v-if="menuItems.length">
            <li v-for="item in menuItems" :key="item.value" @click="handleChooseMenuitem(item.value)" :class="{ active: currentTab === item.value,item:true}">
                {{item.text}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                current:"",
                menuItems:[
                    {
                        value: "today",
                        text: "Today"
                    },
                    {
                        value: "week",
                        text: "Week"
                    },
                    {
                        value: "hour",
                        text: "Hour"
                    },
                ]
            }
        },
        props:['currentTab'],
        computed:{

        },
        methods:{
            handleChooseMenuitem(data){
                this.$emit('handleChooseMenuitem',data)
            }
        }
    }
</script>
