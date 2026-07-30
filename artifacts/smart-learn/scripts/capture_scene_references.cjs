const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

async function capture() {
  console.log("Capturing Full HD reference screenshots for AI video generator...");
  const outDir = "/home/mohammad/Dev/Websites/smartlearnwebsite/video_ai_prompts/reference_images";
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome-stable",
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: { width: 1920, height: 1080 },
  });

  const page = await browser.newPage();
  const htmlPath = path.resolve(__dirname, "video_animation.html");
  await page.goto("file://" + htmlPath, { waitUntil: "networkidle0" });

  const scenes = [
    { time: 1, filename: "01_who_is_mn_architecture.jpg" },
    { time: 18, filename: "02_quiz_ai_chat_tutor.jpg" },
    { time: 33, filename: "03_ai_rubric_grader.jpg" },
    { time: 48, filename: "04_kashier_payment_gateway.jpg" },
    { time: 63, filename: "05_n8n_enterprise_automation.jpg" }
  ];

  for (const s of scenes) {
    await page.evaluate((t) => window.setVideoTime(t), s.time);
    const filepath = path.join(outDir, s.filename);
    await page.screenshot({ path: filepath, type: "jpeg", quality: 95 });
    console.log("Saved screenshot:", s.filename);
  }

  await browser.close();
  console.log("All 5 Full HD reference images saved successfully to:", outDir);
}

capture().catch((err) => {
  console.error(err);
  process.exit(1);
});
