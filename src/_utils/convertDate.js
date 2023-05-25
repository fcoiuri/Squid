export const convertDate = (date) => {
  const _date = new Date(date);
  return (
    ('00' + (_date.getMonth() + 1)).slice(-2) +
    '/' +
    ('00' + _date.getDate()).slice(-2) +
    '/' +
    _date.getFullYear() +
    ' ' +
    ('00' + _date.getHours()).slice(-2) +
    ':' +
    ('00' + _date.getMinutes()).slice(-2)
  );
};
