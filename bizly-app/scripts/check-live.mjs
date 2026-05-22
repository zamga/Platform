import { chromium } from "playwright"

const url = "https://cdn.jsdelivr.net/gh/zamga/Platform@main/docs/index.html"
const browser = await chromium.launch()
const page = await browser.newPage()
const errors = []
page.on("console", (msg) => errors.push(`console:${msg.type()}:${msg.text()}`))
page.on("pageerror", (e) => errors.push(`pageerror:${e.message}`))
await page.goto(url, { waitUntil: "load", timeout: 30000 })
await page.waitForTimeout(3000)
console.log("errors:", errors)
console.log("html:", await page.content().then((h) => h.slice(0, 500)))
await browser.close()
