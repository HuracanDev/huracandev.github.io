$(document).ready(function () {
  // Scroll Events
  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // Activate menu
    if (wScroll > 20) {
      $("#main-nav").addClass("active");
      $("#slide_out_menu").addClass("scrolled");
    } else {
      $("#main-nav").removeClass("active");
      $("#slide_out_menu").removeClass("scrolled");
    }

    //Scroll Effects
  });

  // Navigation
  $("#navigation").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("open");
    $("#slide_out_menu").toggleClass("open");

    if ($("#slide_out_menu").hasClass("open")) {
      $(".menu-close").on("click", function (e) {
        e.preventDefault();
        $("#slide_out_menu").removeClass("open");
      });
    }
  });

  // Price Table
  var individual_price_table = $("#price_tables").find(".individual");
  var company_price_table = $("#price_tables").find(".company");

  $(".switch-toggles")
    .find(".individual")
    .addClass("active");
  $("#price_tables")
    .find(".individual")
    .addClass("active");

  $(".switch-toggles")
    .find(".individual")
    .on("click", function () {
      $(this).addClass("active");
      $(this)
        .closest(".switch-toggles")
        .removeClass("active");
      $(this)
        .siblings()
        .removeClass("active");
      individual_price_table.addClass("active");
      company_price_table.removeClass("active");
    });

  $(".switch-toggles")
    .find(".company")
    .on("click", function () {
      $(this).addClass("active");
      $(this)
        .closest(".switch-toggles")
        .addClass("active");
      $(this)
        .siblings()
        .removeClass("active");
      company_price_table.addClass("active");
      individual_price_table.removeClass("active");
    });

  // Wow Animations
  wow = new WOW({
    boxClass: "wow", // default
    animateClass: "animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
  });
  wow.init();

  // Menu For Xs Mobile Screens
  if ($(window).height() < 450) {
    $("#slide_out_menu").addClass("xs-screen");
  }

  $(window).on("resize", function () {
    if ($(window).height() < 450) {
      $("#slide_out_menu").addClass("xs-screen");
    } else {
      $("#slide_out_menu").removeClass("xs-screen");
    }
  });

  // Magnific Popup
  $(".lightbox").magnificPopup();



 
  // charts //

  var options = {
    chart: {
      type: 'line',
      height: '400px',
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    stroke: {
      width: ['3']
    },
    colors: ['#008000'],
    series: [{
      name: 'Прибыль',
      data: [
        0.00,
        -13.10,
        -8.73,
        -12.18,
        -20.18,
        -15.86,
        -11.20,
        -7.99,
        -7.99,
        -6.24,
        -11.21,
        -11.21,
        -7.80,
        -23.63,
        -19.85,
        -21.29,
        -16.76,
        -8.07,
        -9.30,
        -9.37,
        -9.37,
        -3.77,
        -3.77,
        -13.12,
        -13.12,
        -7.50,
        -18.91,
        -16.90,
        -16.90,
        -17.92,
        -14.71,
        -9.49,
        -12.16,
        -6.42,
        -6.42,
        -0.62,
        -0.62,
        7.27,
        7.27,
        -6.88,
        -4.20,
        -4.99,
        -6.05,
        -0.45,
        -0.45,
        -9.90,
        -4.49,
        9.07,
        9.07,
        14.03,
        15.17,
        14.13,
        14.13,
        28.49,
        28.04,
        37.35,
        30.54,
        54.97,
        59.42,
        68.60,
        79.30,
        76.64,
        63.35,
        64.13,
        60.69,
        53.30,
        51.55,
        51.55,
        51.55,
        49.92,
        41.95,
        29.84,
        20.58,
        28.14,
        19.48,
        19.09,
        19.09,
        21.29,
        15.59,
        13.53,
        14.79,
        25.55,
        29.53,
        26.75,
        26.29,
        32.29,
        46.33,
        46.33,
        46.33,
        44.37,
        35.26,
        41.13,
        38.57,
        42.74,
        45.57,
        41.13,
        38.57,
        42.74,
        45.57,
        -13.10,
        -8.73,
        -12.18,
        -20.18,
        -15.86,
        -11.20,
        -7.99,
        -7.99,
        -6.24,
        -11.21,
        -11.21,
        -7.80,
        -23.63,
        -19.85,
        -21.29,
        -16.76,
        -8.07,
        -9.30,
        -9.37,
        -9.37,
        -3.77,
        -3.77,
        -13.12,
        -13.12,
        -7.50,
        -18.91,
        -16.90,
        -16.90,
        -17.92,
        -14.71,
        -9.49,
        -12.16,
        -6.42,
        -6.42,
        -0.62,
        -0.62,
        7.27,
        7.27,
        -6.88,
        -4.20,
        -4.99,
        -6.05,
        -0.45,
        -0.45,
        -9.90,
        -4.49,
        9.07,
        9.07,
        14.03,
        15.17,
        14.13,
        14.13,
        28.49,
        28.04,
        37.35,
        30.54,
        54.97,
        59.42,
        68.60,
        79.30,
        76.64,
        63.35,
        64.13,
        60.69,
        53.30,
        51.55,
        51.55,
        51.55,
        49.92,
        41.95,
        29.84,
        20.58,
        28.14
      ]
    }],
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "%";
        }
      },
    },
    xaxis: {
      categories: [
        '22.04.2014',
        '23.04.2014',
        '24.04.2014',
        '25.04.2014',
        '28.04.2014',
        '29.04.2014',
        '30.04.2014',
        '01.05.2014',
        '02.05.2014',
        '05.05.2014',
        '06.05.2014',
        '07.05.2014',
        '08.05.2014',
        '09.05.2014',
        '12.05.2014',
        '13.05.2014',
        '14.05.2014',
        '15.05.2014',
        '16.05.2014',
        '19.05.2014',
        '20.05.2014',
        '21.05.2014',
        '22.05.2014',
        '23.05.2014',
        '26.05.2014',
        '27.05.2014',
        '28.05.2014',
        '29.05.2014',
        '30.05.2014',
        '02.06.2014',
        '03.06.2014',
        '04.06.2014',
        '05.06.2014',
        '06.06.2014',
        '09.06.2014',
        '10.06.2014',
        '11.06.2014',
        '12.06.2014',
        '13.06.2014',
        '16.06.2014',
        '17.06.2014',
        '18.06.2014',
        '19.06.2014',
        '20.06.2014',
        '23.06.2014',
        '24.06.2014',
        '25.06.2014',
        '26.06.2014',
        '27.06.2014',
        '30.06.2014',
        '01.07.2014',
        '02.07.2014',
        '03.07.2014',
        '04.07.2014',
        '07.07.2014',
        '08.07.2014',
        '09.07.2014',
        '15.07.2014',
        '10.07.2014',
        '17.07.2014',
        '11.07.2014',
        '21.07.2014',
        '14.07.2014',
        '23.07.2014',
        '16.07.2014',
        '25.07.2014',
        '18.07.2014',
        '22.07.2014',
        '30.07.2014',
        '24.07.2014',
        '01.08.2014',
        '28.07.2014',
        '05.08.2014',
        '29.07.2014',
        '31.07.2014',
        '04.08.2014',
        '06.08.2014',
        '07.08.2014',
        '08.08.2014',
        '11.08.2014',
        '12.08.2014',
        '13.08.2014',
        '14.08.2014',
        '15.08.2014',
        '18.08.2014',
        '19.08.2014',
        '20.08.2014',
        '21.08.2014',
        '22.08.2014',
        '25.08.2014',
        '26.08.2014',
        '27.08.2014',
        '28.08.2014',
        '29.08.2014',
        '01.09.2014',
      ]
    }
  }

  var chart = new ApexCharts(document.querySelector("#lineChart"), options);

  chart.render();

  // line chart //

  var options = {
    chart: {
      height: 350,
      type: 'bar',
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top', // top, center, bottom
        },
        colors: {
          ranges: [
            {
              from: 0,
              to: 9999999,
              color: '#008000'
            }, {
              from: -100,
              to: 0,
              color: '#d63031'
            }
          ]
        },
        columnWidth: '80%',
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -30,
      style: {
        fontSize: '14px',
        colors: ["#304758"]
      }
    },
    series: [{
      name: 'Доходность',
      data: [31.45, 35.42, 25.9, 52.42, 42.6, -28.1, 58.2, 44.16, 61.1, 56.09, 40.34, 53.88]
    }],

    yaxis: {
      labels: {
        formatter: function (val) {
          return val + "%";
        }
      }

    },
    xaxis: {
      // TODO: uncomment below and fix the error
      //type: 'datetime',
      categories: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      // labels: {
      //     // rotate: -90
      // }
    },

  }

  var chart = new ApexCharts(
    document.querySelector("#monthProfit"),
    options
  );

  chart.render();

  // month chart //


  var options = {
    chart: {
      height: 350,
      type: 'bar',
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top', // top, center, bottom
        },
        colors: {
          ranges: [
            {
              from: 0,
              to: 9999999,
              color: '#008000'
            }, {
              from: -100,
              to: 0,
              color: '#d63031'
            }
          ]
        },
        columnWidth: '80%',
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -30,
      style: {
        fontSize: '14px',
        colors: ["#304758"]
      }
    },
    series: [{
      name: 'Доходность',
      data: [21.45, -25.42, -15.9, 250.42, 1512.6, 3218.1, 5118.2]
    }],

    yaxis: {
      labels: {
        formatter: function (val) {
          return val + "%";
        }
      }

    },
    xaxis: {
      // TODO: uncomment below and fix the error
      //type: 'datetime',
      categories: ['Сегодня', 'Неделя', '1 мес', '3 мес', '6 мес', 'Год', 'За все время'],
      // labels: {
      //     // rotate: -90
      // }
    },
    // tooltip: {
    //   colors: ["#304758"]
    // },
  }

  var chart = new ApexCharts(
    document.querySelector("#progressiveProfit"),
    options
  );

  chart.render();

  // progressiveChart //

  var options = {
    title: {
      // text: 'Общая прибыль',
      align: 'center',
      offsetY: 150,
      style: {
        fontSize: '16px',
        color: '#263238',
      },
    },
    chart: {
      height: '350px',
      width: '350px',
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    labels: ['Управляющему', 'Инвестору'],
    series: [25, 75],
    legend: {
      show: false,
      // position: 'top'
    },
    plotOptions: {
      pie: {
        // customScale: 0.75,
        // offsetY: 140
      }
    },
  };

  var chart = new ApexCharts(document.querySelector("#pieChart"), options);

  chart.render();

});
