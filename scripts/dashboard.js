$(() => {
  // dropdowns used in the document
  const dropdownFunc = (a, b) => {
    $(a).parent().css({ position: "relative" });

    $(a).on("click", () => {
      $(b).width() > window.innerWidth &&
        $(b).css("width", `${window.innerWidth - 10}px`);

      let x = $(b).parent().offset().left + $(b).width();

      $(b).css({
        left:
          window.innerWidth <= x + 5
            ? `-${
                x - window.innerWidth + (window.innerWidth >= 800 ? 60 : 30)
              }px`
            : "0",
      });
      $(b).toggle();
    });
  };
  dropdownFunc("#profile-btn", "#profile-dropdown");
  dropdownFunc("#notification-btn", "#notification-dropdown");
  dropdownFunc("#message-btn", "#message-dropdown");
  dropdownFunc("#manage-account-btn", "#manage-account-dropdown");

  // Toggle top nav
  $("#toggle-top-nav").on("click", () => {
    $(".profile-nav").toggleClass("display-grid open");
    $(".top-navigation .searchbar").toggle();
  });

  // Change top nav background color on scroll

  // Toggle Sidebar
  $("#open-menu, #close-menu").on("click", () => {
    $("#sidebar").toggleClass("display-grid");
    $(".sidebar-wrapper").toggle();
    console.log("kk");
  });

  // Show active menu item on sidebar
  $(`.icon-link-group[href="${window.location.href}"]`).addClass("active");

  // toggle tabs

  const toggleTabs = (a, b) => {
    $(a).on("click", () => {
      $(a).parent().children().hasClass("active") &&
        $(a).parent().children().removeClass("active");
      $(a).toggleClass("active");
      $(b).parent().children().css("display", "block") &&
        $(b).parent().children().hide();
      $(b).toggle();
    });
  };

  toggleTabs("#lg-card-notification-link", "#lg-card-notification-content");
  toggleTabs("#lg-card-account-link", "#lg-card-account-content");
  toggleTabs("#lg-card-loan-link", "#lg-card-loan-content");
  toggleTabs("#lg-card-invest-link", "#lg-card-invest-content");

  // Start the profile forms with data gotten from the backend
  for (const elem in $(".data-info-form input")) {
    $(".input-group input")[elem].value =
      $(".input-group input")[elem]?.dataset?.oldinfo;
  }

  const customFileBtn = (a, b) => {
    $(a).on("click", (e) => {
      e.preventDefault();
      $(b).click();
    });
  };
  customFileBtn("#profile-pic-update-button", "#profile-pic-update-input");
  customFileBtn(
    "#investor-form-next-of-kin-button",
    "#investor-form-next-of-kin-input"
  );
  customFileBtn("#loan-form-guarantor-button", "#loan-form-guarantor-input");

  // Disable and enable info - form groups
  const enableForm = (a, b) => {
    $(a).on("click", () => {
      $(b).attr("disabled") == "disabled"
        ? $(b).removeAttr("disabled")
        : $(b).attr("disabled", "disabled");
      $(`${b} button[hidden]`).toggle();
    });
  };

  enableForm("#security-form-btn", "#security-form-fieldset");
  enableForm("#profile-info-btn", "#profile-info-fieldset");

  // step form

  // Set the initial slider length for all step
  stepFormSliderCounter = 1;
  const stepFormCount = $(".step-form-container").children().length - 1;
  $(".step-form-container .slider").css(
    "width",
    `${(stepFormSliderCounter / stepFormCount) * 70}%`
  );

  function stepFormFunc(a) {
    $(a).on("click", function (e) {
      e.preventDefault();

      // Display the current step
      if (a == ".prevBtn") {
        $(this).parent().parent().css("display", "none");
        $(this)
          .parent()
          .parent()
          .prev(".step-form-item")
          .css("display", "grid");
        stepFormSliderCounter--;
      } else if (a == ".nextBtn") {
        e.preventDefault();
        $(this).parent().parent().css("display", "none");
        $(this)
          .parent()
          .parent()
          .next(".step-form-item")
          .css("display", "grid");
        stepFormSliderCounter++;
      }

      // change the slider width
      console.log(stepFormSliderCounter);
      $(this)
        .parent()
        .parent()
        .siblings(".slider")
        .css("width", `${(stepFormSliderCounter / stepFormCount) * 70}%`);
    });
  }
  stepFormFunc(".nextBtn");
  stepFormFunc(".prevBtn");

  const popUpFunc = (a, b, c) => {
    $(a).on("click", () => {
      $(c).show();
      $(".backdrop").show();
      $(c).css("z-index", $(".backdrop").css("z-index") + 1);
    });
    $(b).on("click", () => {
      $(c).hide();
      $(".backdrop").hide();
    });
  };

  popUpFunc("#openInvestorForm", "#closeInvestorForm", "#addInvestorForm");
  popUpFunc("#openLoanForm", "#closeLoanForm", "#addLoanForm");
  popUpFunc("#openUserForm", "#closeUserForm", "#addUserForm");

  $(".datatable").DataTable({});
});
