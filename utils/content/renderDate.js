// Converts dates to a `Month YYYY` format.
const renderDate = (date) => {
  if (date)
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));

  return null;
};

export default renderDate;
