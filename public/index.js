const inputVal = document.querySelector("#input-value");
const anchorTag = document.querySelector("a");

inputVal.addEventListener("input", () => {
    inputVal.setAttribute("disabled", null);
    inputVal.classList.add("text-[12px]", "sm:text-[20px]");
    anchorTag.classList.remove("hidden");
    inputVal.value = "ဝမ်းနည်းပါတယ် ဤလုပ်ဆောင်ချက်အား ယခုအသုံးပြု၍မရနိုင်ပါ။"
})

inputVal.addEventListener("click", () => {
    inputVal.setAttribute("disabled", null);
    inputVal.classList.add("text-[12px]", "sm:text-[20px]");
    anchorTag.classList.remove("hidden");
    inputVal.value = "ဝမ်းနည်းပါတယ် ဤလုပ်ဆောင်ချက်အား ယခုအသုံးပြု၍မရနိုင်ပါ။"
})