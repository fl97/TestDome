function formatDate(userDate) {
    let dateArr = userDate.split('/');

    if (dateArr[0].length == 1) {
        dateArr[0] = '0' + dateArr[0];
    } else if (dateArr[1].length == 1) {
        dateArr[1] = '0' + dateArr[1];
    }

    userDate = dateArr[2] + dateArr[0] + dateArr[1];

    return userDate;
}