const from = 200
const to = 207

async function run() {
    for (let i = from; i <= to; i += 1) {
        await $`sudo ifconfig lo0 alias 127.0.0.${i} up`
    }
}

run()
