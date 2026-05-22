import { chromium, devices } from "playwright"
import { mkdir } from "fs/promises"

await mkdir("/opt/cursor/artifacts/screenshots", { recursive: true })

const browser = await chromium.launch()
const iphone = devices["iPhone 14 Pro"]
const context = await browser.newContext({ ...iphone })
const page = await context.newPage()
await page.goto("http://127.0.0.1:5173", { waitUntil: "networkidle" })
await page.screenshot({
  path: "/opt/cursor/artifacts/screenshots/bizly-mobile.png",
  fullPage: true,
})

const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const dpage = await desktop.newPage()
await dpage.goto("http://127.0.0.1:5173", { waitUntil: "networkidle" })
await dpage.screenshot({
  path: "/opt/cursor/artifacts/screenshots/bizly-desktop.png",
  fullPage: true,
})

await browser.close()
console.log("screenshots saved")
