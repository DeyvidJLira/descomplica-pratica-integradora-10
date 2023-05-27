function formatDateToBrl (date_source) {  
    const date = new Date(`${date_source}T00:00:00`);

    if (date != "" || date != null || date != undefined) {
      let day, month, year;

      day = date.getDate();
      month = date.getMonth() + 1;
      year = date.getFullYear();

      day = day.toString().padStart(2, '0');

      month = month.toString().padStart(2, '0');

      return `${day}/${month}/${year}`;

    } else {
      return ''
    }
}

export default {formatDateToBrl};  