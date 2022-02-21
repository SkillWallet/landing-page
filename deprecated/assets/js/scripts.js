/*!
 * SkillWallet.
 **/
var SkillWallet = (function (jQ, win, doc) {
  "use strict";
  var SkillWallet = {
      AppInfo: {
        name: "SkillWallet",
        package: "1.9.2",
        version: "1.0.4",
        author: "SkillWallet",
      },
    },
    components = {
      docReady: [],
      docReadyDefer: [],
      winLoad: [],
      winLoadDefer: [],
    };

  jQ(doc).ready(docReady);
  jQ(win).on("load", winLoad);

  function docReady(stmt) {
    stmt = typeof stmt === typeof undefined ? jQ : stmt;
    components.docReady
      .concat(components.docReadyDefer)
      .forEach(function (component) {
        component(stmt);
      });
  }

  function winLoad(stmt) {
    stmt = typeof stmt === "object" ? jQ : stmt;
    components.winLoad
      .concat(components.winLoadDefer)
      .forEach(function (component) {
        component(stmt);
      });
  }

  SkillWallet.components = components;
  SkillWallet.docReady = docReady;
  SkillWallet.winLoad = winLoad;

  return SkillWallet;
})(jQuery, window, document);

SkillWallet = (function (SkillWallet, $, window, document) {
  ("use strict");
  // Defined Variables
  var $win = $(window),
    $doc = $(document),
    $body = $("body"),
    $header = $(".header-main");

  var _navBreak = 992,
    _mobBreak = 768,
    _mobMenu = "menu-mobile",
    _has_fixed = "has-fixed",
    _is_shrink = "is-shrink",
    _block = "nk-block",
    _body_class = "nio-theme",
    _currentURL = window.location.href,
    _currentHST = window.location.hostname,
    _headerHT = $header.innerHeight() - 2,
    _splitURL = _currentURL.split("#");

  // is exists @v1.0
  $.fn.exists = function () {
    return this.length > 0;
  };

  // Return Check @v1.0
  SkillWallet.Win = {};
  SkillWallet.Win.height = $(window).height();
  SkillWallet.Win.width = $(window).width();

  // getStatus @v1.0
  SkillWallet.getStatus = {};
  SkillWallet.getStatus.isRTL =
    $body.hasClass("has-rtl") || $body.attr("dir") === "rtl" ? true : false;
  SkillWallet.getStatus.isTouch =
    "ontouchstart" in document.documentElement ? true : false;
  SkillWallet.getStatus.isMobile = navigator.userAgent.match(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|/i
  )
    ? true
    : false;
  SkillWallet.getStatus.asMobile =
    SkillWallet.Win.width < _mobBreak ? true : false;

  // Update on Resize
  $win.on("resize", function () {
    SkillWallet.Win.height = $(window).height();
    SkillWallet.Win.width = $(window).width();
    SkillWallet.getStatus.asMobile =
      SkillWallet.Win.width < _mobBreak ? true : false;
  });

  //// Utilities ////
  ///////////////////
  SkillWallet.Util = {};
  // ClassInit !Util @v1.0
  SkillWallet.Util.classInit = function () {
    var hastouch = function () {
        if (SkillWallet.getStatus.isTouch === true) {
          $body.addClass("has-touch");
        } else {
          $body.addClass("no-touch");
        }
      },
      mobileview = function () {
        if (SkillWallet.getStatus.asMobile === true) {
          $body.addClass("as-mobile");
        } else {
          $body.removeClass("as-mobile");
        }
      },
      hasrtl = function () {
        if ($body.attr("dir") === "rtl") {
          $body.addClass("has-rtl");
          SkillWallet.getStatus.isRTL = true;
        }
      },
      theming = function () {
        if (typeof _body_class !== "undefined") {
          $body.addClass("nk-" + _body_class);
        }
      };
    hastouch();
    mobileview();
    hasrtl();
    theming();
    $(window).on("resize", mobileview);
  };
  SkillWallet.components.docReady.push(SkillWallet.Util.classInit);

  // PreLoader !Util @v1.0
  SkillWallet.Util.preLoader = function () {
    var $preloader = $(".preloader"),
      $spinner = $(".spinner");

    if ($preloader.exists()) {
      $body.addClass("page-loaded");
      $spinner.addClass("load-done");
      if (!$spinner.hasClass("spinner-alt")) {
        $spinner.fadeOut(300);
      }
      $preloader.delay(600).fadeOut(300);
    }
  };
  SkillWallet.components.winLoad.push(SkillWallet.Util.preLoader);

  // BackTop !Util @v1.0
  SkillWallet.Util.backTop = function () {
    var $backtop = $(".backtop");

    if ($backtop.exists()) {
      var scrollOffsetFromTop = 800;
      if ($win.scrollTop() > scrollOffsetFromTop) {
        $backtop.fadeIn("slow");
      } else {
        $backtop.fadeOut("slow");
      }

      $backtop.on("click", function (e) {
        $("body,html").stop().animate(
          {
            scrollTop: 0,
          },
          1500,
          "easeInOutExpo"
        );
        e.preventDefault();
      });
    }
  };
  SkillWallet.components.docReady.push(SkillWallet.Util.backTop);

  // Browser Check !Util @v1.0
  SkillWallet.Util.browser = function () {
    var isChrome = navigator.userAgent.indexOf("Chrome") !== -1 ? 1 : 0,
      isFirefox = navigator.userAgent.indexOf("Firefox") !== -1 ? 1 : 0,
      isSafari = navigator.userAgent.indexOf("Safari") !== -1 ? true : false,
      isIE =
        navigator.userAgent.indexOf("MSIE") !== -1 || !!document.documentMode
          ? 1
          : 0,
      isEdge = !isIE && !!window.StyleMedia,
      isOpera =
        navigator.userAgent.indexOf("Opera") ||
        navigator.userAgent.indexOf("OPR")
          ? 1
          : 0;

    if (isChrome) {
      $body.addClass("chrome");
    } else if (isFirefox) {
      $body.addClass("firefox");
    } else if (isIE) {
      $body.addClass("ie");
    } else if (isEdge) {
      $body.addClass("edge");
    } else if (isOpera) {
      $body.addClass("opera");
    } else if (isSafari) {
      $body.addClass("safari");
    }
  };
  SkillWallet.components.winLoad.push(SkillWallet.Util.browser);

  // HeaderSticky !Util @v1.0
  SkillWallet.Util.headerSticky = function () {
    var $is_sticky = $(".is-sticky");

    var stickyInit = {};

    stickyInit.hasFixed = function () {
      if ($is_sticky.exists()) {
        var navm = $is_sticky.offset();
        $win.on("scroll", function () {
          var _top = $win.scrollTop();
          if (_top > navm.top) {
            if (!$is_sticky.hasClass(_has_fixed)) {
              $is_sticky.addClass(_has_fixed);
            }
            if (typeof _body_class === "undefined") {
              $body.addClass("d-" + "n" + "one");
            }
          } else {
            if ($is_sticky.hasClass(_has_fixed)) {
              $is_sticky.removeClass(_has_fixed);
            }
          }
        });
      }
    };
    stickyInit.hasShrink = function () {
      if ($is_sticky.hasClass(_is_shrink)) {
        _headerHT = $header.height() + 16 - 2;
      }
    };

    stickyInit.hasFixed();
    stickyInit.hasShrink();
    $win.on("resize", function () {
      _headerHT = $is_sticky.hasClass(_is_shrink)
        ? $header.height() + 16 - 2
        : $header.outerHeight() - 2;
    });
  };
  SkillWallet.components.docReady.push(SkillWallet.Util.headerSticky);

  // imageBG !Util @v1.0
  SkillWallet.Util.imageBG = function () {
    var $imagebg = $(".bg-image");

    if ($imagebg.exists()) {
      $imagebg.each(function () {
        var $this = $(this),
          $that = $this.parent(),
          overlay = $this.data("overlay"),
          opacity = $this.data("opacity"),
          image = $this.children("img").attr("src");
        var overlay_type =
          typeof overlay !== "undefined" && overlay ? overlay : false;
        var opacity_value =
          typeof opacity !== "undefined" && opacity ? opacity : false;

        // If image found
        if (typeof image !== "undefined" && image !== "") {
          if (!$that.hasClass("has-bg-image")) {
            $that.addClass("has-bg-image");
          }
          if (overlay_type) {
            if (!$this.hasClass("overlay-" + overlay_type)) {
              $this.addClass("overlay");
              $this.addClass("overlay-" + overlay_type);
            }
          } else {
            if (!$this.hasClass("overlay-fall")) {
              $this.addClass("overlay-fall");
            }
          }
          if (opacity_value) {
            $this.addClass("overlay-opacity-" + opacity_value);
          }
          $this
            .css("background-image", 'url("' + image + '")')
            .addClass("bg-image-loaded");
        }
      });
    }
  };
  SkillWallet.components.docReady.push(SkillWallet.Util.imageBG);

  // progressBar @v1.1
  SkillWallet.Util.progressBar = function () {
    var $data_percent = $("[data-percent]"),
      $data_point = $("[data-point]");
    if ($data_percent.exists()) {
      $data_percent.each(function () {
        $(this).css("width", $(this).data("percent") + "%");
      });
    }
    // @since v1.6
    if ($data_point.exists()) {
      $data_point.each(function () {
        $(this).css("left", $(this).data("point") + "%");
      });
    }
    if ($data_point.exists() && SkillWallet.getStatus.isRTL === true) {
      $data_point.each(function () {
        $(this).css("right", $(this).data("point") + "%");
        $(this).css("left", "auto");
      });
    }
  };
  SkillWallet.components.docReady.push(SkillWallet.Util.progressBar);

  // inputAnimation @v1.0
  SkillWallet.Util.inputAnimate = function () {
    var $inputline = $(".input-line");

    if ($inputline.exists()) {
      $inputline.each(function () {
        var $self = $(this),
          selfval = $self.val(),
          inputCls = "input-focused";

        if (selfval) {
          $self.parent().addClass(inputCls);
        }
        $self.on("focus", function () {
          $(this).parent().addClass(inputCls);
        });
        $self.on("blur", function () {
          $(this).parent().removeClass(inputCls);
          var afterblur = $(this).val();
          if (afterblur) {
            $(this).parent().addClass(inputCls);
          }
        });
      });
    }
  };
  SkillWallet.components.docReady.push(SkillWallet.Util.inputAnimate);

  // Dropdown @v1.0
  SkillWallet.Util.toggler = function () {
    var _trigger = ".toggle-tigger",
      _toggle = ".toggle-class";

    if ($(_trigger).exists()) {
      $doc.on("click", _trigger, function (e) {
        var $self = $(this);
        $(_trigger).not($self).removeClass("active");
        $(_toggle).not($self.parent().children()).removeClass("active");
        $self
          .toggleClass("active")
          .parent()
          .find(_toggle)
          .toggleClass("active");
        e.preventDefault();
      });
    }

    $doc.on("click", "body", function (e) {
      var $elm_tig = $(_trigger),
        $elm_tog = $(_toggle);
      if (
        !$elm_tog.is(e.target) &&
        $elm_tog.has(e.target).length === 0 &&
        !$elm_tig.is(e.target) &&
        $elm_tig.has(e.target).length === 0
      ) {
        $elm_tog.removeClass("active");
        $elm_tig.removeClass("active");
      }
    });
  };
  SkillWallet.components.docReady.push(SkillWallet.Util.toggler);

  // scrollAnimation !Util @v1.0
  SkillWallet.Util.scrollAnimation = function () {
    var $animated = $(".animated");

    if ($().waypoint && $animated.exists()) {
      $animated.each(function () {
        var aniWay = $(this),
          typ = aniWay.data("animate"),
          dur = aniWay.data("duration"),
          dly = aniWay.data("delay");
        aniWay.waypoint(
          function () {
            aniWay.addClass("animated " + typ).css("visibility", "visible");
            if (dur) {
              aniWay.css("animation-duration", dur + "s");
            }
            if (dly) {
              aniWay.css("animation-delay", dly + "s");
            }
          },
          { offset: "95%" }
        );
      });
    }
  };
  SkillWallet.components.winLoad.push(SkillWallet.Util.scrollAnimation);

  // Mainmenu/Nav @v1.0
  SkillWallet.MainMenu = function () {
    var $navbar_toggle = $(".navbar-toggle"),
      $main_navbar = $(".header-navbar"),
      $main_navbar_classic = $(".header-navbar-classic"),
      $menu_toggle = $(".menu-toggle"),
      $menu_link = $(".menu-link"),
      _main_menu = ".header-menu",
      _menu_drop = ".menu-drop",
      _open_nav = "open-nav",
      _nav_overlay = ".header-navbar-overlay",
      _open_menu = "menu-shown",
      _active_nav = "navbar-active";

    var MenuInit = {};

    // navToggle @v1.1
    MenuInit.Overlay = function () {
      if ($main_navbar.exists()) {
        $main_navbar.append('<div class="header-navbar-overlay"></div>');
      }
    };
    MenuInit.navToggle = function () {
      if ($navbar_toggle.exists()) {
        $navbar_toggle.on("click", function (e) {
          var $self = $(this),
            _self_toggle = $self.data("menu-toggle"),
            _blk = "nk" + "-" + "blo" + "ck";
          $self.toggleClass(_active_nav);
          if ($main_navbar_classic.exists()) {
            $("#" + _self_toggle)
              .slideToggle()
              .toggleClass(_open_menu);
          } else {
            $("#" + _self_toggle)
              .parent()
              .toggleClass(_open_menu);
          }
          if (_block !== _blk) $body.html("");
          $body.toggleClass("overlay-" + _open_menu);
          e.preventDefault();
        });
      }
    };
    // navClose @v1.0
    MenuInit.navClose = function () {
      $(_nav_overlay).on("click", function () {
        $navbar_toggle.removeClass(_active_nav);
        $main_navbar.removeClass(_open_menu);
        $body.removeClass("overlay-" + _open_menu);
      });
      $menu_link.on("click", function () {
        if (!$(this).hasClass("menu-toggle")) {
          $navbar_toggle.removeClass(_active_nav);
          $main_navbar.removeClass(_open_menu);
          $body.removeClass("overlay-" + _open_menu);
        }
      });
      $doc.on("click", "body", function (e) {
        if (
          !$menu_toggle.is(e.target) &&
          $menu_toggle.has(e.target).length === 0 &&
          !$header.is(e.target) &&
          $header.has(e.target).length === 0 &&
          $win.width() < _navBreak
        ) {
          $navbar_toggle.removeClass(_active_nav);
          $main_navbar_classic.find(_main_menu).slideUp();
          $main_navbar.removeClass(_open_menu);
          $body.removeClass("overlay-" + _open_menu);
        }
      });
    };

    // menuToggle for subnav @v1.0
    MenuInit.menuToggle = function () {
      if ($menu_toggle.exists()) {
        $menu_toggle.on("click", function (e) {
          var $parent = $(this).parent();
          if ($win.width() < _navBreak) {
            $parent.children(_menu_drop).slideToggle(400);
            $parent.siblings().children(_menu_drop).slideUp(400);
            $parent.toggleClass(_open_nav);
            $parent.siblings().removeClass(_open_nav);
          }
          e.preventDefault();
        });
      }
    };
    // mobileNav @v1.0
    MenuInit.mobileNav = function () {
      if ($win.width() < _navBreak) {
        $main_navbar.delay(500).addClass(_mobMenu);
      } else {
        $main_navbar.delay(500).removeClass(_mobMenu);
        $main_navbar.removeClass(_open_menu);
      }
    };
    // currentPage @v1.0
    MenuInit.currentPage = function () {
      if ($menu_link.exists()) {
        $menu_link.each(function () {
          if (_currentURL === this.href && _splitURL[1] !== "") {
            $(this)
              .closest("li")
              .addClass("active")
              .parent()
              .closest("li")
              .addClass("active");
          }
          if (
            typeof _currentURL === "undefined" ||
            typeof _currentHST === "undefined"
          ) {
            $body.addClass("d" + "-no" + "ne");
          }
        });
      }
    };
    // Initialing
    MenuInit.Overlay();
    MenuInit.navToggle();
    MenuInit.navClose();
    MenuInit.menuToggle();
    MenuInit.mobileNav();
    MenuInit.currentPage();
    $win.on("resize", function () {
      MenuInit.mobileNav();
    });
  };
  SkillWallet.components.docReady.push(SkillWallet.MainMenu);

  // OnePageScroll @v1.0
  SkillWallet.OnePageScroll = function () {
    var _scroll_tigger = ".menu-link";
    $("a" + _scroll_tigger + '[href*="#"]:not([href="#"])').on(
      "click",
      function () {
        if (
          location.pathname.replace(/^\//, "") ===
            this.pathname.replace(/^\//, "") &&
          location.hostname === this.hostname
        ) {
          var toHash = this.hash,
            toHashN = this.hash.slice(1)
              ? $("[name=" + this.hash.slice(1) + "]")
              : false;
          var $toHash = toHash.length ? $(toHash) : toHashN;
          if ($toHash.length) {
            $(".navbar-toggle").removeClass("active");
            $(".header-navbar").removeClass("menu-shown");
            $("html, body")
              .delay(150)
              .animate(
                {
                  scrollTop: $toHash.offset().top - _headerHT,
                },
                1000,
                "easeInOutExpo"
              );
            return false;
          }
        }
      }
    );
  };
  SkillWallet.components.docReady.push(SkillWallet.OnePageScroll);

  //scrollAct @v1.0
  SkillWallet.scrollAct = function () {
    var _header_menu_id = $(".header-menu").attr("id");
    $body.scrollspy({
      target: "#" + _header_menu_id,
      offset: _headerHT + 2,
    });
  };
  SkillWallet.components.docReady.push(SkillWallet.scrollAct);

  //ModalFix @v1.0
  SkillWallet.modalFix = function () {
    var $modal = $(".modal");
    $modal.on("shown.bs.modal", function () {
      if (!$body.hasClass("modal-open")) {
        $body.addClass("modal-open");
      }
    });
  };
  SkillWallet.components.docReady.push(SkillWallet.modalFix);

  //// Plugins ////
  /////////////////
  SkillWallet.Plugins = {};

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const today = new Date();
  const launchDate = new Date();
  launchDate.setDate(9);
  launchDate.setMonth(2);


  const diffDays = Math.round(Math.abs((today - launchDate) / oneDay));

  const launchDateTxt = `Starting in ${diffDays} Days`;

  $(".join-comminity-left-days .sw-box-subtitle span").text(launchDateTxt);

  // Flex Slider !Plugin @v1.9.1
  SkillWallet.Plugins.flexslider = function () {
    var $FlexSlioder = $(".flexslider");
    if ($FlexSlioder.exists()) {
      $FlexSlioder.flexslider({
        animation: "slide",
        controlNav: true,
        animationLoop: false,
        minItems: 1,
        maxItems: 1,
      });
    }
  };
  SkillWallet.components.docReady.push(SkillWallet.Plugins.flexslider);

  ajaxMailChimpForm($("#subscribe-form"), $("#subscribe-result"));
  function ajaxMailChimpForm($form, $resultElement) {
    $form.submit(function (e) {
      e.preventDefault();

      if (!isValidEmail($form)) {
        var error = "A valid email address must be provided.";
        $resultElement.html(error);
        $resultElement.css("color", "red");
      } else {
        $("#subscribe-form .fa-spinner").show();
        $("#mc-embedded-subscribe").prop("disabled", true);
        submitSubscribeForm($form, $resultElement);
      }
    });
  }

  function isValidEmail($form) {
    var email = $form.find("input[type='email']").val();
    if (!email || !email.length) {
      return false;
    } else if (email.indexOf("@") == -1) {
      return false;
    }

    return true;
  }

  function submitSubscribeForm($form, $resultElement) {
    $.ajax({
      type: "POST",
      url: $form.attr("action").replace("/post?", "/post-json?").concat("&c=?"),
      data: $form.serialize(),
      contentType: "application/json",
      dataType: "json",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      error: function (error) {
        $("#subscribe-form .fa-spinner").hide();
        $("#mc-embedded-subscribe").removeProp("disabled");
      },

      success: function (data) {
        if (data.result != "success") {
          var message =
            data.msg || "Sorry. Unable to subscribe. Please try again later.";
          $resultElement.css("color", "red");

          if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
            message = "You're already subscribed. Thank you.";
          }
          $resultElement.html(message);
          $("#subscribe-form .fa-spinner").hide();
          $("#mc-embedded-subscribe").removeAttr("disabled");
        } else {
          $resultElement.html("<div class='sucess-result'>SUCCESS!</div>");
          $("#mc-embedded-subscribe").hide();
        }
      },
    });
  }

  // // Validator !Plugin @v1.0
  // SkillWallet.Plugins.validform = function () {
  //   var $form = $(".form-validate");
  //   if (!$().validate) {
  //     console.log("jQuery Form Validate not Defined.");
  //     return true;
  //   }
  //   if ($form.exists()) {
  //     $form.each(function () {
  //       var $self = $(this);
  //       $self.validate();
  //       $self.find(".select").on("change", function () {
  //         $(this).valid();
  //       });
  //     });
  //   }
  // };
  // SkillWallet.components.docReady.push(SkillWallet.Plugins.validform);

  // // Form Validation !Plugin @v1.0
  // SkillWallet.Plugins.submitform = function () {
  //   var $form = $(".nk-form-submit");
  //   if (!$().validate && !$().ajaxSubmit) {
  //     console.log("jQuery Form and Form Validate not Defined.");
  //     return true;
  //   }

  //   if ($form.exists()) {
  //     $form.each(function () {
  //       var $self = $(this),
  //         _result = $self.find(".form-results");
  //       $self.validate({
  //         ignore: [],
  //         invalidHandler: function () {
  //           _result.slideUp(400);
  //         },
  //         submitHandler: function (form) {
  //           var unindexed_array = $(form).serializeArray();
  //           var formData = {};
  //           $.map(unindexed_array, function(n, i){
  //               formData[n['name']] = n['value'];
  //           });
  //           _result.slideUp(400);
  //           $.ajax({
  //             type: 'POST',
  //             data : JSON.stringify(formData),
  //             contentType: "application/json; charset=utf-8",
  //             dataType : "json",
  //             url: 'http://localhost:4000/skillwallet/api',
  //             success: function (data) {
  //               var type =
  //                 data.result === "error" ? "alert-danger" : "alert-success";
  //               _result
  //                 .removeClass("alert-danger alert-success")
  //                 .addClass("alert " + type)
  //                 .html(data.message)
  //                 .slideDown(400);
  //               if (data.result !== "error") {
  //                 $(form)
  //                   .clearForm()
  //                   .find("input")
  //                   .removeClass("input-focused");
  //               }
  //             },
  //           });
  //           return false;
  //         },
  //       });
  //       $self.find(".select").on("change", function () {
  //         $(this).valid();
  //       });
  //     });
  //   }
  // };
  // SkillWallet.components.docReady.push(SkillWallet.Plugins.submitform);

  // Parallax !Plugin @v1.0
  SkillWallet.Plugins.parallax = function () {
    var $parallax = $("[data-parallax]");

    if ($parallax.exists()) {
      $parallax.each(function () {
        var $self = $(this);
        if ($self.data("parallax") === true) {
          $self.addClass("plx-bg");
          $self.parent().addClass("has-plx");
        }
      });
    }
  };
  SkillWallet.components.docReady.push(SkillWallet.Plugins.parallax);

  // Popup !Plugin @v1.0
  SkillWallet.Plugins.popup = function () {
    var $content_popup = $(".content-popup"),
      $video_popup = $(".video-popup"),
      $image_popup = $(".image-popup");

    var popupInit = {};
    popupInit.content_popup = function () {
      if ($content_popup.exists()) {
        $content_popup.each(function () {
          var overlay = $(this).data("overlay");
          var setOverlay =
            typeof overlay !== "undefined" && overlay ? overlay : "";
          $(this).magnificPopup({
            type: "inline",
            preloader: true,
            removalDelay: 400,
            mainClass: "mfp-fade content-popup " + setOverlay,
          });
        });
      }
    };
    popupInit.video_popup = function () {
      if ($video_popup.exists()) {
        $video_popup.each(function () {
          $(this).magnificPopup({
            type: "iframe",
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false,
            callbacks: {
              beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace(
                  "mfp-figure",
                  "mfp-figure mfp-with-anim"
                );
                this.st.mainClass = this.st.el.attr("data-effect");
              },
            },
          });
        });
      }
    };
    popupInit.image_popup = function () {
      if ($image_popup.exists()) {
        $image_popup.each(function () {
          $(this).magnificPopup({
            type: "image",
            mainClass: "mfp-fade image-popup",
          });
        });
      }
    };
    popupInit.content_popup();
    popupInit.video_popup();
    popupInit.image_popup();
  };
  SkillWallet.components.docReady.push(SkillWallet.Plugins.popup);

  return SkillWallet;
})(SkillWallet, jQuery, window, document);
/* END @iO */
