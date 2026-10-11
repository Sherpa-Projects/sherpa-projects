import { timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

function safeCompare(a: string, b: string): boolean {
  const first = Buffer.from(a);
  const second = Buffer.from(b);

  return first.length === second.length && timingSafeEqual(first, second);
}

export function proxy(request: NextRequest) {
  // Nur die Preview-Domain schützen
  const hostname = request.nextUrl.hostname;

  if (hostname !== "preview.sherpa-projects.net") {
    return NextResponse.next();
  }

  const username = process.env.PREVIEW_AUTH_USER;
  const password = process.env.PREVIEW_AUTH_PASSWORD;

  // Ohne konfigurierte Zugangsdaten keinen Zugriff erlauben
  if (!username || !password) {
    return new NextResponse("Preview authentication not configured", {
      status: 503,
    });
  }

  const authorization = request.headers.get("authorization");

  if (authorization?.startsWith("Basic ")) {
    try {
      const decoded = Buffer.from(
        authorization.slice(6).trim(),
        "base64",
      ).toString("utf8");

      const separator = decoded.indexOf(":");

      if (separator !== -1) {
        const providedUser = decoded.slice(0, separator);
        const providedPassword = decoded.slice(separator + 1);

        if (
          safeCompare(providedUser, username) &&
          safeCompare(providedPassword, password)
        ) {
          return NextResponse.next();
        }
      }
    } catch {
      // Ungültige Zugangsdaten
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate":
        'Basic realm="Sherpa Projects Preview", charset="UTF-8"',
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}

export const config = {
  matcher: "/:path*",
};
