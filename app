import { NextResponse } from 'next/server';

export async function GET(req) {
  const url = req.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL missing" }, { status: 400 });
  }

  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html',
      },
      next: { revalidate: 0 }
    });

    const html = await res.text();

    // show real data
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
    const h1 = (html.match(/<h1/gi) || []).length;
    const h2 = (html.match(/<h2/gi) || []).length;
    const words = html.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length;
    const links = (html.match(/<a /gi) || []).length;
    const images = (html.match(/<img /gi) || []).length;

    const hasTitle = titleMatch? 1 : 0;
    const hasDesc = descMatch? 1 : 0;
    const seoScore = Math.min(100, 30 + (hasTitle*20) + (hasDesc*20) + (h1>0?15:0) + (words>300?15:0));

    return NextResponse.json({
      success: true,
      url: url,
      title: titleMatch? titleMatch[1].trim() : "No Title Found",
      description: descMatch? descMatch[1].trim() : "No Description Found",
      h1Count: h1,
      h2Count: h2,
      wordCount: words,
      links: links,
      images: images,
      seoScore: seoScore
    });

  } catch (e) {
    return NextResponse.json({ success: false, error: "Failed to fetch: " + e.message }, { status: 500 });
  }
}

