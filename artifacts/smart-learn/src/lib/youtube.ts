const YOUTUBE_ID_RE = /^[a-zA-Z0-9_-]{11}$/;

/**
 * Extracts an 11-character YouTube video ID from standard watch, short,
 * embed, shorts, live URLs, or a raw video ID string.
 */
export function extractYouTubeId(input?: string | null): string | null {
  if (!input) return null;
  const trimmed = input.trim();
  if (!trimmed) return null;

  if (YOUTUBE_ID_RE.test(trimmed)) {
    return trimmed;
  }

  try {
    const url = new URL(trimmed);
    const host = url.hostname.replace(/^www\./, "").toLowerCase();

    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return id && YOUTUBE_ID_RE.test(id) ? id : null;
    }

    if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "youtube-nocookie.com"
    ) {
      const vParam = url.searchParams.get("v");
      if (vParam && YOUTUBE_ID_RE.test(vParam)) {
        return vParam;
      }

      const segments = url.pathname.split("/").filter(Boolean);
      const prefix = segments[0];
      const candidate = segments[1];
      if (
        (prefix === "embed" || prefix === "shorts" || prefix === "live" || prefix === "v") &&
        candidate &&
        YOUTUBE_ID_RE.test(candidate)
      ) {
        return candidate;
      }
    }
  } catch {
    return null;
  }

  return null;
}

export function getYouTubeEmbedUrl(videoId: string, autoplay = false): string {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    ...(autoplay ? { autoplay: "1" } : {}),
  });
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

export function getYouTubeWatchUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function getYouTubeThumbnailUrl(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}
