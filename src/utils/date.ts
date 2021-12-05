// get monday and friday
export const getWeek = () => {
    const currentDate = new Date();

    const firstDay = new Date(
        currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1)
    );
    const lastDay = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 5));
    return { firstDay, lastDay };
};

// get url format string
export const formattedDate = ({ firstDay, lastDay }: { firstDay: Date; lastDay: Date }) => {
    return (
        firstDay.toLocaleDateString().replaceAll(".", ".+").slice(0, -2) +
        "+" +
        lastDay.toLocaleDateString().replaceAll(".", ".+").slice(0, -2)
    );
};

export const formattedWeekDate = () => {
    return formattedDate(getWeek()).replaceAll(" ", "");
};
