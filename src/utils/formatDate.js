export const formatDate = (milliseconds) => {
        const dateObj = new Date(milliseconds);
        const time = dateObj.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        const month = dateObj.toLocaleString('en-US',{month:'short'});
        const date = dateObj.getDate();
        const year = dateObj.getFullYear();
        const formattedDate = `${month} ${date}, ${year}, ${time}`;
    return formattedDate;
}