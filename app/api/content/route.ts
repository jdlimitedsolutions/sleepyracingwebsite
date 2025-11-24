import { NextResponse } from "next/server";
import { writeFileSync, existsSync, readFileSync, mkdirSync } from "fs";
import { join } from "path";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Create data directory if it doesn't exist
    const dataDir = join(process.cwd(), "data");
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, { recursive: true });
    }

    const csvPath = join(dataDir, "content-submissions.csv");

    // CSV headers
    const headers = ["Timestamp", "Name", "Instagram", "Email", "Car/Build", "Description", "Content Links"];

    // Check if file exists
    let csvContent = "";
    if (!existsSync(csvPath)) {
      // Create new file with headers
      csvContent = headers.join(",") + "\n";
    } else {
      // Read existing file
      csvContent = readFileSync(csvPath, "utf-8");
    }

    // Add new row
    const timestamp = new Date().toISOString();
    const row = [
      timestamp,
      data.name || "",
      data.instagram || "",
      data.email || "",
      data.car || "",
      (data.description || "").replace(/,/g, ";").replace(/\n/g, " "),
      data.links || "",
    ].join(",");

    csvContent += row + "\n";

    // Write to file
    writeFileSync(csvPath, csvContent);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving content submission:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save submission" },
      { status: 500 }
    );
  }
}
