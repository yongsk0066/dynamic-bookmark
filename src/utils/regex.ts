//2021.+7.16+2021.+7.20 format regex
export const dateRegExp =
    /\d{4}.\+(0?[1-9]|1[012]).\+(0?[1-9]|[12][0-9]|3[01])\+\d{4}.\+(0?[1-9]|1[012]).\+(0?[1-9]|[12][0-9]|3[01])/;

// retrieve new url
export const updateUrl = (url: string, date: string) => {
    const index = dateRegExp.exec(url)?.index;
    return url.slice(0, index) + date;
};
