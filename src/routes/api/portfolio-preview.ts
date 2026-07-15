import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const ALLOWED_PREVIEW_URLS = new Set([
  "https://ci4.erupaiya.com/",
  "https://www.innoplixit.com/vehicleregistration/",
  "https://neovidya.co.in/",
  "https://techfreshers.org/",
  "https://brandedgetraininginstitute.com/",
  "https://www.innoplixit.com/",
  "https://brandedgeinfotech.com/",
  "https://mminterio.com/",
  "https://hhtechsolutions.co.uk/",
  "https://yetiluxuryspainbanglore.in/",
  "https://miamorunisexsalon.com/",
  "https://woodenstory.in/",
  "https://www.samratmalam.com/",
  "https://madamehall.com/",
  "https://mensense.life/",
  "https://majestiquespainmiraroad.in/",
  "https://navyainteriordesigner.com/",
  "https://jeevawellneessspainmulund.in/",
  "https://pearlspainmulund.in/",
  "https://royalskythaispa.com/",
  "https://hrm.thebrandbug.com/login",
  "https://thepublicmatters.com/",
  "https://retailsera.com/",
  "https://aurawellnessspainthane.in/",
  "https://anandaspapowai.in/",
  "https://thespastory.in/",
  "https://www.dellaspainkalyan.in/",
]);

function previewErrorHtml(message: string, targetUrl?: string) {
  const safeUrl = targetUrl ? encodeURI(targetUrl) : "#";
  return `<!doctype html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#090912;color:#f8f8ff;font-family:Inter,system-ui,sans-serif}.box{max-width:320px;padding:24px;text-align:center}.badge{display:inline-flex;margin-bottom:12px;padding:7px 12px;border:1px solid rgba(255,255,255,.16);border-radius:999px;color:#8ad8ff;background:rgba(255,255,255,.06)}a{display:inline-flex;margin-top:14px;color:#fff;text-decoration:none;border-radius:12px;padding:10px 14px;background:linear-gradient(135deg,#3b82f6,#c86cff)}</style></head><body><div class="box"><span class="badge">Live preview</span><h1 style="font-size:20px;margin:0 0 8px">${message}</h1><p style="color:#b9b8c8;margin:0">Open the live website in a new tab.</p><a href="${safeUrl}" target="_blank" rel="noreferrer">Open website</a></div></body></html>`;
}

export const Route = createFileRoute("/api/portfolio-preview")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const requestUrl = new URL(request.url);
        const targetUrl = requestUrl.searchParams.get("url") || "";

        if (!ALLOWED_PREVIEW_URLS.has(targetUrl)) {
          return new Response(previewErrorHtml("Preview URL is not allowed"), {
            status: 403,
            headers: { "Content-Type": "text/html; charset=utf-8" },
          });
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 9000);

        try {
          const response = await fetch(targetUrl, {
            signal: controller.signal,
            headers: {
              "User-Agent": "Mozilla/5.0 (compatible; KetanPatilPortfolioPreview/1.0)",
              Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            },
          });

          const contentType = response.headers.get("Content-Type") || "";
          if (!response.ok || !contentType.includes("text/html")) {
            return new Response(previewErrorHtml("This website preview is unavailable", targetUrl), {
              status: 200,
              headers: { "Content-Type": "text/html; charset=utf-8" },
            });
          }

          const html = await response.text();
          const baseHref = new URL(targetUrl).origin + "/";
          const cleanedHtml = html
            .replace(/<script\b[^>]*src=["'][^"']*(debugbar|toolbar|profiler)[^"']*["'][^>]*><\/script>/gi, "")
            .replace(/<script\b[^>]*>[\s\S]*?(debugbar_time|CodeIgniter Debug Toolbar|XMLHttpRequest)[\s\S]*?<\/script>/gi, "");
          const enhancedHtml = cleanedHtml.includes("<head")
            ? cleanedHtml.replace(/<head([^>]*)>/i, `<head$1><base href="${baseHref}"><meta name="referrer" content="no-referrer-when-downgrade">`)
            : `<base href="${baseHref}">${cleanedHtml}`;

          return new Response(enhancedHtml, {
            status: 200,
            headers: {
              "Content-Type": "text/html; charset=utf-8",
              "Cache-Control": "public, max-age=300",
              "Content-Security-Policy": "worker-src 'none'; object-src 'none'",
            },
          });
        } catch {
          return new Response(previewErrorHtml("The live website took too long to load", targetUrl), {
            status: 200,
            headers: { "Content-Type": "text/html; charset=utf-8" },
          });
        } finally {
          clearTimeout(timeout);
        }
      },
    },
  },
});
