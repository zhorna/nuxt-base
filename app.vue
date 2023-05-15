<template>
    <div>
        Squidex layer

        <div>
            {{ cats }}
        </div>
    </div>
</template>

<script setup lang="ts">
const client = useSquidexClient()



const { data, pending, refresh, error, execute } = useLazyAsyncData(() => client.cats.queryCatsContent(), {
    server: false
})


const cats = computed(() => data.value?.items ?? [])



/* 
const client = useSquidexClient()


const dimi = client.path("/api/content/nuxt-module-dev/cats/")
.method("get")


 */


/* 
eyJhbGciOiJSUzI1NiIsImtpZCI6IjlTZWo3eXJYdGo1TzNDVV9JeG5EU2ciLCJ0eXAiOiJhdCtqd3QifQ.eyJzdWIiOiJudXh0LW1vZHVsZS1kZXY6ZGVmYXVsdCIsIm9pX3Byc3QiOiJudXh0LW1vZHVsZS1kZXY6ZGVmYXVsdCIsImNsaWVudF9pZCI6Im51eHQtbW9kdWxlLWRldjpkZWZhdWx0Iiwib2lfdGtuX2lkIjoiY2RiZDQ4MmEtMTllZC00N2IyLWJmMmItNzRmMjc0NWFjNGVmIiwiYXVkIjoic2NwOnNxdWlkZXgtYXBpIiwic2NvcGUiOiJzcXVpZGV4LWFwaSIsImV4cCI6MTY4Njc1MjkyNiwiaXNzIjoiaHR0cHM6Ly9jbG91ZC5zcXVpZGV4LmlvL2lkZW50aXR5LXNlcnZlciIsImlhdCI6MTY4NDE2MDkyNn0.aeHd5q6A7uxcJAF5Qwa5Z-9o-uQvvk1X_l9_lASQm_5Bvge24zxv3E3XGnW0IppoFCBfKQUwqNhwl7RsdWRxZ-WmLA2X0Jsoqd0P0i_4QzmcdWQ0PSRjhTuJ8khd5zwj7wC_AAFBLNS7KTAHlvqxDIASr0tKPLWW-lc0gFyWn-5SJgkMQU3jZ5GOXdBJksp_jH-sbcL2U8aANWXxBwRkrTnYNnB76nWnlIzx0ZhqXH3auv4-ZaBpCJ_9Ca7wOGGdKClenq1JH7A_TYeRGoxRZK3kxUr_yYaiIUgQOp_-RFbBlH2k68nv7KOg_x93ZghTZFjUOxzeSjcawkFdCgcBaQ
*/


/* 
client.cats.createCatsContent({
    name: {
        iv: "Dimi2"
    },
}, true) */



</script>
