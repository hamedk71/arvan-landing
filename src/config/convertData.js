export default function convertData(obj) {
    const cells = []

    for (const [key, value] of Object.entries(obj)) {
        cells.push({ column: key, value })
    }

    return { rows: [{ cells }] }
}