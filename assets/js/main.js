// const formEl = document.getElementById("courier-request-form");
formEle.addEventListener("submit", () => {
  validate.onSuccess((e) => {
    const formData = new FormData(formEle);
    for (let value of formData.values()) {
      console.log(value);
    }
  });
  //   return false;
});
