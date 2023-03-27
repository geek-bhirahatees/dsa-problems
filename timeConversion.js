const timeConverstion = (time) => {
  if (time.includes("PM") || time.includes("pm")) {
    let hr = parseInt(time.split(":")[0]);
    console.log(time.split(":")[2].split("PM"));
    if (parseInt(time.split(":")[0]) === 12) {
      return (
        12 + ":" + time.split(":")[1] + ":" + time.split(":")[2].split("PM")[0]
      );
    }
    return (
      hr +
      12 +
      ":" +
      time.split(":")[1] +
      ":" +
      time.split(":")[2].split("PM")[0]
    );
  } else {
    if (parseInt(time.split(":")[0]) === 12) {
      return (
        "00" +
        ":" +
        time.split(":")[1] +
        ":" +
        time.split(":")[2].split("AM")[0]
      );
    }
    return time.split("AM")[0];
  }
};
console.log(timeConverstion("12:45:54PM"));
