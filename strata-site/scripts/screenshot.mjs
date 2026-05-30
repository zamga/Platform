import { chromium, devices } from "playwright"
import { mkdir } from "node:fs/promises"

const OUT = "/opt/cursor/artifacts/screenshots"
const URL = process.env.URL || "http://127.0.0.1:5173"
await mkdir(OUT, { recursive: true })

const browser = await chromium.launch()

// Desktop — full page
const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
const dpage = await desktop.newPage()
await dpage.goto(URL, { waitUntil: "networkidle" })
await dpage.waitForTimeout(2200)
await dpage.screenshot({ path: `${OUT}/strata-desktop-full.png`, fullPage: true })
// Desktop — hero only (above the fold)
await dpage.screenshot({ path: `${OUT}/strata-desktop-hero.png` })

// Mobile — full page
const iphone = devices["iPhone 14 Pro"]
const mobile = await browser.newContext({ ...iphone })
const mpage = await mobile.newPage()
await mpage.goto(URL, { waitUntil: "networkidle" })
await mpage.waitForTimeout(2200)
await mpage.screenshot({ path: `${OUT}/strata-mobile-full.png`, fullPage: true })
await mpage.screenshot({ path: `${OUT}/strata-mobile-hero.png` })

await browser.close()
console.log("screenshots saved to", OUT)
