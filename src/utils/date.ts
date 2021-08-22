export const getWeek = () => {
    const today = new Date();
    const currentDate = new Date(today.setDate(today.getDate() - 1));

    const firstDay = new Date(
        currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1)
    );
    const lastDay = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 7));
    return { firstDay, lastDay };
};

export const formattedDate = ({ firstDay, lastDay }: { firstDay: Date; lastDay: Date }) => {
    return (
        firstDay.toLocaleDateString().replaceAll(".", ".+").slice(0, -2) +
        "+~+" +
        lastDay.toLocaleDateString().replaceAll(".", ".+").slice(0, -2)
    );
};

export const formattedWeekDate = () => {
    return formattedDate(getWeek());
};
