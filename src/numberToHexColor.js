export default function numberToHexColor(number) {
    // Ensure the number is within the valid range (0 - 1200)
    const clampedNumber = Math.min(Math.max(number, 0), 1200);

    // Map the number to a hue value between 0 and 360
    const hue = (clampedNumber / 1200) * 360;

    // Convert HSV to RGB
    const hsvToRgb = (h, s, v) => {
        const c = (v * s);
        const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
        const m = v - c;

        let r, g, b;
        if (h < 60) {
            [r, g, b] = [c, x, 0];
        } else if (h < 120) {
            [r, g, b] = [x, c, 0];
        } else if (h < 180) {
            [r, g, b] = [0, c, x];
        } else if (h < 240) {
            [r, g, b] = [0, x, c];
        } else if (h < 300) {
            [r, g, b] = [x, 0, c];
        } else {
            [r, g, b] = [c, 0, x];
        }

        return [
            Math.round((r + m) * 255),
            Math.round((g + m) * 255),
            Math.round((b + m) * 255),
        ];
    };

    const [r, g, b] = hsvToRgb(hue, 1, 1);

    // Convert RGB to hex
    const rgbToHex = (value) => value.toString(16).padStart(2, '0');
    const hexColor = `#${rgbToHex(r)}${rgbToHex(g)}${rgbToHex(b)}`;

    return hexColor;
}