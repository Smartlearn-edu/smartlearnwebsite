const puppeteer = require("puppeteer");
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

async function record() {
  console.log("Starting 1080p MP4 Video Recording (75 seconds @ 25fps)...");
  const videoDir = path.resolve(__dirname, "../public/video");
  if (!fs.existsSync(videoDir)) {
    fs.mkdirSync(videoDir, { recursive: true });
  }

  const outputPath = path.join(videoDir, "smart-learn-plugins-demo.mp4");

  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome-stable",
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    defaultViewport: { width: 1920, height: 1080 },
  });

  const page = await browser.newPage();
  const htmlPath = path.resolve(__dirname, "video_animation.html");
  await page.goto("file://" + htmlPath, { waitUntil: "networkidle0" });

  const fps = 25;
  const durationSeconds = 75; // 1 min 15 seconds (5 scenes * 15 seconds each)
  const totalFrames = fps * durationSeconds;

  const ffmpeg = spawn("/usr/bin/ffmpeg", [
    "-y",
    "-f", "image2pipe",
    "-vcodec", "mjpeg",
    "-r", String(fps),
    "-i", "-",
    "-c:v", "libx264",
    "-pix_fmt", "yuv420p",
    "-preset", "fast",
    "-b:v", "4000k",
    outputPath,
  ]);

  for (let f = 0; f <= totalFrames; f++) {
    const sec = f / fps;
    await page.evaluate((s) => window.setVideoTime(s), sec);
    const screenshot = await page.screenshot({ type: "jpeg", quality: 90 });
    ffmpeg.stdin.write(screenshot);
    if (f % 150 === 0) {
      console.log(`Rendered frame ${f}/${totalFrames} (${sec.toFixed(1)}s)...`);
    }
  }

  ffmpeg.stdin.end();

  await new Promise((resolve, reject) => {
    ffmpeg.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error("FFmpeg exited with code " + code));
    });
  });

  await browser.close();
  const stat = fs.statSync(outputPath);
  console.log(`\n🎉 SUCCESS! 1080p Video saved to: ${outputPath}`);
  console.log(`File size: ${(stat.size / (1024 * 1024)).toFixed(2)} MB`);
}

record().catch((err) => {
  console.error("Error generating video:", err);
  process.exit(1);
});
