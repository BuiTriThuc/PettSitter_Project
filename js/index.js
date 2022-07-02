$(".field-petsubmitform-status").removeClass(
  "md:w-1/2 md:float-left lg:w-1/2 lg:float-left"
);
$(".field-petsubmitform-secondary_status")
  .removeClass(
    "md:w-1/2 md:float-left md:mt-ff-15 lg:w-1/2 lg:float-left lg:mt-ff-15"
  )
  .hide();

jQuery("input[name='PetSubmitForm[status]']").change(function () {
  if ($(this).val() == 100) {
    var zipCodeText = "Zip Code Last Seen";
    $("input[name='PetSubmitForm[pet_name]']").val("");
    $("#petSubmitButton").html("<strong>Get Your Pet Back Home<strong>");
    $(".foundPetTransformHeader").html("<strong>Find Your Lost Pet<strong>");
    lostPetTextTransform();

    $(".field-petsubmitform-status").removeClass(
      "md:w-1/2 md:float-left lg:w-1/2 lg:float-left"
    );
    $(".field-petsubmitform-secondary_status")
      .removeClass(
        "md:w-1/2 md:float-left md:mt-ff-15 lg:w-1/2 lg:float-left lg:mt-ff-15"
      )
      .hide();
  } else if ($(this).val() == 101) {
    var zipCodeText = "Zip Code Found";
    $("input[name='PetSubmitForm[pet_name]']").val("Unknown");
    $("#petSubmitButton").html("<strong>Get This Pet Back Home<strong>");
    $(".foundPetTransformHeader").html("<strong>Get This Pet Home<strong>");
    foundPetTextTransform();

    $(".field-petsubmitform-status").addClass(
      "md:w-1/2 md:float-left lg:w-1/2 lg:float-left"
    );
    $(".field-petsubmitform-secondary_status")
      .addClass(
        "md:w-1/2 md:float-left md:mt-ff-15 lg:w-1/2 lg:float-left lg:mt-ff-15"
      )
      .show();
  }
  $('label[for="petsubmitform-zip_code"]').html(zipCodeText);
});
