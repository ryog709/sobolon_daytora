jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // ヘッダーの高さ分だけコンテンツを下げる
  $(function () {
    const height = $(".js-header").height();
    $("main").css("margin-top", height);
  });
  // ページ内スクロール
  $(function () {
    // ヘッダーの高さ取得
    const headerHeight = $(".js-header").height();
    $('a[href^="#"]').click(function () {
      const speed = 800;
      let href = $(this).attr("href");
      let target = $(href == "#" || href == "" ? "html" : href);
      // ヘッダーの高さ分下げる
      let position = target.offset().top - headerHeight;
      $("body,html").animate({ scrollTop: position }, speed, "swing");
      return false;
    });
  });

  $(function () {
    // ヘッダーロゴをクリックしたときの処理
    $(".scroll-to-top").click(function () {
      const speed = 800; // スクロールスピード（ミリ秒）
      // トップにスクロールする
      $("body,html").animate({ scrollTop: 0 }, speed, "swing");
      return false; // デフォルトのクリック動作を無効にする
    });
  });

  //ハンバーガーメニュー
  $(function () {
    $(".js-hamburger,.js-drawer,.js-drawer a").click(function () {
      $(".js-hamburger, .js-drawer").toggleClass("is-current");
    });
  });

  $(".js-drawer a").click(function () {
    $(".js-hamburger, .js-drawer").removeClass("is-current");
  });










  $(document).ready(function () {
    function checkRequired() {
      let allFilled = true;
      $(".required").each(function () {
        if ($(this).attr("type") === "checkbox") {
          if (!$(this).prop("checked")) {
            allFilled = false;
            return false; // ループを抜ける
          }
        } else {
          if ($(this).val() === "") {
            allFilled = false;
            return false; // ループを抜ける
          }
        }
      });
      return allFilled;
    }

    $(".required").on("input", function () {
      if (checkRequired()) {
        $(".submit-button").addClass("enabled");
      } else {
        $(".submit-button").removeClass("enabled");
      }
    });
  });
});

new WOW().init();
