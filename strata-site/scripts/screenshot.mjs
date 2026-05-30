import { chromium, devices } from "playwright"
import { mkdir } from "node:fs/promises"

const OUT = "/opt/cursor/artifacts/screenshots"
const URL = process.env.URL || "http://127.0.0.1:5173"
await mkdir(OUT, { recursive: true })

const browser = await chromium.launch()

// Scroll through the whole page so IntersectionObserver reveals + metric
// counters fire (reveal classes persist once added), then return to top.
async function primeReveals(page) {
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
    const h = document.documentElement.scrollHeight
    for (let y = 0; y < h; y += Math.round(window.innerHeight * 0.7)) {
      window.scrollTo(0, y)
      await sleep(120)
    }
    window.scrollTo(0, h)
    await sleep(500)
    window.scrollTo(0, 0)
    await sleep(300)
  })
}

// Desktop
const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
const dpage = await desktop.newPage()
await dpage.goto(URL, { waitUntil: "networkidle" })
await dpage.waitForTimeout(1200)
await dpage.screenshot({ path: `${OUT}/strata-desktop-hero.png` })
await primeReveals(dpage)
await dpage.waitForTimeout(600)
await dpage.screenshot({ path: `${OUT}/strata-desktop-full.png`, fullPage: true })

// Mobile
const iphone = devices["iPhone 14 Pro"]
const mobile = await browser.newContext({ ...iphone })
const mpage = await mobile.newPage()
await mpage.goto(URL, { waitUntil: "networkidle" })
await mpage.waitForTimeout(1200)
await mpage.screenshot({ path: `${OUT}/strata-mobile-hero.png` })
await primeReveals(mpage)
await mpage.waitForTimeout(600)
await mpage.screenshot({ path: `${OUT}/strata-mobile-full.png`, fullPage: true })

await browser.close()
console.log("screenshots saved to", OUT)
