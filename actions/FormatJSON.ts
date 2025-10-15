export function formatJSON(json: string): string | null {
    if (!json || !json.trim()) {
        return null;
    }

    try {
        const parsed = JSON.parse(json);

        if (typeof parsed === "object" && parsed !== null && Object.keys(parsed).length === 0) {
            return null;
        }

        return JSON.stringify(parsed, null, 2);
    } catch (error) {
        console.error("Invalid JSON:", error);
        return null;
    }
}
