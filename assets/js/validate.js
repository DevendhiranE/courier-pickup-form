const formEle = document.getElementById("courier-request-form");
const validate = new window.JustValidate(formEle);
validate.addField(
  "#name",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 20,
    },
  ],
  {
    errorLabelCssClass: ["mt-2", "text-sm"],
  }
);
validate.addField(
  "#mobile-no",
  [
    {
      rule: "required",
    },
    {
      rule: "number",
    },
    {
      rule: "minLength",
      value: 10,
    },
    {
      rule: "maxLength",
      value: 10,
    },
  ],
  {
    errorLabelCssClass: ["mt-2", "text-sm"],
  }
);
validate.addField(
  "#date-time",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelCssClass: ["mt-2", "text-sm"],
  }
);
validate.addField(
  "#pickup-area",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelCssClass: ["mt-2", "text-sm"],
  }
);
formEle.addEventListener("submit", () => {
  validate.onSuccess((e) => {
    console.log("Success");
  });
});
