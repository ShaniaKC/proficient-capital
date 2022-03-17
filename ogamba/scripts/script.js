$(() => {
  // handle dropdowns
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
      console.log(
        $(b).parent().offset().left + $(b).width(),
        x,
        window.innerWidth
      );
    });
  };

  dropdownFunc("#menu-btn", "#menu-dropdown");
});
