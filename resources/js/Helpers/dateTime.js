export function dateTime(dateTime) {
    if (!dateTime) {
        return {
            date: "",
            time: "",
            isPassed: false,
            isNull: true,
        };
    }

    const dateObject = new Date(dateTime);
    const date = new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(dateObject);

    const time = new Intl.DateTimeFormat("id-ID", {
        hour: "numeric",
        minute: "numeric",
    }).format(dateObject);

    const isPassed = new Date() > dateObject;

    return { date, time, isPassed, isNull: false };
}
